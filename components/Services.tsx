'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  WashingMachine,
  Wind,
  Shirt,
  Sparkles,
  LayoutGrid,
  CloudSun,
  Heart,
  Building2,
  Cross,
  Hotel,
} from 'lucide-react';

const services = [
  { icon: WashingMachine, title: 'Regular Wash', desc: 'Complete wash cycle with premium detergent and fabric softener' },
  { icon: Wind, title: 'Wash + Dry + Fold', desc: 'Full service — washed, dried, and neatly folded' },
  { icon: Shirt, title: 'Steam Iron', desc: 'Professional steam finishing for crisp, wrinkle-free results' },
  { icon: Sparkles, title: 'Premium Dry Cleaning', desc: 'Delicate garment care using advanced dry cleaning technology' },
  { icon: LayoutGrid, title: 'Curtains', desc: 'Heavy curtain cleaning with deep dust and stain removal' },
  { icon: CloudSun, title: 'Blankets', desc: 'Bulky blanket and comforter washing with industrial machines' },
  { icon: Heart, title: 'Wedding Dresses', desc: 'Gentle, specialized cleaning for precious wedding attire' },
  { icon: Building2, title: 'Corporate Uniforms', desc: 'Bulk corporate uniform cleaning with fast turnaround' },
  { icon: Cross, title: 'Hospital Linen', desc: 'Sterilized hospital linen service meeting hygiene standards' },
  { icon: Hotel, title: 'Hotel Laundry', desc: 'Professional hotel linen and towel laundering service' },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={ref} className="section-lg" style={{ background: 'var(--background)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '64px' }}
        >
          <div className="section-label" style={{ margin: '0 auto 24px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
            Our Services
          </div>
          <h2 className="section-title">
            Professional Laundry{' '}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Smart cleaning solutions for homes and businesses. Every garment receives
            the care it deserves.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" style={{ gap: '20px' }}>
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass-card gradient-border group"
                style={{
                  padding: '32px 24px',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Animated background gradient on hover */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(31,78,121,0.03), rgba(59,130,246,0.03))',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  }}
                  className="group-hover:opacity-100"
                />

                <div className="relative z-10">
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: 'rgba(31,78,121,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      transition: 'all 0.4s ease',
                    }}
                    className="group-hover:scale-110"
                  >
                    <Icon
                      size={24}
                      style={{ color: 'var(--primary)', transition: 'transform 0.4s ease' }}
                      className="group-hover:rotate-12"
                    />
                  </div>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--heading)',
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '8px',
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--paragraph)',
                    lineHeight: 1.6,
                  }}>
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
