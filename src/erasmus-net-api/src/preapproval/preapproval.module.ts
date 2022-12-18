import { Module } from '@nestjs/common';
import { PreapprovalService } from './preapproval.service';
import { PreapprovalController } from './preapproval.controller';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [AuthModule],
  controllers: [PreapprovalController],
  providers: [PreapprovalService, AuthService],
})
export class PreapprovalModule {}
