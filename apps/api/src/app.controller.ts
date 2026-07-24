import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getHello() {
    const organizations = await this.prisma.organization.findMany();

    return {
      message: 'ImobDesk AI API funcionando',
      organizations,
    };
  }
}
