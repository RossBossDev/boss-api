import { DataSource } from 'typeorm';
import { Example } from '../modules/example/entities/example.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url:
    process.env.DATABASE_URL ||
    'postgresql://postgres:postgres@localhost:5432/boss_db?schema=public',
  entities: [Example],
  migrations: ['src/migrations/*.ts', 'dist/migrations/*.js'],
  synchronize: false,
});
