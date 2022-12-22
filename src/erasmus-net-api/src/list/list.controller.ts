import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListService } from './list.service';
import { PlacedStudentsListDTO } from './listDto/placedStudentsList.dto';
import { WaitingListDTO } from './listDto/waitinglist.dto';

@Controller('api/list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post()
  create(@Body('waitinglist') waitingListDTO: WaitingListDTO,
  @Body('placedstudentslist') placedStudentsListDTO: PlacedStudentsListDTO) {
    return this.listService.create(waitingListDTO, placedStudentsListDTO);
  }

  @Get()
  findOne() {
    return this.listService.findOne();
  }

  @Delete()
  remove() {
    return this.listService.remove();
  }
}
