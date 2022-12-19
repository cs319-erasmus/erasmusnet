import { PreapprovalService } from './preapproval.service';
import { PreApprovalDTO } from './preapprovalDto/preapproval.dto';
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
import { RolesGuard } from 'src/middleware/auth.guard';
import { Roles } from 'src/middleware/role.decorator';
import { AuthService } from 'src/auth/auth.service';
import { Request } from 'express';

// @UseGuards(RolesGuard)
@Controller('api/preapproval')
export class PreapprovalController {
  constructor(private readonly preapprovalService: PreapprovalService,
    private readonly authService: AuthService,) {}
  
  @Post()
  create(@Body() preApprovalDTO: PreApprovalDTO) {
    return this.preapprovalService.create(preApprovalDTO);
  }
  // @Roles('admin', 'coordinator')
  @Get('all')
  findAll() {
    return this.preapprovalService.findAll();
  }

  // @Get()
  // async findOwn(@Req() req: Request) {
  //   const authToken = req.headers.authorization;
  //   try {
  //     const { uid, email, role } = await this.authService.authenticate(
  //       authToken,
  //     );
  //     return this.preapprovalService.findOne(uid);
  //   } catch (error) {
  //     throw new UnauthorizedException(error.message);
  //   }
  // }
  @Get()
  async findOwn(@Body() uidObj: { uid: string; }) {
      return this.preapprovalService.findOne(uidObj.uid);
  }
  // @Roles('admin', 'coordinator')
  @Get('admin')
  findOne(@Body() uidObj: { uid: string; }) {
    return this.preapprovalService.findOne(uidObj.uid);
  }

  // @Delete()
  // async removeOwn(@Req() req: Request) {
  //   const authToken = req.headers.authorization;
  //   try {
  //     const { uid, email, role } = await this.authService.authenticate(
  //       authToken,
  //     );
  //     return this.preapprovalService.remove(uid);
  //   } catch (error) {
  //     throw new UnauthorizedException(error.message);
  //   }

  // }
  @Delete()
  async removeOwn(@Body() uidObj: { uid: string; }){
      return this.preapprovalService.remove(uidObj.uid);
  }
}
