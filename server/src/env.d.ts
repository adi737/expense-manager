declare namespace NodeJS {
  interface ProcessEnv {
    REDIS_SECRET: string;
    EMAIL: string;
    PASSWORD: string;
    ACTIVATE_USER: string;
    RESET_PASSWORD: string;
    REDIS_URL: string;
    CORS_ORIGIN: string;
  }
}