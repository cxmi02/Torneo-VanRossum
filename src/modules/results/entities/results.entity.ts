import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { Tournament } from 'src/modules/tournaments/entities/tournaments.entity';
import { Player } from 'src/modules/players/entities/players.entity';

@Entity()
export class Result {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty()
  resultId: number;

  @ManyToOne(() => Tournament, (tournament) => tournament.results, {
    eager: true,
  })
  tournament: Tournament;

  @ManyToOne(() => Player, { eager: true })
  firstPlayer: Player;

  @ManyToOne(() => Player, { eager: true })
  secondPlayer: Player;

  @ManyToOne(() => Player, { eager: true })
  winner: Player;

  @Column()
  score: string;
}
