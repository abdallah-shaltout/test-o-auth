declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'DEV' | 'PROD'
        DB_URL: string
        BASE: string
        // JWT
        JWT_SECRET_KEY: string
        JWT_EXPIRE_TIME: string
        // NodeMailer
        MAIL_USER: string
        MAIL_PASS: string
        MAIL_HOST: string | undefined
        MAIL_PORT: string

        // Passport
        ClientRedirectUrl: string
        GOOGLE_CLIENT_ID: string
        GOOGLE_CLIENT_SECRET: string
        GOOGLE_CALLBACK_URL: string
        FACEBOOK_CLIENT_ID: string
        FACEBOOK_CLIENT_SECRET: string
        FACEBOOK_CALLBACK_URL: string
    }
}
