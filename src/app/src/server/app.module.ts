import { Module } from '@nestjs/common';
import { ViewModule } from './modules/view/view.module';
import { AdminModule } from 'Server/modules/admin/admin.module';
import { AuthModule } from 'Server/modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ExhibitModule } from './modules/exhibit/exhibit.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeModule } from './modules/type/type.module';
import { AuthorModule } from './modules/author/author.module';
import { EpochModule } from './modules/epoch/epoch.module';
import { CustomerModule } from './modules/customer/customer.module';

@Module({
	imports: [
		MongooseModule.forRoot(
			`mongodb://${ process.env.MONGO_USERNAME }:${ process.env.MONGO_PASSWORD }@mongo/${ process.env.MONGO_DATABASE }?authSource=admin`,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true
			}
		),
		TypeOrmModule.forRoot(
			{
				type: 'mysql',
				host: process.env.MYSQL_CONTAINER_NAME,
				port: parseInt(process.env.MYSQL_PORT, 10),
				username: 'root',
				password: process.env.MYSQL_ROOT_PASSWORD,
				database: process.env.MYSQL_DATABASE,
				autoLoadEntities: true,
				synchronize: true
			}
		),
		AdminModule,
		AuthModule,
		ExhibitModule,
		TypeModule,
		AuthorModule,
		EpochModule,
		CustomerModule,
		ViewModule
	]
})
export class AppModule {
}
