import { Module } from '@nestjs/common';
import { PreapprovalService } from './preapproval.service';
import { PreapprovalController } from './preapproval.controller';

@Module({
  controllers: [PreapprovalController],
  providers: [PreapprovalService]
})
export class PreapprovalModule {}
