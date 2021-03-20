import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ExhibitService } from './exhibit.service';
import { ExhibitController } from './exhibit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExhibitEntity } from 'Server/modules/exhibit/entities/exhibit.entity';
import { SecureRootMiddleware } from 'Server/modules/auth/middleware/SecureRoot.middleware';
import { AuthModule } from 'Server/modules/auth/auth.module';

@Module({
	imports: [
		TypeOrmModule.forFeature([ExhibitEntity]),
		AuthModule
	],
	providers: [ExhibitService],
	controllers: [ExhibitController]
})
export class ExhibitModule implements NestModule {
	configure(consumer: MiddlewareConsumer): any {
		consumer
			.apply(SecureRootMiddleware)
			.forRoutes(
				'/exhibit/createOne',
				'/exhibit/deleteOne',
				'/exhibit/updateOne'
			);
	}
}
