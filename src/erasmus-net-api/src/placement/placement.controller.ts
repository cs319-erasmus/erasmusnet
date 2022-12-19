import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { PlacementService } from './placement.service';
import { PlacementDTO } from './placementDto/placement.dto';

@Controller('api/placement')
export class PlacementController {
  constructor(private readonly placementService: PlacementService) {}

  @Post()
  create(@Body() placementDTO: PlacementDTO) {
    return this.placementService.create(placementDTO);
  }

  @Get('all')
  findAll() {
    return this.placementService.findAll();
  }

  @Get()
  findOne(@Headers('uid') uid: string) {
    return this.placementService.findOne(uid);
  }

  @Delete()
  remove(@Headers('uid') uid: string) {
    return this.placementService.remove(uid);
  }
}
