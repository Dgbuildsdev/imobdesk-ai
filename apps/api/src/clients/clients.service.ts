import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(organizationId: string) {
    return this.prisma.client.findMany({
      where: {
        organizationId,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string, organizationId: string) {
    const client = await this.prisma.client.findFirst({
      where: {
        id,
        organizationId,
      },
    });

    if (!client) {
      throw new NotFoundException('Cliente não encontrado');
    }

    return client;
  }

  async create(organizationId: string, data: any) {
    return this.prisma.client.create({
      data: {
        ...data,
        organizationId,
      },
    });
  }

  async update(id: string, organizationId: string, data: any) {
    await this.findOne(id, organizationId);

    return this.prisma.client.update({
      where: {
        id,
      },

      data,
    });
  }

  async remove(id: string, organizationId: string) {
    await this.findOne(id, organizationId);

    return this.prisma.client.delete({
      where: {
        id,
      },
    });
  }
}
