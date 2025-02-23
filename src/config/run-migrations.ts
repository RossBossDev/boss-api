import { AppDataSource } from './data-source';

async function runMigrations() {
  try {
    await AppDataSource.initialize();
    await AppDataSource.runMigrations();
    console.log('Migrations completed successfully');
    await AppDataSource.destroy();
    process.exit(0);
  } catch (error) {
    console.error('Error running migrations:', error);
    await AppDataSource.destroy();
    process.exit(1);
  }
}

runMigrations();
