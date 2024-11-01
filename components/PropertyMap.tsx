'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

interface PropertyMapProps {
  dict?: {
    location?: {
      loadingText?: string;
      markerTitle?: string;
    };
  };
}

const PropertyMap = ({ dict }: PropertyMapProps = {}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const location = { lat: -34.798603974645275, lng: -54.886729731300775 };

  const initMap = () => {
    if (!mapRef.current || !window.google) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: location,
      zoom: 15,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }],
        },
      ],
      mapTypeControl: true,
      streetViewControl: true,
      zoomControl: true,
    });

    new window.google.maps.Marker({
      position: location,
      map,
      title: dict?.location?.markerTitle || 'Ubicación de la propiedad',
    });
  };

  useEffect(() => {
    // Si ya existe window.google, inicializar el mapa
    if (window.google) {
      initMap();
    }
  }, []);

  return (
    <>
      <Script
        id="google-maps"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
        onLoad={initMap}
        strategy="afterInteractive"
      />
      <div 
        ref={mapRef} 
        className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
        style={{ background: '#f5f5f5' }}
      >
        <div className="h-full w-full flex items-center justify-center text-gray-500">
          {dict?.location?.loadingText || 'Cargando mapa...'}
        </div>
      </div>
    </>
  );
};

export default PropertyMap;