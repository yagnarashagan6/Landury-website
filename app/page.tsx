'use client';

import dynamic from 'next/dynamic';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollProgress from '@/components/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

// Dynamic imports for code splitting — heavy sections loaded lazily
const Services = dynamic(() => import('@/components/Services'));
const Machines = dynamic(() => import('@/components/Machines'), { ssr: false });
const HowItWorks = dynamic(() => import('@/components/HowItWorks'));
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'));
const B2BSolutions = dynamic(() => import('@/components/B2BSolutions'));
const B2CSection = dynamic(() => import('@/components/B2CSection'));
const Delivery = dynamic(() => import('@/components/Delivery'));
const Pricing = dynamic(() => import('@/components/Pricing'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const Contact = dynamic(() => import('@/components/Contact'));

export default function Home() {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Machines />
        <HowItWorks />
        <WhyChooseUs />
        <B2BSolutions />
        <B2CSection />
        <Delivery />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {/* Mobile Sticky CTA */}
      <div className="mobile-cta">
        <button
          className="btn-primary"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={() => {
            const el = document.querySelector('#contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Book Pickup
          <ArrowRight size={16} />
        </button>
      </div>
    </SmoothScroll>
  );
}
