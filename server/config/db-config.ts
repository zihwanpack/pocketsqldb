import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

import { IDatabaseConfig } from '../types';
dotenv.config();

const databaseConfig: IDatabaseConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  port: parseInt(process.env.DB_PORT || '3306'),
  database: process.env.DB_TABLE || 'pokemon_db',
  password: process.env.DB_PASSWORD || '1',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

export const pool = mysql.createPool(databaseConfig);
