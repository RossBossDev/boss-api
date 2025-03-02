import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Step } from './step.entity';

@Entity('timers')
export class Timer {
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
    name: string;

    @Column()
    duration: string;

    @Column()
    temperature: string;

    @Column()
    temperature_unit: string;

    @Column()
    oven_mode: string;
}
