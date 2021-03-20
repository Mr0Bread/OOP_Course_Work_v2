import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EpochController } from './epoch.controller';
import { EpochService } from './epoch.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpochEntity } from 'Server/modules/epoch/entities/epoch.entity';
import { AuthModule } from 'Server/modules/auth/auth.module';
import { SecureRootMiddleware } from 'Server/modules/auth/middleware/SecureRoot.middleware';

@Module({
  controllers: [EpochController],
  providers: [EpochService],
  imports: [
    TypeOrmModule.forFeature([EpochEntity]),
    AuthModule
  ]
})
export class EpochModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(SecureRootMiddleware)
      .forRoutes(
        '/epoch/createOne',
        '/epoch/deleteOne',
        '/epoch/updateOne'
      );
  }
}
