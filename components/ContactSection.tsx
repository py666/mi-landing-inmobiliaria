'use client';

import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

interface ContactSectionProps {
  dict: {
    contact: {
      title: string;
      name: string;
      email: {
        title: string;
        value: string;
      };
      phone: {
        title: string;
        value: string;
      };
      direction: {
        title: string;
        value: string;
      };
      message: string;
      send: string;
      info: string;
      status: {
        sending: string;
        success: string;
        error: string;
      };
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
    };
  };
}

export default function ContactSection({ dict }: ContactSectionProps) {
  if (!dict?.contact) {
    return null;
  }

  return (
    <section id="contact-section" className="bg-primary-dark py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactInfo dict={dict} />
          <ContactForm dict={dict} />
        </div>
      </div>
    </section>
  );
} 