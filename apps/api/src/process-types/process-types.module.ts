import { Module } from '@nestjs/common';

import { ProcessTypesController } from './process-types.controller';
import { ProcessTypesService } from './process-types.service';

@Module({
  controllers: [ProcessTypesController],

  providers: [ProcessTypesService],

  exports: [ProcessTypesService],
})
export class ProcessTypesModule {}
