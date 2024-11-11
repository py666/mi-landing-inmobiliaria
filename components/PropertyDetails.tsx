'use client';

import {
  FaMapMarkerAlt,
  FaEye,
  FaCompass,
  FaWater,
  FaRulerCombined,
  FaHome,
  FaBed,
  FaBath,
  FaUtensils,
  FaCouch,
  FaWarehouse,
  FaSwimmingPool
} from 'react-icons/fa';

interface PropertyDetailsProps {
  dict: {
    details: {
      title: string;
      items: {
        neighborhood: { title: string; value: string; };
        view: { title: string; value: string; };
        orientation: { title: string; value: string; };
        waterLevel: { title: string; value: string; };
        terrainSurface: { title: string; value: string; };
        builtSurface: { title: string; value: string; };
        bedrooms: { title: string; value: string; };
        bathrooms: { title: string; value: string; };
        serviceBedroom: { title: string; value: string; };
        kitchen: { title: string; value: string; };
        living: { title: string; value: string; };
        diningRoom: { title: string; value: string; };
        warehouse: { title: string; value: string; };
        pool: { title: string; value: string; };
      };
    };
  };
}

const iconMap = {
  neighborhood: FaMapMarkerAlt,
  view: FaEye,
  orientation: FaCompass,
  waterLevel: FaWater,
  terrainSurface: FaRulerCombined,
  builtSurface: FaHome,
  bedrooms: FaBed,
  bathrooms: FaBath,
  serviceBedroom: FaBed,
  kitchen: FaUtensils,
  living: FaCouch,
  diningRoom: FaCouch,
  warehouse: FaWarehouse,
  pool: FaSwimmingPool
};

export default function PropertyDetails({ dict }: PropertyDetailsProps) {
  if (!dict?.details?.items) {
    return null;
  }

  return (
    <section className="bg-primary-dark py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-light-green mb-12">
          {dict.details.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(dict.details.items).map(([key, item]) => {
            const Icon = iconMap[key as keyof typeof iconMap];
            return (
              <div key={key} className="property-detail">
                <div className="flex items-center gap-3 mb-2">
                  {Icon && <Icon className="text-secondary-green text-xl" />}
                  <h3 className="text-light-green font-semibold">{item.title}</h3>
                </div>
                <p className="text-secondary-green pl-8">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 