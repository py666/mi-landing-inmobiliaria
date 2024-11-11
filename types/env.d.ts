declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
        NEXT_PUBLIC_EMAILJS_SERVICE_ID: string;
        NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string;
        NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: string;
        // ... otras variables de entorno
    }
} 