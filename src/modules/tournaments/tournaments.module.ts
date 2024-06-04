import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Tournament } from './entities/tournaments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tournament])],
})
export class TournamentsModule {}
