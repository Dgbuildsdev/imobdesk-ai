import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { CurrentUser } from '../auth/decorators/current-user.decorator';

import type { AuthUser } from '../auth/auth.types';

import { ClientsService } from './clients.service';

import { CreateClientDto } from './dto/create-client.dto';

import { UpdateClientDto } from './dto/update-client.dto';


@Controller('clients')
@UseGuards(JwtAuthGuard)
export class ClientsController {

  constructor(
    private readonly clientsService: ClientsService,
  ) {}


  @Get()
  findAll(
    @CurrentUser() user: AuthUser,
  ) {
    return this.clientsService.findAll(
      user.organizationId,
    );
  }


  @Get(':id')
  findOne(
    @Param('id') id: string,
    @CurrentUser() user: AuthUser,
  ) {
    return this.clientsService.findOne(
      id,
      user.organizationId,
    );
  }


  @Post()
  create(
    @CurrentUser() user: AuthUser,
    @Body() dto: CreateClientDto,
  ) {
    return this.clientsService.create(
      user.organizationId,
      dto,
    );
  }


  @Patch(':id')
  update(
    @Param('id') id: string,
    @CurrentUser() user: AuthUser,
    @Body() dto: UpdateClientDto,
  ) {
    return this.clientsService.update(
      id,
      user.organizationId,
      dto,
    );
  }


  @Delete(':id')
  remove(
    @Param('id') id: string,
    @CurrentUser() user: AuthUser,
  ) {
    return this.clientsService.remove(
      id,
      user.organizationId,
    );
  }
}