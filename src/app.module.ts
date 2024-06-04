import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PlayersServices } from './modules/players/services/players.service';
import { PlayersModule } from './modules/players/players.module';
import { PlayersController } from './modules/players/controllers/players.controllers';
import { ResultModule } from './modules/results/results.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: 'camila',
      password: 'mypassword',
      database: 'Torneo_VanRossum',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PlayersModule,
    ResultModule
  ],
  controllers: [PlayersController, ResultModule],
  providers: [PlayersServices, PlayersController],
})
export class AppModule {}