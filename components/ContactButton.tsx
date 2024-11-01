'use client';

interface ContactButtonProps {
  dict: {
    contact: {
      title: string;
      send: string;
    };
  };
}

export default function ContactButton({ dict }: ContactButtonProps) {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-8 bg-gradient-to-r from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <button
          onClick={scrollToContact}
          className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          {dict.contact.title}
        </button>
      </div>
    </div>
  );
} 