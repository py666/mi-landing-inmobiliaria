const RATE_LIMIT_TIME = 60000; // 1 minuto
const MAX_ATTEMPTS = 3; // Máximo número de intentos

export const checkRateLimit = () => {
    const lastSubmission = localStorage.getItem('lastSubmission');
    const attempts = parseInt(localStorage.getItem('submitAttempts') || '0');
    const now = Date.now();

    if (lastSubmission) {
        const timeSinceLastSubmission = now - parseInt(lastSubmission);

        if (timeSinceLastSubmission < RATE_LIMIT_TIME) {
            if (attempts >= MAX_ATTEMPTS) {
                return {
                    allowed: false,
                    message: 'Has excedido el límite de intentos. Por favor, espera un momento.'
                };
            }
            localStorage.setItem('submitAttempts', (attempts + 1).toString());
        } else {
            // Resetear intentos después del tiempo límite
            localStorage.setItem('submitAttempts', '0');
        }
    }

    localStorage.setItem('lastSubmission', now.toString());
    return {
        allowed: true,
        message: ''
    };
};
