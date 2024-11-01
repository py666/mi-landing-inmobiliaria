'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const PropertyMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const location = { lat: -34.798603974645275, lng: -54.886729731300775 };

  useEffect(() => {
    if (isLoaded || !mapRef.current) return;

    const initMap = () => {
      if (mapRef.current) {
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
          title: 'Ubicación de la propiedad',
        });
      }
    };

    if (!window.google) {
      if (!scriptRef.current) {
        window.initMap = initMap;
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        scriptRef.current = script;
      }
    } else {
      initMap();
    }

    setIsLoaded(true);

    return () => {
      if (scriptRef.current) {
        scriptRef.current.remove();
        scriptRef.current = null;
      }
      window.initMap = () => {};
    };
  }, [isLoaded]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
      style={{ background: '#f5f5f5' }}
    >
      <div className="h-full w-full flex items-center justify-center text-gray-500">
        Cargando mapa...
      </div>
    </div>
  );
};

export default PropertyMap;