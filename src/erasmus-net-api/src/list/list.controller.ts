import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Headers, ParseFilePipe, FileTypeValidator } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { ListService } from './list.service';
import { PlacedStudentsListDTO } from './listDto/placedStudentsList.dto';
import { WaitingListDTO } from './listDto/waitinglist.dto';
import admin from 'src/main';
import * as XLSX from 'xlsx';
import { diskStorage } from 'multer';
import * as csvToJson from 'convert-csv-to-json';


@Controller('api/list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post()
  create(@Body('waitinglist') waitingListDTO: WaitingListDTO,
  @Body('placedstudentslist') placedStudentsListDTO: PlacedStudentsListDTO) {
    return this.listService.create(waitingListDTO, placedStudentsListDTO);
  }
  @Post("excel")
  @UseInterceptors(FileInterceptor('file',{
    storage: diskStorage({
      destination: './uploads'
    })
  }))
  uploadExcel(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }),
        ],
      }),
    )file: Express.Multer.File) {
      const workBook = XLSX.readFile("./uploads/"+file.filename);
      XLSX.writeFile(workBook, "./uploads/excel.csv", { bookType: "csv" });
      let json = csvToJson.getJsonFromCsv("./uploads/excel.csv");
      admin.firestore().collection("lists").doc("lists").set(json);
      
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
