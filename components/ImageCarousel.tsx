'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import type { SwiperProps } from 'swiper/react';

interface CustomSwiperProps extends SwiperProps {
  onSwiper?: (swiper: any) => void;
}

interface CarouselDictionary {
  carousel: {
    kitchen: { title: string; description: string; };
    livingRoom: { title: string; description: string; };
    exterior: { title: string; description: string; };
    bedroom: { title: string; description: string; };
    closet: { title: string; description: string; };
    pool: { title: string; description: string; };
    hall: { title: string; description: string; };
    gallery: { title: string; description: string; };
    bathroom: { title: string; description: string; };
    diningRoom: { title: string; description: string; };
  };
}

interface ImageCarouselProps {
  dict: CarouselDictionary;
}

export default function ImageCarousel({ dict }: ImageCarouselProps) {
  if (!dict?.carousel) {
    return null;
  }

  const images = [
    {
      src: '/images/cocina3.jpeg',
      title: dict.carousel.kitchen?.title,
      description: dict.carousel.kitchen?.description
    },
    {
      src: '/images/sala.jpeg',
      title: dict.carousel.livingRoom?.title,
      description: dict.carousel.livingRoom?.description
    },
    {
      src: '/images/vista-casa-exterior.jpeg',
      title: dict.carousel.exterior?.title,
      description: dict.carousel.exterior?.description
    },
    {
      src: '/images/dormitorio.jpeg',
      title: dict.carousel.bedroom?.title,
      description: dict.carousel.bedroom?.description
    },
    {
      src: '/images/corredor.jpeg',
      title: dict.carousel.closet?.title,
      description: dict.carousel.closet?.description
    },
    {
      src: '/images/ima5.png',
      title: dict.carousel.pool?.title,
      description: dict.carousel.pool?.description
    },
    {
      src: '/images/hall.jpeg',
      title: dict.carousel.hall?.title,
      description: dict.carousel.hall?.description
    },
    {
      src: '/images/estar.jpeg',
      title: dict.carousel.gallery?.title,
      description: dict.carousel.gallery?.description
    },
    {
      src: '/images/baño_suite.jpg',
      title: dict.carousel.bathroom?.title,
      description: dict.carousel.bathroom?.description
    },
    {
      src: '/images/comedor.jpeg',
      title: dict.carousel.diningRoom?.title,
      description: dict.carousel.diningRoom?.description
    }
  ];

  return (
    <div id="home-section" className="relative w-full h-[calc(100vh-4rem)]">
      <Swiper
        {...({} as CustomSwiperProps)}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: (index: number, className: string): string => {
            return `<span class="${className} bg-secondary-green"></span>`;
          }
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        className="w-full h-full"
        loop={true}
        speed={1000}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.title || ''}
                fill
                sizes="100vw"
                quality={100}
                className="object-cover"
                priority={index < 3}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)'
                }}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 z-20 p-8"
              >
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
                    {image.title}
                  </h2>
                  <p className="text-base md:text-lg text-gray-200">
                    {image.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 