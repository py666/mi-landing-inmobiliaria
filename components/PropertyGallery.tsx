'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ImageZoom from './ImageZoom';
import { motion, AnimatePresence } from 'framer-motion';
import type { SwiperProps } from 'swiper/react';

interface CustomSwiperProps extends SwiperProps {
  onSwiper?: (swiper: SwiperType) => void;
}

interface GalleryImage {
  title: string;
  description: string;
}

interface GalleryImages {
  mainView: GalleryImage;
  pondView: GalleryImage;
  sideView: GalleryImage;
  frontView: GalleryImage;
  lateralView: GalleryImage;
  bedroom: GalleryImage;
  closet: GalleryImage;
  pool: GalleryImage;
  hall: GalleryImage;
  gallery: GalleryImage;
  bathroom: GalleryImage;
  diningRoom: GalleryImage;
  livingRoom: GalleryImage;
  finalDetails: GalleryImage;
}

interface Gallery {
  title: string;
  subtitle: string;
  images: GalleryImages;
}

interface PropertyGalleryProps {
  dict: {
    gallery: Gallery;
  }
}

export default function PropertyGallery({ dict }: PropertyGalleryProps) {
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showZoom, setShowZoom] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!dict?.gallery?.images) {
    return null;
  }

  const galleryImages = [
    {
      src: '/images/cocina3.jpeg',
      title: dict.gallery.images.finalDetails?.title,
      description: dict.gallery.images.finalDetails?.description
    },
    {
      src: '/images/sala.jpeg',
      title: dict.gallery.images.livingRoom?.title,
      description: dict.gallery.images.livingRoom?.description
    },
    {
      src: '/images/vista-casa-exterior.jpeg',
      title: dict.gallery.images.frontView?.title,
      description: dict.gallery.images.frontView?.description
    },
    {
      src: '/images/dormitorio.jpeg',
      title: dict.gallery.images.bedroom?.title,
      description: dict.gallery.images.bedroom?.description
    },
    {
      src: '/images/corredor.jpeg',
      title: dict.gallery.images.closet?.title,
      description: dict.gallery.images.closet?.description
    },
    {
      src: '/images/ima5.png',
      title: dict.gallery.images.pool?.title,
      description: dict.gallery.images.pool?.description
    },
    {
      src: '/images/hall.jpeg',
      title: dict.gallery.images.hall?.title,
      description: dict.gallery.images.hall?.description
    },
    {
      src: '/images/estar.jpeg',
      title: dict.gallery.images.gallery?.title,
      description: dict.gallery.images.gallery?.description
    },
    {
      src: '/images/baño_suite.jpg',
      title: dict.gallery.images.bathroom?.title,
      description: dict.gallery.images.bathroom?.description
    },
    {
      src: '/images/comedor.jpeg',
      title: dict.gallery.images.diningRoom?.title,
      description: dict.gallery.images.diningRoom?.description
    }
  ];

  return (
    <section id="gallery-section" className="py-16 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-light-green mb-4">
            {dict.gallery.title}
          </h2>
          <p className="text-secondary-green text-lg">
            {dict.gallery.subtitle}
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Swiper Principal */}
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => setMainSwiper(swiper)}
            className="w-full aspect-[16/9] rounded-lg overflow-hidden"
            {...({} as any)}
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => {
                    setSelectedImage(index);
                    setShowZoom(true);
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.title || ''}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    className="object-cover"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm md:text-base">{image.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Miniaturas */}
          {!isMobile && (
            <div className="grid grid-cols-5 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-video cursor-pointer rounded-lg overflow-hidden hover:ring-2 hover:ring-secondary-green transition-all"
                  onClick={() => mainSwiper?.slideTo(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.title || ''}
                    fill
                    sizes="(max-width: 768px) 25vw, 20vw"
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Modal de Zoom */}
        <AnimatePresence>
          {showZoom && selectedImage !== null && (
            <ImageZoom
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].title || ''}
              onClose={() => {
                setShowZoom(false);
                setSelectedImage(null);
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 