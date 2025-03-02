import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { Ingredient } from './ingredient.entity';
import { Step } from './step.entity';
@Entity('recipes')
export class Recipe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    oid: string;

    @Column()
    category_id: number;

    @ManyToOne(
        () => Category,
        (category) => category.id,
    )
    @JoinColumn({ name: 'category_id' })
    category: Category;

    @OneToMany(
        () => Ingredient,
        (ingredient) => ingredient.recipe,
    )
    ingredients: Ingredient[];

    @OneToMany(
        () => Step,
        (step) => step.recipe,
    )
    steps: Step[];

    @Column()
    name: string;

    @Column()
    slug: string;

    @Column()
    headline: string;

    @Column()
    description: string;

    @Column()
    difficulty: string;

    @Column()
    prep_time: string;

    @Column()
    total_time: string;

    @Column()
    image_path: string;

    @Column()
    card_link: string;

    @Column()
    average_rating: string;

    @Column()
    ratings_count: string;

    @Column()
    favorites_count: string;

    @Column()
    is_premium: string;

    @Column()
    website_url: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}
