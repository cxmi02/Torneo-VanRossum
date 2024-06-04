import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Player } from '../entities/players.entity';
import { CreatePlayerDto, UpdatePlayerDto } from '../dtos';

@Injectable()
export class PlayersServices {
    constructor(@InjectRepository(Player) private playersRepository: Repository<Player>) {}

    async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
        const existingPlayer = await this.playersRepository.findOne({ where: { playerId: createPlayerDto.playerId } });
        if (existingPlayer) {
            throw new HttpException(
                `Player with id ${createPlayerDto.playerId} already exists`,
                HttpStatus.BAD_REQUEST,
            );
        }
        const player = this.playersRepository.create(createPlayerDto);
        return await this.playersRepository.save(player);
    }

    async findAll(): Promise<Player[]> {
        return this.playersRepository.find();
    }

    async findOne(playerId: number): Promise<Player> {
        const player = await this.playersRepository.findOne({where: {playerId: playerId}});
        if (!player) {
            throw new HttpException(
                `Player with id ${playerId} not found`,
                HttpStatus.NOT_FOUND
            )
        }
        return player;
    }

    async update(playerId: number, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
        await this.playersRepository.update(playerId, updatePlayerDto)
        return this.findOne(playerId);
    }

    async remove(playerId: number): Promise<void>{
        await this.findOne(playerId);
        await this.playersRepository.delete(playerId);
    }

}
