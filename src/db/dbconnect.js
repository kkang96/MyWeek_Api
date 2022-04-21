import mysql from 'mysql';
import { config } from '../config/index.js';

let connection =  mysql.createConnection(config);

export { connection }