import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Player } from './entities/players.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Player])],
})
export class PlayersModule {}
