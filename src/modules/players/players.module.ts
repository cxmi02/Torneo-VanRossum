import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Player } from './entities/players.entity';
import { PlayersServices } from './services/players.service';
import { PlayersController } from './controllers/players.controllers';

@Module({
  imports: [TypeOrmModule.forFeature([Player])],
  providers: [PlayersServices],
  exports: [PlayersServices],
  controllers: [PlayersController]
})
export class PlayersModule {}
