import 'dotenv/config';

export const env = {
  PORT: Number(process.env.PORT ?? 5000),
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  DB_HOST: process.env.DB_HOST ?? 'localhost',
  DB_PORT: Number(process.env.DB_PORT ?? 3306),
  DB_USER: process.env.DB_USER ?? 'root',
  DB_PASSWORD: process.env.DB_PASSWORD ?? '',
  DB_NAME: process.env.DB_NAME ?? 'cartpilot',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID ?? '',
  PAYPAL_CLIENT_SECRET: process.env.PAYPAL_CLIENT_SECRET ?? '',
  PAYPAL_BASE_URL: process.env.PAYPAL_BASE_URL ?? '',
  AI_API_KEY: process.env.AI_API_KEY ?? '',
  AI_MODEL: process.env.AI_MODEL ?? 'gpt-4o-mini',
};

export default env;
