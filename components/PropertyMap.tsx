'use client';

import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface PropertyMapProps {
  dict: {
    location?: {
      loadingText?: string;
      markerTitle?: string;
      coordinates: {
        lat: number;
        lng: number;
      };
    };
  };
}

const PropertyMap = ({ dict }: PropertyMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const location = dict?.location?.coordinates || { lat: -34.798603974645275, lng: -54.886729731300775 };

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        version: 'weekly',
      });

      try {
        const google = await loader.load();

        if (!mapRef.current) return;

        const map = new google.maps.Map(mapRef.current, {
          center: location,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.SATELLITE,
          mapTypeControl: true,
          streetViewControl: true,
          zoomControl: true,
          fullscreenControl: true,
        });

        new google.maps.Marker({
          position: location,
          map,
          title: dict?.location?.markerTitle || 'Ubicación de la propiedad',
          animation: google.maps.Animation.DROP,
        });

      } catch (error) {
        console.error('Error loading map:', error);
      }
    };

    initMap();
  }, [dict, location]);

  return (
    <div
      ref={mapRef}
      className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
      style={{ background: '#1A1A19' }}
    >
      {!mapRef.current && (
        <div className="h-full w-full flex items-center justify-center text-light-green">
          {dict?.location?.loadingText || 'Cargando mapa...'}
        </div>
      )}
    </div>
  );
};

export default PropertyMap;