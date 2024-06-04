import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePlayerDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  playerId: number;
 
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  phoneNumber: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  team: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  rating: string;
}


