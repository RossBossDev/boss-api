import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './config/database.config';
import { ExampleModule } from './modules/example/example.module';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), ExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
