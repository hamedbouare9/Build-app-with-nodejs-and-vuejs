import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

export default {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      database: process.env.DATABASE_NAME,
      user: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};
