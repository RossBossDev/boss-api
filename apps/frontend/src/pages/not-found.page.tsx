import { Button } from '@/components/ui/button';
import Layout from '@/layout';
import { Link } from '@inertiajs/react';
import { ChefHat, Home, Search } from 'lucide-react';

export default function NotFound() {
    return (
        <Layout>
            <div className="container mx-auto flex flex-col items-center justify-center min-h-[70vh] px-4 py-12 text-center">
                <div className="relative w-96 h-96 mb-6">
                    <img
                        src="https://kagi.com/proxy/empty-plate.jpg?c=GWrkLJWU1qRFayCNUNRtzZCIKlJKTB0sXGno9JSkIOieD8bS4ANhfLUupf3_HbyTykaOZA0DQTFi_mwKCY8kVYWTMXG_JNlMO_pJL6OXh5s%3D"
                        alt="Empty plate"
                        className="object-contain rounded-lg"
                    />
                </div>

                <h1 className="text-4xl font-bold tracking-tight mb-2">
                    Recipe Not Found
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                    Oops! Looks like this recipe has been eaten.
                </p>

                <div className="max-w-md space-y-4">
                    <p className="text-muted-foreground">
                        The recipe you're looking for might have been moved,
                        deleted, or never existed in the first place.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <Link href="/">
                            <Button className="w-full sm:w-auto">
                                <Home className="mr-2 h-4 w-4" />
                                Back to Home
                            </Button>
                        </Link>

                        <Link href="/recipes/roulette">
                            <Button
                                variant="outline"
                                className="w-full sm:w-auto"
                            >
                                <ChefHat className="mr-2 h-4 w-4" />
                                Try a Random Recipe
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="mt-12 p-6 bg-muted rounded-lg max-w-md">
                    <h2 className="text-lg font-medium mb-4 flex items-center justify-center">
                        <Search className="mr-2 h-5 w-5" />
                        Popular Recipes
                    </h2>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/recipes/creamy-garlic-parmesan-pasta"
                                className="text-primary hover:underline"
                            >
                                Creamy Garlic Parmesan Pasta
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/recipes/roasted-vegetable-salad"
                                className="text-primary hover:underline"
                            >
                                Roasted Vegetable Salad
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/recipes/classic-chocolate-chip-cookies"
                                className="text-primary hover:underline"
                            >
                                Classic Chocolate Chip Cookies
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
}
