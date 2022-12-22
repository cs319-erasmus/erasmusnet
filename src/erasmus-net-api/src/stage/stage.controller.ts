import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { StageDTO } from './stageDto/stage.dto';
import { StageService } from './stage.service';

@Controller('api/stage')
export class StageController {
  constructor(private readonly stageService: StageService) {}

  @Post()
  create(@Body() stageDto: StageDTO) {
    return this.stageService.create(stageDto);
  }

  //gets a courseLink by its uid
  @Get()
  findOne() {
    return this.stageService.findOne();
  }

  @Put()
  update(@Body() stageDto: StageDTO) {
    return this.stageService.update(stageDto);
  }

  @Delete()
  remove() {
    return this.stageService.remove();
  }
}
