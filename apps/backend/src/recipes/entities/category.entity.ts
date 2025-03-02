import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    slug: string;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    icon_path: string;

    @Column()
    icon_link: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}
