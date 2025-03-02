import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Image } from './entities/image.entity';
import { Ingredient } from './entities/ingredient.entity';
import { Recipe } from './entities/recipe.entity';
import { Step } from './entities/step.entity';
import { Timer } from './entities/timer.entity';
import { Utensil } from './entities/utensil.entity';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Category,
            Recipe,
            Step,
            Timer,
            Image,
            Utensil,
            Ingredient,
        ]),
    ],
    controllers: [RecipesController],
    providers: [RecipesService],
})
export class RecipesModule {}
