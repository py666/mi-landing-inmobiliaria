'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PropertyGalleryProps {
  dict: {
    gallery: {
      title: string;
      images: {
        mainView: { title: string; description: string; };
        pondView: { title: string; description: string; };
        sideView: { title: string; description: string; };
        frontView: { title: string; description: string; };
        lateralView: { title: string; description: string; };
        poolArea: { title: string; description: string; };
        kitchen: { title: string; description: string; };
        kitchenDetail: { title: string; description: string; };
        kitchenView: { title: string; description: string; };
        fullKitchen: { title: string; description: string; };
        kitchenDining: { title: string; description: string; };
        mainDining: { title: string; description: string; };
        diningArea: { title: string; description: string; };
        corridor: { title: string; description: string; };
        livingArea: { title: string; description: string; };
        garage: { title: string; description: string; };
        mainLiving: { title: string; description: string; };
        livingRoom: { title: string; description: string; };
        additionalLiving: { title: string; description: string; };
        masterBath: { title: string; description: string; };
        exteriorView: { title: string; description: string; };
        additionalView: { title: string; description: string; };
        interiorView: { title: string; description: string; };
        finalDetails: { title: string; description: string; };
      };
    };
  };
}

export default function PropertyGallery({ dict }: PropertyGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: '/images/casa-landing.jpeg',
      title: dict.gallery.images.mainView.title,
      description: dict.gallery.images.mainView.description
    },
    {
      src: '/images/casa2.jpeg',
      title: dict.gallery.images.pondView.title,
      description: dict.gallery.images.pondView.description
    },
    {
      src: '/images/casacostado.jpeg',
      title: dict.gallery.images.sideView.title,
      description: dict.gallery.images.sideView.description
    },
    {
      src: '/images/frente-casa.jpeg',
      title: dict.gallery.images.frontView.title,
      description: dict.gallery.images.frontView.description
    },
    {
      src: '/images/costado-casa.jpeg',
      title: dict.gallery.images.lateralView.title,
      description: dict.gallery.images.lateralView.description
    },
    {
      src: '/images/piscina-casa.jpeg',
      title: dict.gallery.images.poolArea.title,
      description: dict.gallery.images.poolArea.description
    },
    {
      src: '/images/cocina.jpeg',
      title: dict.gallery.images.kitchen.title,
      description: dict.gallery.images.kitchen.description
    },
    {
      src: '/images/cocina1.jpeg',
      title: dict.gallery.images.kitchenDetail.title,
      description: dict.gallery.images.kitchenDetail.description
    },
    {
      src: '/images/cocina2.jpeg',
      title: dict.gallery.images.kitchenView.title,
      description: dict.gallery.images.kitchenView.description
    },
    {
      src: '/images/cocina3.jpeg',
      title: dict.gallery.images.fullKitchen.title,
      description: dict.gallery.images.fullKitchen.description
    },
    {
      src: '/images/cocina5.jpeg',
      title: dict.gallery.images.kitchenDining.title,
      description: dict.gallery.images.kitchenDining.description
    },
    {
      src: '/images/comedor.jpeg',
      title: dict.gallery.images.mainDining.title,
      description: dict.gallery.images.mainDining.description
    },
    {
      src: '/images/comedor2.jpg',
      title: dict.gallery.images.diningArea.title,
      description: dict.gallery.images.diningArea.description
    },
    {
      src: '/images/corredor.jpeg',
      title: dict.gallery.images.corridor.title,
      description: dict.gallery.images.corridor.description
    },
    {
      src: '/images/estar.jpeg',
      title: dict.gallery.images.livingArea.title,
      description: dict.gallery.images.livingArea.description
    },
    {
      src: '/images/garage.jpeg',
      title: dict.gallery.images.garage.title,
      description: dict.gallery.images.garage.description
    },
    {
      src: '/images/sala.jpeg',
      title: dict.gallery.images.mainLiving.title,
      description: dict.gallery.images.mainLiving.description
    },
    {
      src: '/images/sala1.jpeg',
      title: dict.gallery.images.livingRoom.title,
      description: dict.gallery.images.livingRoom.description
    },
    {
      src: '/images/sala2.jpeg',
      title: dict.gallery.images.additionalLiving.title,
      description: dict.gallery.images.additionalLiving.description
    },
    {
      src: '/images/baño_suite.jpg',
      title: dict.gallery.images.masterBath.title,
      description: dict.gallery.images.masterBath.description
    },
    {
      src: '/images/vista-casa-exterior.jpeg',
      title: dict.gallery.images.exteriorView.title,
      description: dict.gallery.images.exteriorView.description
    },
    {
      src: '/images/ima5.png',
      title: dict.gallery.images.additionalView.title,
      description: dict.gallery.images.additionalView.description
    },
    {
      src: '/images/ima9.jpeg',
      title: dict.gallery.images.interiorView.title,
      description: dict.gallery.images.interiorView.description
    },
    {
      src: '/images/ima10.jpg',
      title: dict.gallery.images.finalDetails.title,
      description: dict.gallery.images.finalDetails.description
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          {dict.gallery.title}
        </h2>

        <Swiper
          modules={[Navigation, Grid, Pagination]}
          navigation
          pagination={{ 
            clickable: true,
            dynamicBullets: true
          }}
          grid={{
            rows: 2,
            fill: "row"
          }}
          spaceBetween={20}
          slidesPerView={4}
          className="h-[600px]"
          breakpoints={{
            320: {
              slidesPerView: 1,
              grid: { rows: 2 }
            },
            640: {
              slidesPerView: 2,
              grid: { rows: 2 }
            },
            768: {
              slidesPerView: 3,
              grid: { rows: 2 }
            },
            1024: {
              slidesPerView: 4,
              grid: { rows: 2 }
            }
          }}
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal para vista ampliada */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-6xl aspect-[16/9]">
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].title}
              fill
              className="object-contain"
              quality={100}
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
} 