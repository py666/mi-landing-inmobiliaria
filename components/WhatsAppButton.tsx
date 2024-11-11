'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

interface WhatsAppButtonProps {
  dict?: {
    whatsapp?: {
      message: string;
    };
  };
}

export default function WhatsAppButton(): JSX.Element {
  const whatsappNumber = '595991475069';
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'es';

  const messages = {
    es: 'Hola, me interesa la propiedad en Pago de la Paja',
    en: 'Hi, I am interested in the property in Pago de la Paja',
    pt: 'Olá, estou interessado na propriedade em Pago de la Paja'
  };

  const message = encodeURIComponent(messages[lang as keyof typeof messages] || messages.es);

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
} 