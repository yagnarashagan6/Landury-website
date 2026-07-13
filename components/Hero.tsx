'use client';

import { useRef, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import dynamic from 'next/dynamic';

const WashingMachine3D = dynamic(() => import('./WashingMachine3D'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full">
      <div className="animate-pulse-glow" style={{
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'var(--gradient-subtle)',
      }} />
    </div>
  ),
});

const stats = [
  { number: '1000+', label: 'Happy Customers' },
  { number: '99%', label: 'Fabric Safety' },
  { number: '24hrs', label: 'Fast Delivery' },
  { number: '20kg', label: 'Wash Capacity' },
];

const trustBadges = [
  'Government Authorized',
  'Fully Automated Machines',
  'On-Time Delivery',
  'Affordable Pricing',
];

function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
  return (
    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--heading)' }}>
      {target}{suffix}
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '72px',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 50%, #F0F7FF 100%)',
      }}
    >
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="animate-float-slow"
          style={{
            position: 'absolute',
            top: '10%',
            right: '15%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(31,78,121,0.06) 0%, transparent 70%)',
          }}
        />
        <motion.div
          className="animate-float"
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '5%',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
          }}
        />
        <motion.div
          className="animate-float-slow"
          style={{
            position: 'absolute',
            top: '40%',
            left: '30%',
            width: '150px',
            height: '150px',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            background: 'rgba(31,78,121,0.03)',
            animationDelay: '2s',
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '48px', minHeight: 'calc(100vh - 72px)' }}>
          {/* Left Content */}
          <div style={{ paddingTop: '40px', paddingBottom: '40px' }}>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
              Premium Automated Laundry Solutions
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '24px',
              }}
            >
              Precision in Every Wash.{' '}
              <span className="gradient-text">
                Excellence in Every Fold.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
                color: 'var(--paragraph)',
                lineHeight: 1.7,
                maxWidth: '520px',
                marginBottom: '32px',
              }}
            >
              Government Authorized Premium Laundry Service powered by fully automated
              industrial machines delivering unmatched fabric care with fast turnaround.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center"
              style={{ gap: '12px', marginBottom: '32px' }}
            >
              <a href="#contact" className="btn-primary">
                Book Pickup
                <ArrowRight size={18} />
              </a>
              <a href="#services" className="btn-secondary">
                <Play size={16} />
                View Services
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap"
              style={{ gap: '16px', marginBottom: '48px' }}
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center"
                  style={{ gap: '6px', fontSize: '0.8rem', color: 'var(--paragraph)' }}
                >
                  <CheckCircle2 size={14} style={{ color: 'var(--primary)' }} />
                  {badge}
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4"
              style={{ gap: '24px' }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <AnimatedCounter target={stat.number} />
                  <p style={{ fontSize: '0.8rem', color: 'var(--paragraph-light)', marginTop: '4px', fontFamily: 'var(--font-body)' }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative hidden lg:block"
            style={{ height: '600px' }}
          >
            <Suspense fallback={null}>
              <WashingMachine3D />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
