import { Controller, Get, Post, Body, Patch, Param, Delete, Header, Headers, UseInterceptors, UploadedFile, FileTypeValidator, ParseFilePipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import admin from 'src/main';
import { CourseService } from './course.service';
import { CourseDTO } from './courseDto/course.dto';
import { CourseLinkDTO } from './courseDto/courseLink.dto';

@Controller('api/course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post('package')
  createLink(@Body() courseLinkDTO: CourseLinkDTO, @Headers('uid') uid: string) {
    return this.courseService.createLink(courseLinkDTO, uid, courseLinkDTO.approvalId);
  }
  @Post()
  create(@Body() courseDTO: CourseDTO , @Headers('uid') uid: string) {
    return this.courseService.create(courseDTO, uid);
  }

  @Post('syllabus')
    @UseInterceptors(
      FileInterceptor('file', {
        storage: diskStorage({
          destination: './uploads',
        }),
      }),
    )
    async uploadExcel(
      @UploadedFile(
        new ParseFilePipe({
          validators: [
            new FileTypeValidator({
              fileType:
                'application/pdf',
            }),
          ],
        }),
      )
      file: Express.Multer.File,
    @Headers('uid') uid: string,
    @Headers('approvalId') approvalId: string){
      //upload file to firestore
      admin.firestore().collection('courses').doc(uid).update({
        [approvalId]: { syllabus: file.buffer}
      });
      return true;
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
