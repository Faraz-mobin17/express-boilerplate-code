import dotenv from "dotenv";
dotenv.config();

export default {
  DB_HOST: process.env.DB_HOST,
  DB_PASS: process.env.DB_PASS,
  DB_USER: process.env.DB_USER,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
  SECRET_KEY: process.env.SECRET_KEY,
  EXPIRES_IN: process.env.EXPIRES_IN,
  ORIGIN: process.env.ORIGIN,
};
