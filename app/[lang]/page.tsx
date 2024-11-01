import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/i18n.config'
import ImageCarousel from '@/components/ImageCarousel';
import PropertyFeatures from '@/components/PropertyFeatures';
import PropertyVideo from '@/components/PropertyVideo';
import LocationSection from '@/components/LocationSection';
import PropertyDescription from '@/components/PropertyDescription';
import PropertyDetails from '@/components/PropertyDetails';
import PropertyGallery from '@/components/PropertyGallery';
import ContactButton from '@/components/ContactButton';
import ContactSection from '@/components/ContactSection';

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen">
      <ImageCarousel dict={dict} />
      <PropertyDescription dict={dict} />
      <ContactButton dict={dict} />
      <PropertyFeatures dict={dict} />
      <PropertyGallery dict={dict} />
      <ContactButton dict={dict} />
      <PropertyVideo dict={dict} />
      <PropertyDetails dict={dict} />
      <ContactButton dict={dict} />
      <LocationSection dict={dict} />
      <ContactSection dict={dict} />
    </main>
  );
} 