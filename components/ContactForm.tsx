'use client';

import { useState, useEffect } from 'react';
import { checkRateLimit } from '@/utils/rateLimiting';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

interface ContactFormProps {
    dict: {
        contact: {
            name: string;
            email: {
                title: string;
                value: string;
            };
            message: string;
            send: string;
            validation: {
                nameRequired: string;
                nameMinLength: string;
                namePattern: string;
                emailRequired: string;
                emailInvalid: string;
                messageRequired: string;
                messageMinLength: string;
                messageMaxLength: string;
            };
            status: {
                sending: string;
                success: string;
                error: string;
            };
        };
    };
}

export default function ContactForm({ dict }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const [recaptchaSiteKey, setRecaptchaSiteKey] = useState<string>('');

    useEffect(() => {
        // Obtener la sitekey cuando el componente se monta
        const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
        if (!siteKey) {
            console.error('ReCAPTCHA site key no encontrada');
            setStatus('Error: ReCAPTCHA no configurado');
        } else {
            setRecaptchaSiteKey(siteKey);
        }
    }, []);

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name) {
            newErrors.name = dict.contact.validation.nameRequired;
        } else if (formData.name.length < 2) {
            newErrors.name = dict.contact.validation.nameMinLength;
        } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(formData.name)) {
            newErrors.name = dict.contact.validation.namePattern;
        }

        if (!formData.email) {
            newErrors.email = dict.contact.validation.emailRequired;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = dict.contact.validation.emailInvalid;
        }

        if (!formData.message) {
            newErrors.message = dict.contact.validation.messageRequired;
        } else if (formData.message.length < 10) {
            newErrors.message = dict.contact.validation.messageMinLength;
        } else if (formData.message.length > 500) {
            newErrors.message = dict.contact.validation.messageMaxLength;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!captchaValue) {
            setStatus('Por favor, verifica que no eres un robot');
            return;
        }

        const rateLimit = checkRateLimit();
        if (!rateLimit.allowed) {
            setStatus(rateLimit.message);
            return;
        }

        if (!validateForm()) {
            return;
        }

        setStatus(dict.contact.status.sending);

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: dict.contact.email.value,
                    'g-recaptcha-response': captchaValue,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            setStatus(dict.contact.status.success);
            setFormData({ name: '', email: '', message: '' });
            setCaptchaValue(null);
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus(dict.contact.status.error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-light-green font-medium mb-2">
                    {dict.contact.name}
                </label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 rounded-lg bg-primary-dark/50 border border-secondary-green/20 text-light-green focus:outline-none focus:border-secondary-green"
                />
                {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="email" className="block text-light-green font-medium mb-2">
                    {dict.contact.email.title}
                </label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 rounded-lg bg-primary-dark/50 border border-secondary-green/20 text-light-green focus:outline-none focus:border-secondary-green"
                />
                {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="message" className="block text-light-green font-medium mb-2">
                    {dict.contact.message}
                </label>
                <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full p-3 rounded-lg bg-primary-dark/50 border border-secondary-green/20 text-light-green focus:outline-none focus:border-secondary-green"
                />
                {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
            </div>

            {recaptchaSiteKey && (
                <div className="flex justify-center mb-4">
                    <ReCAPTCHA
                        sitekey={recaptchaSiteKey}
                        onChange={(value) => setCaptchaValue(value)}
                    />
                </div>
            )}

            <button
                type="submit"
                className="w-full py-3 px-6 bg-secondary-green text-primary-dark font-semibold rounded-lg hover:bg-secondary-green/90 transition-colors disabled:opacity-50"
                disabled={!captchaValue || !recaptchaSiteKey}
            >
                {dict.contact.send}
            </button>

            {status && (
                <p className={`text-center mt-4 ${status === dict.contact.status.success ? 'text-green-500' : 'text-red-500'
                    }`}>
                    {status}
                </p>
            )}
        </form>
    );
} 