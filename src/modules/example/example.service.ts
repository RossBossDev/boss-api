import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';
import { Example } from './entities/example.entity';

@Injectable()
export class ExampleService {
  private readonly exampleRepository: Repository<Example>;

  constructor(
    @InjectRepository(Example)
    exampleRepository: Repository<Example>,
  ) {
    this.exampleRepository = exampleRepository;
  }

  findAll(): Promise<Example[]> {
    return this.exampleRepository.find();
  }

  async seed() {
    const examples = [
      { name: 'Example 1', description: 'First example description' },
      { name: 'Example 2', description: 'Second example description' },
      { name: 'Example 3', description: 'Third example description' },
    ];

    await this.exampleRepository.save(examples);
  }
}
