import { Controller, Get, Post } from '@nestjs/common';
import { Example } from './entities/example.entity';
import { ExampleService } from './example.service';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  async findAll(): Promise<Example[]> {
    return this.exampleService.findAll();
  }

  @Post('seed')
  async seed() {
    await this.exampleService.seed();
    return { message: 'Database seeded successfully' };
  }
}
