import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Req,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { ProcessesService } from './processes.service';

import { CreateProcessDto } from './dto/create-process.dto';

import { UpdateProcessDto } from './dto/update-process.dto';

@Controller('processes')
@UseGuards(JwtAuthGuard)
export class ProcessesController {
  constructor(private readonly service: ProcessesService) {}

  @Get()
  findAll(@Req() req: any) {
    return this.service.findAll(req.user.organizationId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: any) {
    return this.service.findOne(id, req.user.organizationId);
  }

  @Post()
  create(@Body() dto: CreateProcessDto, @Req() req: any) {
    return this.service.create(dto, req.user.organizationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProcessDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
