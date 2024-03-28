import knex from 'knex';
import knexfile from './knexfile.js';

const mode =
  process.env.MODE === 'DEVELOPMENT'
    ? knexfile.development
    : knexfile.production;

const db = knex(mode);

export default db;
