declare namespace NodeJS {
  interface ProcessEnv {
    SESSION_SECRET: string;
    EMAIL: string;
    PASSWORD: string;
    ACTIVATE_USER: string;
    RESET_PASSWORD: string;
    REDIS_URL: string;
    APP_URL: string;
  }
}