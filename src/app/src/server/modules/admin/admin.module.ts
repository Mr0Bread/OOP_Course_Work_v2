import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import AdminSchema from 'Server/modules/admin/schemas/admin.schema';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Admin', schema: AdminSchema }]),
  ],
  providers: [AdminService],
  exports: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
