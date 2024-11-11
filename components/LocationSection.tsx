'use client';

import PropertyMap from './PropertyMap';
import { FaMapMarkerAlt, FaRoute, FaBus, FaStore } from 'react-icons/fa';
import { Location } from '@/types/dictionary';

interface LocationSectionProps {
  dict: {
    location: Location;
  };
}

export default function LocationSection({ dict }: LocationSectionProps) {
  if (!dict?.location) {
    return null;
  }

  const {
    title,
    subtitle,
    pointsOfInterest,
    direction,
    access,
    transport,
    services,
    distances,
  } = dict.location;

  return (
    <section id="location-section" className="bg-primary-dark py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-light-green mb-4">
            {title}
          </h2>
          <p className="text-xl text-secondary-green">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PropertyMap dict={dict} />

          <div className="space-y-8">
            <div className="bg-primary-dark/50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-light-green mb-6">
                {pointsOfInterest}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="location-icon">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="location-title">{direction.title}</h4>
                    <p className="location-text">{direction.value}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="location-icon">
                    <FaRoute className="text-xl" />
                  </div>
                  <div>
                    <h4 className="location-title">{access.title}</h4>
                    <p className="location-text">{access.value}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="location-icon">
                    <FaBus className="text-xl" />
                  </div>
                  <div>
                    <h4 className="location-title">{transport.title}</h4>
                    <p className="location-text">{transport.value}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="location-icon">
                    <FaStore className="text-xl" />
                  </div>
                  <div>
                    <h4 className="location-title">{services.title}</h4>
                    <p className="location-text">{services.value}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-dark/50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-light-green mb-6">
                {distances.title}
              </h3>
              <ul className="space-y-3">
                {Object.entries(distances.items).map(([key, item]) => (
                  <li key={key} className="flex justify-between items-center text-secondary-green">
                    <span>{item.name}</span>
                    <span className="ml-4">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 