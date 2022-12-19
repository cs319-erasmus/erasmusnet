import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListService } from './list.service';
import { PlacedStudentsListDTO } from './listDto/placedStudentsList.dto';
import { WaitingListDTO } from './listDto/waitinglist.dto';

@Controller('api/list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post('waitinglist')
  create(@Body('waitinglist') waitingListDTO: WaitingListDTO,
  @Body('placedstudentslist') placedStudentsListDTO: PlacedStudentsListDTO) {
    return this.listService.create(waitingListDTO, placedStudentsListDTO);
  }

  //gets a courseLink by its uid
  @Get()
  findOne() {
    return this.listService.findOne();
  }

  @Delete()
  remove() {
    return this.listService.remove();
  }
}
