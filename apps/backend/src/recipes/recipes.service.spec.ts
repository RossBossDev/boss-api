import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MockTypeORM } from 'mock-typeorm';
import { Recipe } from './entities/recipe.entity';
import { RecipesService } from './recipes.service';

describe('RecipesService', () => {
    let service: RecipesService;
    let typeorm: MockTypeORM;

    beforeEach(async () => {
        typeorm = new MockTypeORM();

        const module: TestingModule = await Test.createTestingModule({
            imports: [TypeOrmModule.forFeature([Recipe])],
            providers: [RecipesService],
        }).compile();

        service = module.get<RecipesService>(RecipesService);
    });

    afterEach(() => {
        typeorm.restore();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('getRecipeById', () => {});
});
