import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseLinkDTO } from './courseDto/courseLink.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  create(@Body() courseLinkDTO: CourseLinkDTO) {
    return this.courseService.create(courseLinkDTO);
  }

  //gets a courseLink by its uid
  @Get()
  findOne(@Body('uid') uid: string) {
    return this.courseService.findOne(uid);
  }

  @Delete()
  remove(@Body('uid') uid: string) {
    return this.courseService.remove(uid);
  }
}
