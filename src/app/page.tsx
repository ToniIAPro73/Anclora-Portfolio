'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { FaqsSection } from '@/components/sections/faqs-section';
import { ResidencesSection } from '@/components/sections/residences-section';
import { ContactSection } from '@/components/sections/contact-section';
import { InvestmentSection } from '@/components/sections/investment-section';
import { FeaturesSection } from '@/components/sections/features-section';
import {
  Globe,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Play,
  Square,
  Building2,
  Wine,
  MapPinned,
  Anchor,
  Compass,
  CheckCircle2,
  ArrowRight,
  Menu,
  ExternalLink
} from 'lucide-react';
import { translations } from '@/data/translations';
import { galleryImages } from '@/data/gallery-images';
import { residenceUnits } from '@/data/residence-units';
import type { GalleryCategory, Language, LeadData } from '@/types';

// ============================================
// MAIN APP COMPONENT
// ============================================
export default function AndratxAzureResidencies() {
  const [lang, setLang] = useState<Language>('es');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<number | null>(null);
  const [galleryCategory, setGalleryCategory] = useState<GalleryCategory>('all');
  const [selectedUnit, setSelectedUnit] = useState(residenceUnits[0]);
  const [budgetValue, setBudgetValue] = useState([5000000]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [scrollPosition, setScrollPosition] = useState<'top' | 'middle' | 'bottom'>('top');

  const { toast } = useToast();

  const t = translations[lang];

  // Track scroll position for smart scroll buttons
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      if (scrollTop < 100) {
        setScrollPosition('top');
      } else if (scrollTop + windowHeight >= docHeight - 100) {
        setScrollPosition('bottom');
      } else {
        setScrollPosition('middle');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load saved lead data on mount using lazy initialization
  const getInitialFormData = useCallback(() => {
    const defaults = {
      name: '',
      email: '',
      phone: '',
      interest: 'investment' as const,
      message: '',
    };
    if (typeof window === 'undefined') return defaults;
    const savedData = localStorage.getItem('anclora_lead_data');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        return {
          name: parsed.name || '',
          email: parsed.email || '',
          phone: parsed.phone || '',
          interest: parsed.interest || 'investment',
          message: parsed.message || '',
        };
      } catch {
        return defaults;
      }
    }
    return defaults;
  }, []);

  const [formData, setFormData] = useState(getInitialFormData);

  // Form validation
  const validateForm = () => {
    if (!formData.name.trim()) return false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return false;
    if (!formData.phone.trim()) return false;
    return true;
  };

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: lang === 'es' ? 'Error de validación' : 'Validation error',
        description: lang === 'es' ? 'Por favor complete todos los campos correctamente.' : 'Please complete all fields correctly.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Save to localStorage
    const leadData: LeadData = {
      ...formData,
      budget: budgetValue[0],
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('anclora_lead_data', JSON.stringify(leadData));

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: t.contact.form.success,
      description: t.contact.form.successMessage,
      className: 'bg-[#0F172A] text-[#F8F5F2] border-[#C5A059]',
    });
  };

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Scroll up/down functions
  const scrollUp = () => {
    window.scrollBy({ top: -window.innerHeight * 0.8, behavior: 'smooth' });
  };

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(lang === 'es' ? 'es-ES' : 'en-US', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Filter gallery images
  const filteredImages = galleryCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === galleryCategory);

  const faqItems = [1, 2, 3, 4, 5].map((num) => ({
    question: t.faqs[`q${num}` as keyof typeof t.faqs] as string,
    answer: t.faqs[`a${num}` as keyof typeof t.faqs] as string,
  }))

  return (
    <div className="min-h-screen ap-surface-ivory overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[rgba(15,23,42,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="/logo.png" 
                alt="Anclora Private Estates" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <span className="font-serif text-xl font-semibold tracking-tight">Anclora</span>
                <span className="font-script text-[#C5A059] text-base ml-1">Private Estates</span>
              </div>
            </motion.div>

            {/* Right Side: Contact Button & Menu */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <button
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className="flex items-center gap-1.5 text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{lang.toUpperCase()}</span>
              </button>
              
              {/* Contact Button */}
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-[#C5A059] hover:bg-[#A8893D] text-[#0F172A] font-medium"
              >
                {t.nav.contact}
              </Button>
              
              {/* Menu Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0F172A] text-[#F8F5F2] hover:bg-[#1E293B] transition-colors"
                >
                  <span className="text-sm font-medium">{lang === 'es' ? 'Menú' : 'Menu'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Elegant Dropdown Menu */}
                <AnimatePresence>
                  {mobileMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-56 py-2 bg-[#FAF9F6] rounded-xl shadow-xl border border-[rgba(15,23,42,0.08)] overflow-hidden"
                    >
                      {Object.entries(t.nav).filter(([key]) => key !== 'contact').map(([key, label], index) => (
                        <motion.button
                          key={key}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => scrollToSection(key)}
                          className="w-full text-left px-5 py-3 text-sm font-medium text-[#64748B] hover:text-[#0F172A] hover:bg-[rgba(197,160,89,0.08)] transition-colors flex items-center justify-between group"
                        >
                          <span>{label}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all text-[#C5A059]" />
                        </motion.button>
                      ))}
                      <div className="mt-2 pt-2 border-t border-[rgba(15,23,42,0.05)]">
                        <button
                          onClick={() => scrollToSection('contact')}
                          className="w-full text-left px-5 py-3 text-sm font-semibold text-[#C5A059] hover:bg-[rgba(197,160,89,0.1)] transition-colors"
                        >
                          {t.nav.contact}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur-to-Clear Animation */}
        <motion.div
          initial={{ filter: 'blur(20px)', scale: 1.05 }}
          animate={{ filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/images/hero/hero-daylight.jpg"
            alt="Anclora Private Estates"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Dark Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[rgba(15,23,42,0.5)] via-[rgba(15,23,42,0.4)] to-[rgba(15,23,42,0.7)]" />
        
        {/* Subtle Vignette Effect */}
        <div className="absolute inset-0 z-10" style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(15,23,42,0.3) 100%)'
        }} />

        {/* Content - Appears after 2s delay */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold leading-tight tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          >
            {t.hero.title}
            <br />
            <span className="text-[#C5A059] drop-shadow-[0_2px_10px_rgba(197,160,89,0.3)]">{t.hero.titleAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3 }}
            className="mt-8 text-lg sm:text-xl text-[rgba(248,245,242,0.9)] max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('residences')}
              className="bg-[#C5A059] hover:bg-[#D4B77A] text-[#0F172A] px-8 py-6 text-lg font-semibold shadow-[0_4px_30px_rgba(197,160,89,0.4)] transition-all hover:shadow-[0_6px_40px_rgba(197,160,89,0.5)]"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-[rgba(248,245,242,0.6)] text-[#F8F5F2] hover:bg-[rgba(248,245,242,0.1)] hover:border-[#F8F5F2] px-8 py-6 text-lg font-medium backdrop-blur-sm bg-[rgba(15,23,42,0.3)] transition-all"
            >
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <button
            onClick={() => scrollToSection('investment')}
            className="flex flex-col items-center gap-2 text-[rgba(248,245,242,0.7)] hover:text-[#F8F5F2] transition-colors"
          >
            <span className="text-sm font-medium text-[rgba(248,245,242,0.7)]">{t.hero.scrollText}</span>
            <ChevronDown className="w-5 h-5 animate-bounce text-[#C5A059]" />
          </button>
        </motion.div>
      </section>

      {/* Fixed Right Sidebar - Follow Us & Smart Scroll */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-6">
        {/* Follow Us Section */}
        <div className="flex flex-col items-center gap-4">
          <span 
            className="text-xs font-medium tracking-widest uppercase writing-mode-vertical text-[#64748B] hover:text-[#C5A059] transition-colors cursor-default"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            {lang === 'es' ? 'Síguenos' : 'Follow Us'}
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[#C5A059] to-transparent" />
          <div className="flex flex-col gap-3">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: '#C5A059' }}
              className="text-[#64748B] hover:text-[#C5A059] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: '#C5A059' }}
              className="text-[#64748B] hover:text-[#C5A059] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: '#C5A059' }}
              className="text-[#64748B] hover:text-[#C5A059] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-gradient-to-b from-transparent via-[#C5A059] to-transparent" />

        {/* Smart Scroll Buttons */}
        <div className="flex flex-col gap-2">
          {/* Scroll Up - Hidden at top */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: scrollPosition === 'top' ? 0 : 1, 
              scale: scrollPosition === 'top' ? 0.8 : 1 
            }}
            transition={{ duration: 0.2 }}
            onClick={scrollUp}
            className={`w-10 h-10 rounded-full border border-[rgba(197,160,89,0.3)] bg-[rgba(248,245,242,0.9)] backdrop-blur-sm flex items-center justify-center text-[#64748B] hover:text-[#C5A059] hover:border-[#C5A059] transition-all shadow-lg ${scrollPosition === 'top' ? 'pointer-events-none' : 'cursor-pointer'}`}
          >
            <ChevronLeft className="w-5 h-5 rotate-90" />
          </motion.button>
          
          {/* Scroll Down - Hidden at bottom */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: scrollPosition === 'bottom' ? 0 : 1, 
              scale: scrollPosition === 'bottom' ? 0.8 : 1 
            }}
            transition={{ duration: 0.2 }}
            onClick={scrollDown}
            className={`w-10 h-10 rounded-full border border-[rgba(197,160,89,0.3)] bg-[rgba(248,245,242,0.9)] backdrop-blur-sm flex items-center justify-center text-[#64748B] hover:text-[#C5A059] hover:border-[#C5A059] transition-all shadow-lg ${scrollPosition === 'bottom' ? 'pointer-events-none' : 'cursor-pointer'}`}
          >
            <ChevronLeft className="w-5 h-5 -rotate-90" />
          </motion.button>
        </div>
      </div>

      <InvestmentSection t={t.investment} lang={lang} />

      <FeaturesSection t={t.features} lang={lang} />

      {/* Gallery Section */}
      <section id="gallery" className="ap-section ap-surface-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-[rgba(197,160,89,0.2)] text-[#C5A059] text-sm font-medium mb-4"
            >
              {t.gallery.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-serif font-semibold"
            >
              {t.gallery.title} <span className="text-[#C5A059]">{t.gallery.titleAccent}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-[#94A3B8] max-w-2xl mx-auto"
            >
              {t.gallery.subtitle}
            </motion.p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {(Object.entries(t.gallery.categories) as [GalleryCategory, string][]).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setGalleryCategory(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  galleryCategory === key
                    ? 'bg-[#C5A059] text-[#0F172A]'
                    : 'bg-[rgba(248,245,242,0.1)] text-[#94A3B8] hover:text-[#F8F5F2]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                    index === 0 || index === 5 ? 'col-span-2 row-span-2' : ''
                  }`}
                  onClick={() => setSelectedGalleryImage(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full min-h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4">
                      <ExternalLink className="w-5 h-5 text-[#C5A059]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={selectedGalleryImage !== null} onOpenChange={() => setSelectedGalleryImage(null)}>
        <DialogContent className="max-w-5xl w-full bg-[#0F172A] border-[rgba(197,160,89,0.2)]">
          <DialogHeader>
            <DialogTitle className="text-[#C5A059] font-serif">
              {selectedGalleryImage !== null && filteredImages[selectedGalleryImage]?.alt}
            </DialogTitle>
          </DialogHeader>
          {selectedGalleryImage !== null && (
            <div className="relative">
              <img
                src={filteredImages[selectedGalleryImage]?.src}
                alt={filteredImages[selectedGalleryImage]?.alt}
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedGalleryImage(selectedGalleryImage > 0 ? selectedGalleryImage - 1 : filteredImages.length - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[rgba(15,23,42,0.8)] flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0F172A] transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setSelectedGalleryImage(selectedGalleryImage < filteredImages.length - 1 ? selectedGalleryImage + 1 : 0)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[rgba(15,23,42,0.8)] flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0F172A] transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <ResidencesSection
        t={t.residences}
        units={residenceUnits}
        selectedUnit={selectedUnit}
        onSelectUnit={setSelectedUnit}
        formatPrice={formatPrice}
        onRequestInfo={() => scrollToSection('contact')}
      />

      {/* Location Section */}
      <section id="location" className="ap-section ap-surface-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-[rgba(197,160,89,0.2)] text-[#C5A059] text-sm font-medium mb-4"
            >
              {t.location.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-serif font-semibold"
            >
              {t.location.title} <span className="text-[#C5A059]">{t.location.titleAccent}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-[#94A3B8] max-w-2xl mx-auto"
            >
              {t.location.subtitle}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden"
            >
              <img
                src="/images/location/aerial.png"
                alt="Port d'Andratx"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
              
              {/* Location markers */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="relative"
                >
                  <div className="w-8 h-8 rounded-full bg-[#C5A059] flex items-center justify-center animate-pulse" />
                  <div className="absolute inset-0 w-8 h-8 rounded-full bg-[#C5A059] animate-ping opacity-30" />
                </motion.div>
              </div>
            </motion.div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Anchor, title: t.location.highlights.marina, desc: t.location.highlights.marinaDesc },
                { icon: Wine, title: t.location.highlights.restaurants, desc: t.location.highlights.restaurantsDesc },
                { icon: Compass, title: t.location.highlights.beach, desc: t.location.highlights.beachDesc },
                { icon: MapPinned, title: t.location.highlights.airport, desc: t.location.highlights.airportDesc },
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-[#1E293B] rounded-xl border border-[rgba(197,160,89,0.1)]"
                >
                  <highlight.icon className="w-8 h-8 text-[#C5A059] mb-4" />
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-[#94A3B8]">{highlight.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      {/* Footer */}
      <footer className="bg-[#0F172A] text-[#F8F5F2] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Tagline */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Anclora Private Estates" 
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <span className="font-serif text-xl font-semibold">Anclora</span>
                  <span className="font-script text-[#C5A059] text-base ml-1">Private Estates</span>
                </div>
              </div>
              <p className="text-[#94A3B8] max-w-md">{t.footer.tagline}</p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">{lang === 'es' ? 'Contacto' : 'Contact'}</h4>
              <div className="space-y-2 text-sm text-[#94A3B8]">
                <p>{t.footer.address}</p>
                <p>{t.footer.city}, {t.footer.postcode}</p>
                <p>{t.footer.phone}</p>
                <p>{t.footer.email}</p>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">{lang === 'es' ? 'Legal' : 'Legal'}</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-[#94A3B8] hover:text-[#C5A059] transition-colors">{t.footer.legal}</a>
                <a href="#" className="block text-[#94A3B8] hover:text-[#C5A059] transition-colors">{t.footer.privacy}</a>
                <a href="#" className="block text-[#94A3B8] hover:text-[#C5A059] transition-colors">{t.footer.cookies}</a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[rgba(248,245,242,0.1)] text-center text-sm text-[#64748B]">
            {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}




