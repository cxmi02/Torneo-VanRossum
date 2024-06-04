import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

import { Tournament } from 'src/modules/tournaments/entities/tournaments.entity';
import { Player } from 'src/modules/players/entities/players.entity';

export class CreateResultDto {
  @ApiProperty()
  @IsNumber()
  resultId: number;
  
  @ApiProperty()
  @IsNotEmpty()
  tournament: Tournament;

  @ApiProperty()
  @IsNotEmpty()
  firstPlayer: Player;

  @ApiProperty()
  @IsNotEmpty()
  secondPlayer: Player;

  @ApiProperty()
  @IsNotEmpty()
  winner: Player;

  @ApiProperty()
  @IsNotEmpty()
  score: string;
}
