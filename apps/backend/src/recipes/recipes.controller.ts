import { Render } from '@inertify/nest';
import { Controller, Get, Param, Res } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { Response } from 'express';
import { RecipeDTO } from './dtos/recipe.dto';
import { Recipe } from './entities/recipe.entity';
import { RecipesService } from './recipes.service';
@Controller('recipes')
export class RecipesController {
    private readonly recipesService: RecipesService;
    private readonly logger = new Logger(RecipesController.name);

    constructor(recipesService: RecipesService) {
        this.recipesService = recipesService;
    }

    @Get()
    @Render('recipes/index')
    async index() {
        console.time('index');
        const featuredRecipes = await this.recipesService.getFeaturedRecipes();
        console.timeEnd('index');
        this.logger.log(`Featured recipes: ${featuredRecipes.length}`);
        const featuredRecipesDTO: RecipeDTO[] = [];

        for (const recipeSlug of featuredRecipes) {
            const recipe =
                await this.recipesService.getRecipeBySlug(recipeSlug);
            featuredRecipesDTO.push(recipe);
        }

        return {
            featuredRecipes: featuredRecipesDTO,
            categories: await this.recipesService.getCategories(),
        };
    }

    @Get('roulette')
    // redirect to the random recipe
    async randomRecipe(@Res() res: Response) {
        this.logger.log('Getting random recipe');
        const recipeSlug = await this.recipesService.randomRecipe();
        res.redirect(`/recipes/${recipeSlug}`);
    }

    @Get('categories')
    async categories() {
        const categories = await this.recipesService.getCategories();
        return {
            categories,
        };
    }

    @Get('categories/:slug')
    @Render('recipes/list')
    async recipesByCategory(@Param('slug') slug: string) {
        const recipes = await this.recipesService.getRecipesByCategory(slug);
        return {
            recipes,
        };
    }

    @Get('recipes/all')
    @Render('recipes/list')
    async allRecipes() {
        const recipes = await this.recipesService.getAllRecipes(10);
        return {
            recipes,
        };
    }

    @Get(':slug')
    @Render('recipes/single-recipe')
    async getRecipe(@Param('slug') slug: string) {
        const recipe = await this.recipesService.getRecipeBySlug(slug);

        console.debug(recipe);

        return {
            recipe,
        };
    }
}
