/*
CREATE TABLE `steps` (
	`id` integer PRIMARY KEY NOT NULL,
	`oid` text NOT NULL,
	`recipe_id` integer NOT NULL,
	`index` integer NOT NULL,
	`instructions` text NOT NULL,
	FOREIGN KEY (`recipe_id`) REFERENCES `recipes`(`id`) ON UPDATE no action ON DELETE cascade
);
*/

import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Recipe } from './recipe.entity';

@Entity('steps')
export class Step {
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
    index: number;

    @Column()
    instructions: string;
}
