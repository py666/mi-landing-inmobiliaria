'use client';

import { FaBed, FaBath, FaWarehouse, FaRulerCombined } from 'react-icons/fa';

interface PropertyFeaturesProps {
  dict: {
    features: {
      title: string;
      bedrooms: {
        title: string;
        description: string;
        value: string;
      };
      bathrooms: {
        title: string;
        description: string;
        value: string;
      };
      garage: {
        title: string;
        description: string;
        value: string;
      };
      area: {
        title: string;
        description: string;
        value: string;
      };
    };
  };
}

export default function PropertyFeatures({ dict }: PropertyFeaturesProps) {
  if (!dict?.features?.bedrooms?.title ||
    !dict?.features?.bathrooms?.title ||
    !dict?.features?.garage?.title ||
    !dict?.features?.area?.title) {
    return (
      <section id="features-section" className="bg-primary-dark py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-light-green mb-12">
            Características de la Propiedad
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-secondary-green/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaBed className="text-secondary-green text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-light-green mb-2">
                2 Dormitorios en Suite
              </h3>
              <p className="text-secondary-green">
                Amplias habitaciones con vista al jardín
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-green/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaBath className="text-secondary-green text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-light-green mb-2">
                3 Baños
              </h3>
              <p className="text-secondary-green">
                Baños completos con acabados de lujo
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-green/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaWarehouse className="text-secondary-green text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-light-green mb-2">
                Garaje - Galpón
              </h3>
              <p className="text-secondary-green">
                Con espacio adicional de almacenamiento
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-green/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaRulerCombined className="text-secondary-green text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-light-green mb-2">
                400 m²
              </h3>
              <p className="text-secondary-green">
                Terreno amplio con jardín
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const features = [
    {
      icon: FaBed,
      title: dict.features.bedrooms.title,
      description: dict.features.bedrooms.description
    },
    {
      icon: FaBath,
      title: dict.features.bathrooms.title,
      description: dict.features.bathrooms.description
    },
    {
      icon: FaWarehouse,
      title: dict.features.garage.title,
      description: dict.features.garage.description
    },
    {
      icon: FaRulerCombined,
      title: dict.features.area.title,
      description: dict.features.area.description
    }
  ];

  return (
    <section id="features-section" className="bg-primary-dark py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-light-green mb-12">
          {dict.features.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-secondary-green/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <feature.icon className="text-secondary-green text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-light-green mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary-green">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 