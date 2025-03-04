import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/layout';
import { Recipe } from '@/types/recipe';
import { Link } from '@inertiajs/react';
import { ChefHat, Clock, Users, Utensils } from 'lucide-react';
export default function SingleRecipePage({ recipe }: { recipe: Recipe }) {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Link
                                href="/recipes"
                                className="text-sm text-muted-foreground hover:underline"
                            >
                                Recipes
                            </Link>
                            <span className="text-muted-foreground">/</span>
                            <span className="text-sm">{recipe.name}</span>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            {recipe.name}
                        </h1>
                        <p className="text-muted-foreground">
                            {recipe.description}
                        </p>
                        {/* <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div> */}
                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center">
                                <Clock className="mr-1 h-4 w-4" />
                                <span>
                                    Prep:{' '}
                                    {recipe.prep_time
                                        ?.replace('PT', '')
                                        .replace('M', ' minutes')}
                                </span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="mr-1 h-4 w-4" />
                                <span>
                                    Cook:{' '}
                                    {recipe.prep_time
                                        ?.replace('PT', '')
                                        .replace('M', ' minutes')}
                                </span>
                            </div>
                            <div className="flex items-center">
                                <Users className="mr-1 h-4 w-4" />
                                <span>Serves: 4-6</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                        <img
                            src={recipe.image_path || '/placeholder.svg'}
                            alt={recipe.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3 lg:gap-12 mt-12">
                    <Card className="md:col-span-1">
                        <CardContent className="p-6">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="flex items-center text-lg font-medium">
                                        <Utensils className="mr-2 h-5 w-5" />
                                        Ingredients
                                    </h3>
                                    <ul className="mt-4 space-y-2">
                                        {recipe.ingredients?.map(
                                            (ingredient, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start"
                                                >
                                                    <span className="mr-2">
                                                        •
                                                    </span>
                                                    <span>{ingredient}</span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2">
                        <CardContent className="p-6">
                            <div className="space-y-4">
                                <h3 className="flex items-center text-lg font-medium">
                                    <ChefHat className="mr-2 h-5 w-5" />
                                    Instructions
                                </h3>
                                <ol className="mt-4 space-y-4">
                                    {recipe.steps?.map((instruction, index) => (
                                        <li key={index} className="flex">
                                            <span className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-medium">
                                                {index + 1}
                                            </span>
                                            <p className="mt-1">
                                                {instruction}
                                            </p>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-12 text-center">
                    <h3 className="text-xl font-medium mb-4">
                        Want to try something else?
                    </h3>
                    <Link href="/recipes/roulette">
                        <Button size="lg">
                            <ChefHat className="mr-2 h-5 w-5" />
                            Feeling Lucky
                        </Button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
