import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { Example } from './entities/example.entity';
@Injectable()
export class ExampleService {
  private readonly exampleRepository: Repository<Example>;
  private readonly categoryRepository: Repository<Category>;
  constructor(
    @InjectRepository(Example)
    exampleRepository: Repository<Example>,
    @InjectRepository(Category)
    categoryRepository: Repository<Category>,
  ) {
    this.exampleRepository = exampleRepository;
    this.categoryRepository = categoryRepository;
  }

  findAll(): Promise<Example[]> {
    return this.exampleRepository.find();
  }

  findAllCategories(): Promise<Category[]> {
    return this.categoryRepository.find();
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
