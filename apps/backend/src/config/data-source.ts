import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    url:
        process.env.DATABASE_URL ||
        'postgresql://postgres:postgres@localhost:5432/boss_db?schema=public',
    entities: ['src/**/*.entity.ts', 'dist/**/*.entity.js'],
    migrations: ['src/migrations/*.ts', 'dist/migrations/*.js'],
    synchronize: false,
});
