import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecipeDTO } from './dtos/recipe.dto';
import { Recipe } from './entities/recipe.entity';

@Injectable()
export class RecipesService {
    private readonly recipeRepository: Repository<Recipe>;

    constructor(
        @InjectRepository(Recipe)
        recipeRepository: Repository<Recipe>,
    ) {
        this.recipeRepository = recipeRepository;
    }

    async getRecipeBySlug(slug: string): Promise<RecipeDTO> {
        const recipe = await this.recipeRepository.findOne({
            where: { slug: slug },
            relations: ['ingredients', 'steps', 'category'],
        });

        if (!recipe) {
            throw new Error('No recipe found');
        }

        const recipeDTO: RecipeDTO = {
            ...recipe,
            ingredients: recipe.ingredients.map(
                (ingredient) => ingredient.name,
            ),
            steps: recipe.steps.map((step) => step.instructions),
            image_path: recipe.image_path
                ? `https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_50,w_1260/hellofresh_s3/${recipe.image_path}`
                : null,
        };

        return recipeDTO;
    }

    async randomRecipe(): Promise<string> {
        const result = await this.recipeRepository
            .createQueryBuilder('recipe')
            .select('recipe.slug')
            .innerJoin(
                (qb) =>
                    qb
                        .select('ingredients.recipe_id', 'recipe_id')
                        .from('ingredients', 'ingredients')
                        .groupBy('ingredients.recipe_id')
                        .having('COUNT(*) > 3'),
                'filtered_ingredients',
                'filtered_ingredients.recipe_id = recipe.id',
            )
            .orderBy('RANDOM()')
            .take(1)
            .getRawOne();

        if (!result) {
            throw new Error('No recipe found');
        }

        return result.recipe_slug;
    }

    async getFeaturedRecipes(): Promise<string[]> {
        // Get current date as YYYYMMDD to use as seed
        const today = new Date();
        const dateSeed = parseInt(
            `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`,
        );

        const result = await this.recipeRepository
            .createQueryBuilder('recipe')
            .select('recipe.slug', 'recipe_slug')
            .innerJoin(
                (qb) =>
                    qb
                        .select('ingredients.recipe_id', 'recipe_id')
                        .from('ingredients', 'ingredients')
                        .groupBy('ingredients.recipe_id')
                        .having('COUNT(*) > 3'),
                'filtered_ingredients',
                'filtered_ingredients.recipe_id = recipe.id',
            )
            // Use consistent ordering based on date seed and recipe id
            .orderBy(`(recipe.id * ${dateSeed}) % 2147483647`)
            .limit(3)
            .getRawMany();

        if (!result || result.length === 0) {
            throw new Error('No recipes found');
        }

        console.log(result);

        return result.map((r) => r.recipe_slug);
    }
}
