import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Headers,
  ParseFilePipe,
  FileTypeValidator,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { ListService } from './list.service';
import { PlacedStudentsListDTO } from './listDto/placedStudentsList.dto';
import { WaitingListDTO } from './listDto/waitinglist.dto';
import admin from 'src/main';
import * as XLSX from 'xlsx';
import { diskStorage } from 'multer';
import { Request, Response, NextFunction } from 'express';
import * as csvtojson from 'csvtojson';

@Controller('api/list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post()
  create(
    @Body('waitinglist') waitingListDTO: WaitingListDTO,
    @Body('placedstudentslist') placedStudentsListDTO: PlacedStudentsListDTO,
  ) {
    return this.listService.create(waitingListDTO, placedStudentsListDTO);
  }

  // async convertExcelToJson(req: Request, res: Response, next: NextFunction) {
  //   try {
  //   const result = await xlsx2json(req.body.file.path);
  //   const excelData = result[0].reduce((object, item, index) => {
  //   if (index === 0) {
  //   object.mapper = item;
  //   return object;
  //   }
  //   const data = {};
  //   Object.keys(item).forEach((key) => {
  //   data[object.mapper[key]] = item[key];
  //   });
  //   object.data.push(data);
  //   return object;
  //   }, { mapper: {}, data: [] });
  //   console.log(excelData);
  //   } catch (err) {
  //   next(err);
  //   }
  //   }
  @Post('excel')
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
              'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    const workBook = XLSX.readFile('./uploads/' + file.filename);
    XLSX.writeFile(workBook, './uploads/excel.csv', { bookType: 'csv' });
    const jsonArray = await csvtojson()
      .fromFile('./uploads/excel.csv')
      .then((jsonObj) => {
        // Create a map of universities and their quotas
        const universityQuotas = new Map<string, number>();

        // Assign the preferred universities to each element in the array
        jsonObj.forEach((element: any) => {
          let placedUniversity = element['Preferred University #1'];

          for (let i = 1; i <= 5; i++) {
            if (
              placedUniversity &&
              universityQuotas.has(placedUniversity) &&
              universityQuotas.get(placedUniversity) >= 2
            ) {
              placedUniversity = element[`Preferred University #${i}`];
            } else {
              break;
            }
          }

          if (placedUniversity === undefined) {
            placedUniversity = 'None';
          }

          element.placedUniversity = placedUniversity;

          // Update the quota for the placed university
          if (universityQuotas.has(placedUniversity)) {
            universityQuotas.set(
              placedUniversity,
              universityQuotas.get(placedUniversity) + 1,
            );
          } else {
            universityQuotas.set(placedUniversity, 1);
          }
          admin
          .firestore()
          .collection('list')
          .doc('list')
          .update({
            applicationlist: admin.firestore.FieldValue.arrayUnion(element),
          });
      });
    });   
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
