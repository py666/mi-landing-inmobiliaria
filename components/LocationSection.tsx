import PropertyMap from './PropertyMap';
import { FaMapMarkerAlt, FaRoute, FaBus, FaStore } from 'react-icons/fa';

interface LocationSectionProps {
  dict: {
    location: {
      title: string;
      subtitle: string;
      address: string;
      access: string;
      transport: string;
      services: string;
    };
  };
}

export default function LocationSection({ dict }: LocationSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{dict.location.title}</h2>
          <p className="text-xl text-gray-600">{dict.location.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <PropertyMap />
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Puntos de Interés</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold">Dirección</h4>
                    <p className="text-gray-600">{dict.location.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaRoute className="text-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold">Accesos</h4>
                    <p className="text-gray-600">{dict.location.access}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaBus className="text-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold">Transporte</h4>
                    <p className="text-gray-600">{dict.location.transport}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaStore className="text-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold">Servicios Cercanos</h4>
                    <p className="text-gray-600">{dict.location.services}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Distancias</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span>La Barra y Manantiales</span>
                  <span className="font-semibold">10 min</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>José Ignacio</span>
                  <span className="font-semibold">20 min</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Punta del Este</span>
                  <span className="font-semibold">30 min</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>San Carlos</span>
                  <span className="font-semibold">5 min</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 