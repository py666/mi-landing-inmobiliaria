/// <reference types="next" />
/// <reference types="react" />
/// <reference types="google.maps" />

declare module '*.css';
declare module '*.scss';
declare module '*.json';
declare module 'swiper/react';
declare module 'swiper/modules';
declare module '@emailjs/browser';
declare module 'react-icons/fa';

declare global {
  interface Window {
    google: typeof google;
    initMap?: () => void;
  }

  namespace JSX {
    interface Element extends React.ReactElement<any, any> { }
  }
}

export {}; 