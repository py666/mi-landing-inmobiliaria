'use client';

import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/LoadingSpinner';
import NavBar from '@/components/NavBar';
import ImageCarousel from '@/components/ImageCarousel';
import PropertyFeatures from '@/components/PropertyFeatures';
import PropertyDescription from '@/components/PropertyDescription';

const PropertyVideo = dynamic(() => import('@/components/PropertyVideo'), {
    loading: () => <LoadingSpinner />,
    ssr: false
});

const PropertyDetails = dynamic(() => import('@/components/PropertyDetails'));
const PropertyGallery = dynamic(() => import('@/components/PropertyGallery'));
const LocationSection = dynamic(() => import('@/components/LocationSection'));
const ContactSection = dynamic(() => import('@/components/ContactSection'));

export default function MainContent({ dict }: { dict: any }) {
    return (
        <main className="min-h-screen bg-primary-dark">
            <NavBar dict={dict} />
            <ImageCarousel dict={dict} />
            <PropertyFeatures dict={dict} />
            <PropertyDescription dict={dict} />
            <PropertyVideo dict={dict} />
            <PropertyDetails dict={dict} />
            <PropertyGallery dict={dict} />
            <LocationSection dict={dict} />
            <ContactSection dict={dict} />
        </main>
    );
} 