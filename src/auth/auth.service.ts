import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service';
import { OrganizationsService } from '../organizations/organizations.service';

import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly organizationsService: OrganizationsService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const userExists = await this.usersService.findByEmail(dto.email);

    if (userExists) {
      throw new ConflictException('E-mail já cadastrado.');
    }

    const organization = await this.organizationsService.create(
      dto.organization,
    );

    const password = await bcrypt.hash(dto.password, 10);

    const user = await this.usersService.create({
      name: dto.name,
      email: dto.email,
      password,

      // Primeiro usuário da empresa
      role: 'ADMIN',

      organizationId: organization.id,
    });

    const token = await this.jwtService.signAsync({
      sub: user.id,
      organizationId: organization.id,
      role: user.role,
      email: user.email,
    });

    return {
      access_token: token,

      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },

      organization,
    };
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmail(dto.email);

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    const passwordIsValid = await bcrypt.compare(dto.password, user.password);

    if (!passwordIsValid) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    const token = await this.jwtService.signAsync({
      sub: user.id,
      organizationId: user.organizationId,
      role: user.role,
      email: user.email,
    });

    return {
      access_token: token,
    };
  }
}
