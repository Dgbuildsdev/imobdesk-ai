import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';

import { PrismaModule } from './prisma/prisma.module';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

import { OrganizationsModule } from './organizations/organizations.module';

import { ClientsModule } from './clients/clients.module';

import { PropertiesModule } from './properties/properties.module';

import { ProcessesModule } from './processes/processes.module';
import { ProcessTypesModule } from './process-types/process-types.module';
import { ProcessStagesModule } from './process-stages/process-stages.module';

import { DocumentsModule } from './documents/documents.module';

import { TasksModule } from './tasks/tasks.module';

import { FinanceModule } from './finance/finance.module';

import { DashboardModule } from './dashboard/dashboard.module';

import { NotificationsModule } from './notifications/notifications.module';

import { CalendarModule } from './calendar/calendar.module';

import { WhatsappModule } from './whatsapp/whatsapp.module';

import { AiModule } from './ai/ai.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    PrismaModule,

    // Segurança e usuários
    AuthModule,
    UsersModule,

    // Multi empresa / despachantes
    OrganizationsModule,

    // Clientes e imóveis
    ClientsModule,
    PropertiesModule,

    // Fluxo imobiliário
    ProcessesModule,
    ProcessTypesModule,
    ProcessStagesModule,

    // Documentação
    DocumentsModule,

    // Gestão operacional
    TasksModule,

    // Financeiro
    FinanceModule,

    // Dashboard
    DashboardModule,

    // Integrações
    CalendarModule,
    WhatsappModule,

    // Comunicação
    NotificationsModule,

    // Inteligência artificial
    AiModule,
  ],

  controllers: [AppController],
})
export class AppModule {}
