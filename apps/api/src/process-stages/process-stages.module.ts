import { Module } from '@nestjs/common';

import { ProcessStagesController } from './process-stages.controller';
import { ProcessStagesService } from './process-stages.service';

@Module({
  controllers: [ProcessStagesController],

  providers: [ProcessStagesService],

  exports: [ProcessStagesService],
})
export class ProcessStagesModule {}
