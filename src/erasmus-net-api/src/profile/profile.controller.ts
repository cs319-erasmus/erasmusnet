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
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { RolesGuard } from 'src/middleware/auth.guard';
import { Roles } from 'src/middleware/role.decorator';
import { StudentDto } from './profileDto/student.dto';
import { CoordinatorDTO } from './profileDto/coordinator.dto';
import { AdminDTO } from './profileDto/admin.dto';
import { InstructorDto } from './profileDto/instructor.dto';
import { InStudentDto } from './profileDto/inStudent.dto';
import { AuthService } from 'src/auth/auth.service';
import { Request } from 'express';

@UseGuards(RolesGuard)
@Controller('api/profile')
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService,
    private readonly authService: AuthService,
  ) {}

  @Roles('student')
  @Post('student')
  createStudent(@Body() studentDto: StudentDto) {
    return this.profileService.create(studentDto, 'student');
  }

  @Roles('coordinator')
  @Post('coordinator')
  createCoordinator(@Body() coordinatorDTO: CoordinatorDTO) {
    return this.profileService.create(coordinatorDTO, 'coordinator');
  }

  @Roles('admin')
  @Post('admin')
  createAdmin(@Body() adminDTO: AdminDTO) {
    return this.profileService.create(adminDTO, 'admin');
  }

  @Roles('instructor')
  @Post('instructor')
  createInstructor(@Body() instructorDto: InstructorDto) {
    return this.profileService.create(instructorDto, 'instructor');
  }

  @Roles('inStudent')
  @Post('inStudent')
  createInStudent(@Body() inStudentDto: InStudentDto) {
    return this.profileService.create(inStudentDto, 'inStudent');
  }

  @Get()
  async findOwnProfile(@Req() req: Request) {
    const authToken = req.headers.authorization;
    try {
      const { uid, email, role } = await this.authService.authenticate(
        authToken,
      );
      return this.profileService.findOne(uid, role);
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
  @Roles('admin')
  @Get('admin/all')
  findAll(@Body() roleObj: { role: string }) {
    return this.profileService.findAll(roleObj.role);
  }
  @Roles('admin')
  @Get('admin/find')
  findOne(@Body() uidObj: { uid: string; role: string }) {
    return this.profileService.findOne(uidObj.uid, uidObj.role);
  }

  @Delete()
  removeOwn(@Body() uidObj: { uid: string; role: string }) {
    return this.profileService.remove(uidObj.uid, uidObj.role);
  }
}
