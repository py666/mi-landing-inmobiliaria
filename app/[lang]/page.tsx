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
import LanguageSelector from '@/components/LanguageSelector';
import ContactSection from '@/components/ContactSection';

export default async function Home({
  params
}: {
  params: { lang: Locale }
}) {
  const lang = await Promise.resolve(params.lang);
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen relative bg-background text-text transition-colors duration-300">
      <LanguageSelector />
      
      <section className="relative">
        <ImageCarousel dict={dict} />
      </section>

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