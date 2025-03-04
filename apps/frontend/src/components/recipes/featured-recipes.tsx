import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Recipe } from '@/types/recipe';
import { Link } from '@inertiajs/react';
import { Clock, Users } from 'lucide-react';

export default function FeaturedRecipes({
    featuredRecipes,
}: { featuredRecipes: Recipe[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredRecipes.map((recipe) => (
                <Link href={`/recipes/${recipe.slug}`} key={recipe.slug}>
                    <Card className="overflow-hidden h-full transition-all hover:shadow-lg py-0">
                        <div className="relative h-48">
                            <img
                                src={recipe.image_path || '/placeholder.svg'}
                                alt={recipe.name}
                                width={500}
                                height={500}
                                className="absolute inset-0 object-cover h-full w-full"
                            />
                            {recipe.is_premium && (
                                <Badge
                                    className="absolute top-2 right-2"
                                    variant="secondary"
                                >
                                    Premium
                                </Badge>
                            )}
                        </div>
                        <CardHeader>
                            <CardTitle>{recipe.name}</CardTitle>
                            <CardDescription>
                                {recipe.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center text-sm text-muted-foreground">
                                <Clock className="mr-1 h-4 w-4" />
                                <span>
                                    {recipe.prep_time
                                        ?.replace('PT', '')
                                        .replace('M', ' min')}
                                </span>
                                <Users className="ml-3 mr-1 h-4 w-4" />
                                <span>
                                    {recipe.favorites_count?.toLocaleString()}{' '}
                                    favorites
                                </span>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            {/* <div className="flex gap-1">
                                {recipe.tags.map((tag) => (
                                    <Badge key={tag} variant="outline">
                                        {tag}
                                    </Badge>
                                ))}
                            </div> */}
                        </CardFooter>
                    </Card>
                </Link>
            ))}
        </div>
    );
}
