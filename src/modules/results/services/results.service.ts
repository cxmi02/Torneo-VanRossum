import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateResultDto, UpdateResultDto } from '../dtos';
import { Result } from '../entities/results.entity';

@Injectable()
export class ResultsService {
    constructor(@InjectRepository(Result) private resultRepository: Repository<Result>) {}

    async create(creteResultDto: CreateResultDto): Promise<Result> {
        const existingResult = await this.resultRepository.findOne({ where: { resultId: creteResultDto.resultId } });
        if (existingResult) {
            throw new HttpException(
                `Player with id ${creteResultDto.resultId} already exists`,
                HttpStatus.BAD_REQUEST,
            );
        }
        const result = this.resultRepository.create(creteResultDto);
        return await this.resultRepository.save(result);
    }

    async findAll(): Promise<Result[]> {
        return this.resultRepository.find();
    }

    async findOne(resultId: number): Promise<Result> {
        const result = await this.resultRepository.findOne({where: {resultId: resultId}});
        if (!result) {
            throw new HttpException(
                `Player with id ${resultId} not found`,
                HttpStatus.NOT_FOUND
            )
        }
        return result;
    }

    async update(resultId: number, updateResultDto: UpdateResultDto): Promise<Result> {
        await this.resultRepository.update(resultId, updateResultDto)
        return this.findOne(resultId);
    }

    async remove(resultId: number): Promise<void>{
        await this.findOne(resultId);
        await this.resultRepository.delete(resultId);
    }

}
