import { ArrowRight, ChefHat, Utensils } from 'lucide-react';

import FeaturedRecipes from '@/components/recipes/featured-recipes';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Layout from '@/layout';
import { Category } from '@/types/category';
import { Recipe } from '@/types/recipe';
import { Link } from '@inertiajs/react';

export default function Home({
    featuredRecipes,
    categories,
}: { featuredRecipes: Recipe[]; categories: Category[] }) {
    return (
        <Layout>
            <div className="flex flex-col min-h-screen">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Discover Delicious Recipes for Every
                                        Occasion
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        Explore our collection of hand-picked
                                        recipes that are easy to make and
                                        guaranteed to impress.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link href="/recipes/all">
                                        <Button className="px-8">
                                            Browse Recipes
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <Link href="/recipes/roulette">
                                        <Button
                                            variant="outline"
                                            className="px-8"
                                        >
                                            Feeling Lucky
                                            <Utensils className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <img
                                src={
                                    featuredRecipes[0].image_path ||
                                    '/placeholder.svg?height=550&width=550'
                                }
                                width={550}
                                height={550}
                                alt="Featured Recipe"
                                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                            />
                        </div>
                    </div>
                </section>

                {/* Featured Recipes Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Featured Recipes
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Explore our most popular and seasonal
                                    recipes
                                </p>
                            </div>
                        </div>
                        <FeaturedRecipes
                            featuredRecipes={[...featuredRecipes.slice(1)]}
                        />
                        <div className="flex justify-center mt-10">
                            <Link href="/recipes/all">
                                <Button variant="outline" className="px-8">
                                    View All Recipes
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Categories Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Recipe Categories
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Find recipes by category to suit your needs
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                            {categories.map((category) => (
                                <Link
                                    href={`/recipes/categories/${category.slug}`}
                                    key={category.slug}
                                >
                                    <Card className="overflow-hidden transition-all hover:shadow-lg">
                                        <div className="relative h-48">
                                            <img
                                                src={
                                                    category.image_path ||
                                                    '/placeholder.svg'
                                                }
                                                alt={category.name}
                                                className="object-cover"
                                            />
                                        </div>
                                        <CardHeader>
                                            <CardTitle>
                                                {category.name}
                                            </CardTitle>
                                            <CardDescription>
                                                {category.description}
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Can't Decide What to Cook?
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Let us surprise you with a random recipe
                                    from our collection
                                </p>
                            </div>
                            <a href="/recipes/roulette">
                                <Button size="lg" className="mt-4">
                                    <ChefHat className="mr-2 h-5 w-5" />
                                    Feeling Lucky
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

// const categories = [
//     {
//         name: 'Breakfast',
//         slug: 'breakfast',
//         description: 'Start your day right with these breakfast recipes',
//         image: '/placeholder.svg?height=300&width=500',
//     },
//     {
//         name: 'Main Dishes',
//         slug: 'main-dishes',
//         description: 'Hearty and satisfying main course recipes',
//         image: '/placeholder.svg?height=300&width=500',
//     },
//     {
//         name: 'Desserts',
//         slug: 'desserts',
//         description: 'Sweet treats to end your meal on a high note',
//         image: '/placeholder.svg?height=300&width=500',
//     },
// ];
