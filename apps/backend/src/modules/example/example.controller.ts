import { Render } from '@inertify/nest';
import { Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { Example } from './entities/example.entity';
import { ExampleService } from './example.service';

@Controller('example')
export class ExampleController {
  private readonly exampleService: ExampleService;

  constructor(exampleService: ExampleService) {
    this.exampleService = exampleService;
  }

  @Get()
  @Render('example')
  async findAll() {
    return {
      examples: await this.exampleService.findAllCategories(),
    };
  }

  @Post('seed')
  async seed() {
    await this.exampleService.seed();
    return { message: 'Database seeded successfully' };
  }
}
