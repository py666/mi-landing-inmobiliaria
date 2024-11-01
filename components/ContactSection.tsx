'use client';

import { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

interface ContactSectionProps {
  dict: {
    contact: {
      title: string;
      name: string;
      email: string;
      message: string;
      send: string;
      info: string;
    };
  };
}

export default function ContactSection({ dict }: ContactSectionProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Inicializar EmailJS
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Administrador de la Propiedad',
      reply_to: formData.email,
    };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams
      );

      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const getButtonText = () => {
    switch (status) {
      case 'loading':
        return 'Enviando...';
      case 'success':
        return '¡Mensaje Enviado!';
      case 'error':
        return 'Error al enviar';
      default:
        return dict.contact.send;
    }
  };

  const getButtonClass = () => {
    return `w-full font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105
      ${status === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 
        status === 'success' ? 'bg-green-500 hover:bg-green-600' :
        status === 'error' ? 'bg-red-500 hover:bg-red-600' :
        'bg-primary hover:bg-primary/90'} text-white`;
  };

  return (
    <section id="contact-section" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          {dict.contact.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                  {dict.contact.name}
                </label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Juan Pérez"
                  disabled={status === 'loading'}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                  {dict.contact.email}
                </label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="juan@ejemplo.com"
                  disabled={status === 'loading'}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                  {dict.contact.message}
                </label>
                <textarea 
                  id="message" 
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Me interesa esta propiedad..."
                  disabled={status === 'loading'}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={status === 'loading'}
                className={getButtonClass()}
              >
                {getButtonText()}
              </button>
            </form>
          </div>

          {/* Información de Contacto */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-8 text-white">
              {dict.contact.info}
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Dirección</h4>
                  <p className="text-gray-300">Pago de la Paja, entre Ruta 104 y Camino Eguzquiza, Maldonado</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <FaPhone className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Teléfono</h4>
                  <p className="text-gray-300">+595 991 475 069</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                  <p className="text-gray-300">arturo.nieto@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 