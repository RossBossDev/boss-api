import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

console.log('process.env.DATABASE_URL', process.env.DATABASE_URL);

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  autoLoadEntities: true,
  synchronize: false,
  ssl: process.env.NODE_ENV === 'production',
};
