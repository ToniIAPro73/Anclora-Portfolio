'use client';

import { useHomepageController } from '@/hooks/use-homepage-controller';
import { FaqsSection } from '@/components/sections/faqs-section';
import { ResidencesSection } from '@/components/sections/residences-section';
import { ContactSection } from '@/components/sections/contact-section';
import { InvestmentSection } from '@/components/sections/investment-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { LocationSection } from '@/components/sections/location-section';
import { FooterSection } from '@/components/sections/footer-section';
import { BlueprintSection } from '@/components/sections/blueprint-section';
import { TopNav } from '@/components/sections/top-nav';
import { HeroSection } from '@/components/sections/hero-section';
import { FloatingSidebar } from '@/components/sections/floating-sidebar';

export default function AndratxAzureResidencies() {
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

  return (
    <div className="min-h-screen ap-surface-ivory overflow-x-hidden">
      <TopNav
        lang={lang}
        tNav={t.nav}
        onToggleLanguage={toggleLanguage}
        onScrollToSection={scrollToSection}
      />

      <HeroSection t={t.hero} onScrollToSection={scrollToSection} />
      <FloatingSidebar lang={lang} />

      <BlueprintSection t={t.blueprint} />
      <InvestmentSection t={t.investment} lang={lang} />
      <FeaturesSection t={t.features} lang={lang} />

      <GallerySection
        t={t.gallery}
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
        onRequestInfo={() => scrollToSection('contact')}
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

      <FooterSection t={t.footer} lang={lang} />
    </div>
  );
}





