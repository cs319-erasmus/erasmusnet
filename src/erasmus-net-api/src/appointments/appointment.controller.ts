import { AppointmentService } from './appointment.service';
import { AppointmentDTO} from './appointmentDto/appointment.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  UnauthorizedException,
  HttpStatus,
  Headers,
} from '@nestjs/common';
import { RolesGuard } from 'src/middleware/auth.guard';
import { Roles } from 'src/middleware/role.decorator';
import { AuthService } from 'src/auth/auth.service';
import { Request } from 'express';

@Controller('api/appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService,
    private readonly authService: AuthService,) {}
  
  @Post()
  create(@Body() appointmentDto:AppointmentDTO) {
    return this.appointmentService.create(appointmentDto);
  }
  @Get('student')
  findAllStudent(@Headers('uid') uid: string) {
    return this.appointmentService.findAll(uid, 'student');
  }
  @Get('coordinator')
  findAllCoordinator(@Headers('uid') uid: string) {
    return this.appointmentService.findAll(uid, 'coordinator');
  }

  @Delete()
  async removeOne(@Headers('appointmentid') appointmentid: string){
      return this.appointmentService.remove(appointmentid);
  }
}
