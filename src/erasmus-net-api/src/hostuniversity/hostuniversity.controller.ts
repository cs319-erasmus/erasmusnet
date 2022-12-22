import { Controller, Get, Post, Body, Patch, Param, Delete, Header, Headers } from '@nestjs/common';
import { HostUniversityService } from './hostuniversity.service';
import { HostUniversityDTO } from './hostUniversityDto/hostUniversity.dto';

@Controller('api/hostuniversity')
export class HostUniversityController {
  constructor(private readonly hostUniversityService: HostUniversityService) {}

  @Post()
  create(@Body() hostUniversityDTO: HostUniversityDTO) {
    return this.hostUniversityService.create(hostUniversityDTO);
  }

  //gets a courseLink by its uid
  @Get()
  findOne(@Headers('hostuniveristyid') hostuniversityid: string) {
    return this.hostUniversityService.findOne(hostuniversityid);
  }

  @Delete()
  remove(@Headers('hostuniveristyid') hostuniversityid: string) {
    return this.hostUniversityService.remove(hostuniversityid);
  }
}
