import { 
  FaHome, 
  FaCompass, 
  FaEye, 
  FaRuler, 
  FaBed, 
  FaBath,
  FaUtensils,
  FaCouch,
  FaWarehouse,
  FaChair,
  FaMapMarkerAlt,
  FaWater,
  FaSwimmer
} from 'react-icons/fa';

interface PropertyDetailsProps {
  dict: {
    details: {
      title: string;
      items: {
        [key: string]: {
          title: string;
          value: string;
        };
      };
    };
  };
}

export default function PropertyDetails({ dict }: PropertyDetailsProps) {
  const details = [
    {
      icon: <FaMapMarkerAlt />,
      title: dict.details.items.neighborhood.title,
      value: dict.details.items.neighborhood.value
    },
    {
      icon: <FaEye />,
      title: dict.details.items.view.title,
      value: dict.details.items.view.value
    },
    {
      icon: <FaCompass />,
      title: dict.details.items.orientation.title,
      value: dict.details.items.orientation.value
    },
    {
      icon: <FaWater />,
      title: dict.details.items.waterLevel.title,
      value: dict.details.items.waterLevel.value
    },
    {
      icon: <FaRuler />,
      title: dict.details.items.terrainSurface.title,
      value: dict.details.items.terrainSurface.value
    },
    {
      icon: <FaHome />,
      title: dict.details.items.builtSurface.title,
      value: dict.details.items.builtSurface.value
    },
    {
      icon: <FaBed />,
      title: dict.details.items.bedrooms.title,
      value: dict.details.items.bedrooms.value
    },
    {
      icon: <FaBath />,
      title: dict.details.items.bathrooms.title,
      value: dict.details.items.bathrooms.value
    },
    {
      icon: <FaBed />,
      title: dict.details.items.serviceBedroom.title,
      value: dict.details.items.serviceBedroom.value
    },
    {
      icon: <FaUtensils />,
      title: dict.details.items.kitchen.title,
      value: dict.details.items.kitchen.value
    },
    {
      icon: <FaCouch />,
      title: dict.details.items.living.title,
      value: dict.details.items.living.value
    },
    {
      icon: <FaChair />,
      title: dict.details.items.diningRoom.title,
      value: dict.details.items.diningRoom.value
    },
    {
      icon: <FaWarehouse />,
      title: dict.details.items.warehouse.title,
      value: dict.details.items.warehouse.value
    },
    {
      icon: <FaSwimmer />,
      title: dict.details.items.pool.title,
      value: dict.details.items.pool.value
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          {dict.details.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {details.map((detail, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4"
            >
              <div className="text-primary text-2xl">
                {detail.icon}
              </div>
              <div>
                <h3 className="text-sm text-gray-500 font-medium">
                  {detail.title}
                </h3>
                <p className="text-lg font-semibold">
                  {detail.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 