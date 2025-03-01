import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Example } from './entities/example.entity';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';
@Module({
  imports: [TypeOrmModule.forFeature([Example, Category])],
  providers: [ExampleService],
  controllers: [ExampleController],
})
export class ExampleModule {}
