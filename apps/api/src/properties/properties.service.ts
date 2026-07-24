import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';

@Injectable()
export class PropertiesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(organizationId: string) {
    return this.prisma.property.findMany({
      where: {
        organizationId,
      },
    });
  }

  findOne(id: string, organizationId: string) {
    return this.prisma.property.findFirst({
      where: {
        id,
        organizationId,
      },
    });
  }

  create(dto: CreatePropertyDto, organizationId: string) {
    return this.prisma.property.create({
      data: {
        ...dto,
        organizationId,
      },
    });
  }

  update(id: string, dto: UpdatePropertyDto, organizationId: string) {
    return this.prisma.property.update({
      where: {
        id,
      },

      data: dto,
    });
  }

  remove(id: string) {
    return this.prisma.property.delete({
      where: {
        id,
      },
    });
  }
}
