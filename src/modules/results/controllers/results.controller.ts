import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ResultsService } from '../services/results.service';
import { CreateResultDto } from '../dtos';

@Controller('controllers')
export class ResultController {

    constructor(private readonly resultsService: ResultsService) {}

    @Post()
    async create(@Body() createResultDto: CreateResultDto) {
      return this.resultsService.create(createResultDto);
    }

    @Get()
    async findAll(){
        return this.resultsService.findAll();
    }

    @Get('id')
    async findOne(@Param('id') resultId: number) {
        return this.resultsService.findOne(resultId);
    }

    @Delete('id')
    async remove(@Param('id') resultId: number) {
        return this.resultsService.remove(resultId);
    }
}
