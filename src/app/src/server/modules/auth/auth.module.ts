import { Module } from '@nestjs/common';
import { AdminModule } from 'Server/modules/admin/admin.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CustomerModule } from 'Server/modules/customer/customer.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    AdminModule,
    CustomerModule,
    JwtModule.register(
      {
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '300s' }
      }
    )
  ],
  exports: [AuthService]
})
export class AuthModule {}
