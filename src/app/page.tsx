'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useHomepageController } from '@/hooks/use-homepage-controller';
import { TopNav } from '@/components/sections/top-nav';
import { HeroSection } from '@/components/sections/hero-section';

const BlueprintSection = dynamic(() =>
  import('@/components/sections/blueprint-section').then((mod) => mod.BlueprintSection),
);
const InvestmentSection = dynamic(() =>
  import('@/components/sections/investment-section').then((mod) => mod.InvestmentSection),
);
const StorytellingSection = dynamic(() =>
  import('@/components/sections/storytelling-section').then((mod) => mod.StorytellingSection),
);
const FeaturesSection = dynamic(() =>
  import('@/components/sections/features-section').then((mod) => mod.FeaturesSection),
);
const GallerySection = dynamic(() =>
  import('@/components/sections/gallery-section').then((mod) => mod.GallerySection),
);
const ResidencesSection = dynamic(() =>
  import('@/components/sections/residences-section').then((mod) => mod.ResidencesSection),
);
const LocationSection = dynamic(() =>
  import('@/components/sections/location-section').then((mod) => mod.LocationSection),
);
const FaqsSection = dynamic(() => import('@/components/sections/faqs-section').then((mod) => mod.FaqsSection));
const ContactSection = dynamic(() =>
  import('@/components/sections/contact-section').then((mod) => mod.ContactSection),
);
const FooterSection = dynamic(() => import('@/components/sections/footer-section').then((mod) => mod.FooterSection));
const FloatingSidebar = dynamic(
  () => import('@/components/sections/floating-sidebar').then((mod) => mod.FloatingSidebar),
  { ssr: false },
);
const Toaster = dynamic(() => import('@/components/ui/toaster').then((mod) => mod.Toaster), { ssr: false });

export default function AndratxAzureResidences() {
  const [showDeferredSections, setShowDeferredSections] = useState(false);
  const {
    lang,
    t,
    toggleLanguage,
    scrollToSection,
    faqItems,
    residences,
    selectedUnit,
    setSelectedUnit,
    selectedGalleryImage,
    setSelectedGalleryImage,
    galleryCategory,
    setGalleryCategory,
    filteredImages,
    formData,
    setFormData,
    budgetValue,
    setBudgetValue,
    isSubmitting,
    isSuccess,
    setIsSuccess,
    handleSubmit,
    formatPrice,
    formatArea,
  } = useHomepageController();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const enableDeferredSections = () => {
      setShowDeferredSections(true);
      window.removeEventListener('scroll', enableDeferredSections);
      window.removeEventListener('touchstart', enableDeferredSections);
      window.removeEventListener('keydown', enableDeferredSections);
    };

    window.addEventListener('scroll', enableDeferredSections, { passive: true });
    window.addEventListener('touchstart', enableDeferredSections, { passive: true });
    window.addEventListener('keydown', enableDeferredSections);

    return () => {
      window.removeEventListener('scroll', enableDeferredSections);
      window.removeEventListener('touchstart', enableDeferredSections);
      window.removeEventListener('keydown', enableDeferredSections);
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    if (!showDeferredSections) {
      setShowDeferredSections(true);
    }
    scrollToSection(id);
  };

  return (
    <div className="min-h-screen ap-surface-ivory overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-md focus:bg-[#C5A059] focus:text-[#0F172A] focus:font-semibold"
      >
        {lang === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'}
      </a>
      <TopNav
        lang={lang}
        tNav={t.nav}
        onToggleLanguage={toggleLanguage}
        onScrollToSection={handleScrollToSection}
      />

      <main id="main-content">
        <HeroSection t={t.hero} onScrollToSection={handleScrollToSection} />

        {showDeferredSections && (
          <>
            <FloatingSidebar lang={lang} />

            <BlueprintSection t={t.blueprint} />
            <StorytellingSection t={t.storytelling} />
            <InvestmentSection t={t.investment} lang={lang} />
            <FeaturesSection t={t.features} lang={lang} />

            <GallerySection
              t={t.gallery}
              lang={lang}
              galleryCategory={galleryCategory}
              setGalleryCategory={setGalleryCategory}
              filteredImages={filteredImages}
              selectedGalleryImage={selectedGalleryImage}
              setSelectedGalleryImage={setSelectedGalleryImage}
            />

            <ResidencesSection
              t={t.residences}
              units={residences}
              selectedUnit={selectedUnit}
              onSelectUnit={setSelectedUnit}
              formatPrice={formatPrice}
              formatArea={formatArea}
              onRequestInfo={() => handleScrollToSection('contact')}
            />

            <LocationSection t={t.location} />

            <FaqsSection
              badge={t.faqs.badge}
              title={t.faqs.title}
              titleAccent={t.faqs.titleAccent}
              subtitle={t.faqs.subtitle}
              items={faqItems}
            />

            <ContactSection
              tContact={t.contact}
              tFooter={t.footer}
              lang={lang}
              formData={formData}
              setFormData={setFormData}
              budgetValue={budgetValue}
              setBudgetValue={setBudgetValue}
              formatPrice={formatPrice}
              isSubmitting={isSubmitting}
              isSuccess={isSuccess}
              setIsSuccess={setIsSuccess}
              handleSubmit={handleSubmit}
            />
          </>
        )}
      </main>

      {showDeferredSections && <FooterSection t={t.footer} lang={lang} />}
      {showDeferredSections && <Toaster />}
    </div>
  );
}





