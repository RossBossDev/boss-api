export type Recipe = {
    slug: string;
    name: string;
    headline: string | null;
    card_link: string | null;
    average_rating: string | null;
    prep_time: string | null;
    ingredients: string[] | null;
    steps: string[] | null;
    favorites_count: string | null;
    ratings_count: string | null;
    difficulty: string | null;
    is_premium: string | null;
    description: string | null;
    image_path: string | null;
};
