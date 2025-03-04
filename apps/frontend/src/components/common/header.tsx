import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { ChefHat } from 'lucide-react';

export default function Header() {
    return (
        <header className="w-full border-b">
            <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <ChefHat className="h-6 w-6" />
                    <span className="text-lg font-bold">Ross Boss Dev</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link
                        href="/"
                        className="text-sm font-medium hover:underline underline-offset-4"
                    >
                        Home
                    </Link>
                    <Link
                        href="/recipes"
                        className="text-sm font-medium hover:underline underline-offset-4"
                    >
                        Recipes
                    </Link>
                </nav>
                <div className="ml-4">
                    <Link href="/recipes/roulette">
                        <Button variant="outline" size="sm">
                            Feeling Lucky
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
