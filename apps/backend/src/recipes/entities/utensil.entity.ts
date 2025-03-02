import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Recipe } from './recipe.entity';

@Entity('utensils')
export class Utensil {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    oid: string;

    @Column()
    recipe_id: number;

    @ManyToOne(
        () => Recipe,
        (recipe) => recipe.id,
    )
    @JoinColumn({ name: 'recipe_id' })
    recipe: Recipe;

    @Column()
    name: string;
}
