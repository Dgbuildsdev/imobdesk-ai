import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateProcessDto } from './dto/create-process.dto';
import { UpdateProcessDto } from './dto/update-process.dto';

@Injectable()
export class ProcessesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(organizationId: string) {
    return this.prisma.process.findMany({
      where: {
        organizationId,
      },

      include: {
        client: true,
        property: true,
        documents: true,
        tasks: true,
      },
    });
  }

  async findOne(id: string, organizationId: string) {
    return this.prisma.process.findFirst({
      where: {
        id,
        organizationId,
      },

      include: {
        client: true,
        property: true,
        documents: true,
        tasks: true,
      },
    });
  }

  async create(dto: CreateProcessDto, organizationId: string) {
    return this.prisma.process.create({
      data: {
        title: dto.title,

        clientId: dto.clientId,

        propertyId: dto.propertyId,

        organizationId,
      },

      include: {
        client: true,
        property: true,
      },
    });
  }

  async update(id: string, dto: UpdateProcessDto) {
    return this.prisma.process.update({
      where: {
        id,
      },

      data: dto,
    });
  }

  async remove(id: string) {
    return this.prisma.process.delete({
      where: {
        id,
      },
    });
  }
}
