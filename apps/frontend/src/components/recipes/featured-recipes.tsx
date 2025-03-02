import { Clock, Users } from 'lucide-react';

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

export default function FeaturedRecipes({
    featuredRecipes,
}: { featuredRecipes: Recipe[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredRecipes.map((recipe) => (
                <a href={`/recipes/${recipe.slug}`} key={recipe.slug}>
                    <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
                        <div className="relative h-48">
                            <img
                                src={recipe.image_path || '/placeholder.svg'}
                                alt={recipe.name}
                                className="object-cover"
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
                                <span>{recipe.prep_time} mins</span>
                                <Users className="ml-3 mr-1 h-4 w-4" />
                                <span>{recipe.favorites_count} favorites</span>
                            </div>
                        </CardContent>
                        {/* <CardFooter className="flex justify-between">
                            <div className="flex gap-1">
                                {recipe.tags.map((tag) => (
                                    <Badge key={tag} variant="outline">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardFooter> */}
                    </Card>
                </a>
            ))}
        </div>
    );
}
