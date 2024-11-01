'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface ImageCarouselProps {
  dict: {
    hero: {
      title: string;
      subtitle: string;
    };
    carousel: {
      kitchen: {
        title: string;
        description: string;
      };
      livingRoom: {
        title: string;
        description: string;
      };
      exterior: {
        title: string;
        description: string;
      };
      bedroom: {
        title: string;
        description: string;
      };
      closet: {
        title: string;
        description: string;
      };
      pool: {
        title: string;
        description: string;
      };
      hall: {
        title: string;
        description: string;
      };
      gallery: {
        title: string;
        description: string;
      };
      bathroom: {
        title: string;
        description: string;
      };
      diningRoom: {
        title: string;
        description: string;
      };
    };
  };
}

export default function ImageCarousel({ dict }: ImageCarouselProps) {
  const images = [
    {
      src: '/images/cocina3.png',
      title: dict.carousel.kitchen.title,
      description: dict.carousel.kitchen.description
    },
    {
      src: '/images/sala.png',
      title: dict.carousel.livingRoom.title,
      description: dict.carousel.livingRoom.description
    },
    {
      src: '/images/vista-casa-exterior.jpeg',
      title: dict.carousel.exterior.title,
      description: dict.carousel.exterior.description
    },
    {
      src: '/images/dormitorio.jpeg',
      title: dict.carousel.bedroom.title,
      description: dict.carousel.bedroom.description
    },
    {
      src: '/images/Guardaropa.jpg',
      title: dict.carousel.closet.title,
      description: dict.carousel.closet.description
    },
    {
      src: '/images/piscina.jpg',
      title: dict.carousel.pool.title,
      description: dict.carousel.pool.description
    },
    {
      src: '/images/hall.jpeg',
      title: dict.carousel.hall.title,
      description: dict.carousel.hall.description
    },
    {
      src: '/images/corredor-parrilla.jpg',
      title: dict.carousel.gallery.title,
      description: dict.carousel.gallery.description
    },
    {
      src: '/images/baño_suite.jpg',
      title: dict.carousel.bathroom.title,
      description: dict.carousel.bathroom.description
    },
    {
      src: '/images/comedor.jpeg',
      title: dict.carousel.diningRoom.title,
      description: dict.carousel.diningRoom.description
    }
  ];

  return (
    <div className="relative w-full h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ 
          clickable: true,
          dynamicBullets: true
        }}
        autoplay={{ 
          delay: 5000,
          disableOnInteraction: false
        }}
        effect="fade"
        className="w-full h-full"
        loop={true}
        speed={1000}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full group">
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="100vw"
                quality={100}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={index < 3}
                loading={index < 3 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
              <div className="absolute bottom-10 left-10 z-20 text-white max-w-2xl transform transition-all duration-300 translate-y-0 group-hover:translate-y-[-10px]">
                <h2 className="text-5xl font-bold mb-4">{image.title}</h2>
                <p className="text-xl">{image.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 