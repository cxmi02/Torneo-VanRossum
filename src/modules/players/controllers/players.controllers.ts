import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PlayersServices } from '../services/players.service';
import { CreatePlayerDto } from '../dtos';

@Controller('controllers')
export class PlayersController {

    constructor(private readonly playersService: PlayersServices) {}

    @Post()
    async create(@Body() createPlayerDto: CreatePlayerDto) {
      return this.playersService.create(createPlayerDto);
    }

    @Get()
    async findAll(){
        return this.playersService.findAll();
    }

    @Get('id')
    async findOne(@Param('id') playerId: number) {
        return this.playersService.findOne(playerId);
    }

    @Delete('id')
    async remove(@Param('id') playerId: number) {
        return this.playersService.remove(playerId);
    }
}
