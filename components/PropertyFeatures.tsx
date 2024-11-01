import { FaBed, FaBath, FaCar, FaRuler } from 'react-icons/fa';

interface PropertyFeaturesProps {
  dict: {
    features: {
      title: string;
      bedrooms: string;
      bedroomsDescription: string;
      bathrooms: string;
      bathroomsDescription: string;
      garage: string;
      garageDescription: string;
      area: string;
      areaDescription: string;
    };
  };
}

export default function PropertyFeatures({ dict }: PropertyFeaturesProps) {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">{dict.features.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
            <FaBed className="text-4xl mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">{dict.features.bedrooms}</h3>
            <p className="text-gray-600">{dict.features.bedroomsDescription}</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
            <FaBath className="text-4xl mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">{dict.features.bathrooms}</h3>
            <p className="text-gray-600">{dict.features.bathroomsDescription}</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
            <FaCar className="text-4xl mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">{dict.features.garage}</h3>
            <p className="text-gray-600">{dict.features.garageDescription}</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
            <FaRuler className="text-4xl mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">{dict.features.area}</h3>
            <p className="text-gray-600">{dict.features.areaDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 