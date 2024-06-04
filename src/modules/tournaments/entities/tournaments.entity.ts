import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Result } from 'src/modules/results/entities/results.entity';

@Entity()
export class Tournament {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  startDate: Date;

  @Column()
  @ApiProperty()
  endDate: Date;

  @Column()
  @ApiProperty()
  location: string;

  @OneToMany(() => Result, (result) => result.tournament)
  @ApiProperty()
  results: Result[];
}
