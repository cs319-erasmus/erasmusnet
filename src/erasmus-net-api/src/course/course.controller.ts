import { Controller, Get, Post, Body, Patch, Param, Delete, Header, Headers } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseLinkDTO } from './courseDto/courseLink.dto';

@Controller('api/course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  create(@Body() courseLinkDTO: CourseLinkDTO) {
    return this.courseService.create(courseLinkDTO);
  }

  //gets a courseLink by its uid
  @Get()
  findOne(@Headers('uid') uid: string) {
    return this.courseService.findOne(uid);
  }

  @Delete()
  remove(@Headers('uid') uid: string) {
    return this.courseService.remove(uid);
  }
}
