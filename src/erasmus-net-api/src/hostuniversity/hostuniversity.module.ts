import { Module } from '@nestjs/common';
import { HostUniversityService } from './hostuniversity.service';
import { HostUniversityController } from './hostuniversity.controller';

@Module({
  controllers: [HostUniversityController],
  providers: [HostUniversityService]
})
export class HostUniversityModule {}
