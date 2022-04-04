import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT,
  secretKey: process.env.SECRET_KEY,
  tokenExpires: process.env.TOKEN_EXPIRES,
  api: {
    prefix: '/',
  },
  dbconfig: {
    server: process.env.DB_STG_SERVER,
    port: parseInt(process.env.DB_STG_PORT),
    pool: {
      max: 5,
      min: 1,
      idleTimeoutMillis: 30000,
    },
    options: {
      encrypt: false,
      datebase: process.env.DB_STG_DATEBASE,
      trustServerCertificate: true,
    },
    authentication: {
      type: 'default',
      options: {
        userName: process.env.DB_STG_USERNAME,
        password: process.env.DB_STG_PASSOWRD,
      },
    },
  },
};
