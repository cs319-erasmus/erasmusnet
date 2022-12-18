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

  //gets a course by its uid
  @Get()
  findOne(@Param('uid') uid: string) {
    return this.courseService.findOne(uid);
  }

  @Delete()
  remove(@Param('uid') uid: string) {
    return this.courseService.remove(uid);
  }
}
