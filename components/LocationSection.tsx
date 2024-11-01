import PropertyMap from './PropertyMap';
import { FaMapMarkerAlt, FaRoute, FaBus, FaStore } from 'react-icons/fa';

interface LocationSectionProps {
  dict: {
    location: {
      title: string;
      subtitle: string;
      pointsOfInterest: string;
      direction: {
        title: string;
        value: string;
      };
      access: {
        title: string;
        value: string;
      };
      transport: {
        title: string;
        value: string;
      };
      services: {
        title: string;
        value: string;
      };
      distances: {
        title: string;
        items: {
          laBarraManantiales: { name: string; time: string; };
          joseIgnacio: { name: string; time: string; };
          puntaDelEste: { name: string; time: string; };
          sanCarlos: { name: string; time: string; };
        };
      };
      loadingText?: string;
      markerTitle?: string;
    };
  };
}

export default function LocationSection({ dict }: LocationSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{dict?.location?.title}</h2>
          <p className="text-xl text-gray-600">{dict?.location?.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <PropertyMap 
              dict={{
                location: {
                  ...dict.location,
                  loadingText: dict.location.loadingText || 'Cargando mapa...',
                  markerTitle: dict.location.markerTitle || 'Ubicación de la propiedad'
                }
              }} 
            />
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">{dict?.location?.pointsOfInterest}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{dict?.location?.direction?.title}</h4>
                    <p className="text-gray-600">{dict?.location?.direction?.value}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <FaRoute className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{dict?.location?.access?.title}</h4>
                    <p className="text-gray-600">{dict?.location?.access?.value}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <FaBus className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{dict?.location?.transport?.title}</h4>
                    <p className="text-gray-600">{dict?.location?.transport?.value}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <FaStore className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{dict?.location?.services?.title}</h4>
                    <p className="text-gray-600">{dict?.location?.services?.value}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">{dict?.location?.distances?.title}</h3>
              <ul className="space-y-3">
                {dict?.location?.distances?.items && (
                  <>
                    <li className="flex justify-between items-center">
                      <span>{dict.location.distances.items.laBarraManantiales.name}</span>
                      <span className="font-semibold">{dict.location.distances.items.laBarraManantiales.time}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>{dict.location.distances.items.joseIgnacio.name}</span>
                      <span className="font-semibold">{dict.location.distances.items.joseIgnacio.time}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>{dict.location.distances.items.puntaDelEste.name}</span>
                      <span className="font-semibold">{dict.location.distances.items.puntaDelEste.time}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>{dict.location.distances.items.sanCarlos.name}</span>
                      <span className="font-semibold">{dict.location.distances.items.sanCarlos.time}</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 