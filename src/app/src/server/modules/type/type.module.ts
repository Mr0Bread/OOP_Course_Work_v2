import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeEntity } from 'Server/modules/type/entities/type.entity';
import { SecureRootMiddleware } from 'Server/modules/auth/middleware/SecureRoot.middleware';
import { AuthModule } from 'Server/modules/auth/auth.module';

@Module({
  providers: [TypeService],
  controllers: [TypeController],
  imports: [TypeOrmModule.forFeature([TypeEntity]), AuthModule],
})
export class TypeModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(SecureRootMiddleware)
      .forRoutes('/type/createOne', '/type/updateOne', '/type/deleteOne');
  }
}
