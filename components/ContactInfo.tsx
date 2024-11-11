'use client';

import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

interface ContactInfoProps {
    dict: {
        contact: {
            title: string;
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
            info: string;
        };
    };
}

export default function ContactInfo({ dict }: ContactInfoProps) {
    if (!dict?.contact) {
        console.log('Missing contact data:', dict);
        return null;
    }

    console.log('Contact data:', dict.contact);

    return (
        <div className="bg-primary-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-light-green mb-6">
                {dict.contact.info}
            </h3>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="bg-secondary-green/20 p-3 rounded-lg">
                        <FaMapMarkerAlt className="text-secondary-green text-xl" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-light-green">
                            {dict.contact.direction.title}
                        </h4>
                        <p className="text-secondary-green">
                            {dict.contact.direction.value}
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-secondary-green/20 p-3 rounded-lg">
                        <FaPhone className="text-secondary-green text-xl" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-light-green">
                            {dict.contact.phone.title}
                        </h4>
                        <p className="text-secondary-green">
                            {dict.contact.phone.value}
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-secondary-green/20 p-3 rounded-lg">
                        <FaEnvelope className="text-secondary-green text-xl" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-light-green">
                            {dict.contact.email.title}
                        </h4>
                        <a
                            href={`mailto:${dict.contact.email.value}`}
                            className="text-secondary-green hover:text-light-green transition-colors"
                        >
                            arturo.nieto@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
} 