import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Step } from './step.entity';

@Entity('images')
export class Image {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    oid: string;

    @Column()
    step_id: number;

    @ManyToOne(
        () => Step,
        (step) => step.id,
    )
    @JoinColumn({ name: 'step_id' })
    step: Step;

    @Column()
    link: string;

    @Column()
    path: string;

    @Column()
    caption: string;
}
