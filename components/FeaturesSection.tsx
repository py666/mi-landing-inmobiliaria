'use client';

import { FaBed, FaBath, FaCar, FaRuler } from 'react-icons/fa';

interface FeaturesSectionProps {
    dict: {
        features: {
            title: string;
            subtitle: string;
            items: {
                bedrooms: { title: string; value: string; };
                bathrooms: { title: string; value: string; };
                garage: { title: string; value: string; };
                area: { title: string; value: string; };
            };
            description: string[];
        };
    };
}

export default function FeaturesSection({ dict }: FeaturesSectionProps) {
    if (!dict?.features) {
        return null;
    }

    return (
        <section id="features-section" className="py-16 bg-white -mt-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">{dict.features.title}</h2>
                    <p className="text-xl text-gray-600">{dict.features.subtitle}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div className="text-center">
                        <div className="bg-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                            <FaBed className="text-primary text-2xl" />
                        </div>
                        <h3 className="font-semibold mb-2">{dict.features.items.bedrooms.title}</h3>
                        <p className="text-gray-600">{dict.features.items.bedrooms.value}</p>
                    </div>

                    <div className="text-center">
                        <div className="bg-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                            <FaBath className="text-primary text-2xl" />
                        </div>
                        <h3 className="font-semibold mb-2">{dict.features.items.bathrooms.title}</h3>
                        <p className="text-gray-600">{dict.features.items.bathrooms.value}</p>
                    </div>

                    <div className="text-center">
                        <div className="bg-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                            <FaCar className="text-primary text-2xl" />
                        </div>
                        <h3 className="font-semibold mb-2">{dict.features.items.garage.title}</h3>
                        <p className="text-gray-600">{dict.features.items.garage.value}</p>
                    </div>

                    <div className="text-center">
                        <div className="bg-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                            <FaRuler className="text-primary text-2xl" />
                        </div>
                        <h3 className="font-semibold mb-2">{dict.features.items.area.title}</h3>
                        <p className="text-gray-600">{dict.features.items.area.value}</p>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    {dict.features.description.map((paragraph, index) => (
                        <p key={index} className="text-gray-600 mb-4">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
