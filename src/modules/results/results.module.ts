import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Result } from './entities/results.entity';
import { ResultsService } from './services/results.service';
import { ResultController } from './controllers/results.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Result])],
  providers: [ResultsService],
  controllers: [ResultController],
})
export class ResultModule {}
