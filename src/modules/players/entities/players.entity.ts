import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  firstName: string;

  @Column()
  @ApiProperty()
  lastName: string;

  @Column()
  @ApiProperty()
  phoneNumber: number;

  @Column()
  @ApiProperty()
  team: string;

  @Column()
  @ApiProperty()
  rating: string;
}
