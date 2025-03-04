import { Link } from '@inertiajs/react';
import { ChefHat } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full border-t py-6">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
                <div className="flex items-center gap-2">
                    <ChefHat className="h-5 w-5" />
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Delicious Recipes. All
                        rights reserved.
                    </p>
                </div>
                <nav className="flex gap-4 sm:gap-6">
                    <Link
                        href="/about"
                        className="text-sm font-medium hover:underline underline-offset-4"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm font-medium hover:underline underline-offset-4"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/privacy"
                        className="text-sm font-medium hover:underline underline-offset-4"
                    >
                        Privacy
                    </Link>
                    <Link
                        href="/terms"
                        className="text-sm font-medium hover:underline underline-offset-4"
                    >
                        Terms
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
