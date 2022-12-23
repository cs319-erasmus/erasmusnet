import { Controller, Get, Post, Body, Patch, Param, Delete, Header, Headers, UseInterceptors, UploadedFile, FileTypeValidator, ParseFilePipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { app } from 'firebase-admin';
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
            fileType: 'application/pdf',
          }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Headers('uid') uid: string,
    @Headers('approvalId') approvalId: string
  ) {


    const storage = admin.storage();

    try {
      const signedUrlResponse: string[] = await storage
        .bucket("erasmus-net-e2c1c.appspot.com")
        .file("./uploads/${file.filename}")
        .getSignedUrl({
          action: 'read',
          expires: new Date(Date.now() + 10000 * 60000),
        });

      const assetUrl: string = signedUrlResponse[0];
      var obj = {};
      obj[`${approvalId}.syllabus`] = assetUrl;
      admin.firestore().collection('courses').doc(uid).update(obj);
      return assetUrl;
    } catch (error) {
      console.log(error);
    }
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
