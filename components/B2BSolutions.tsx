'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Hotel,
  Cross,
  UtensilsCrossed,
  GraduationCap,
  Factory,
  Building2,
  FileText,
  IndianRupee,
  CalendarCheck,
  Headphones,
  Receipt,
} from 'lucide-react';

const industries = [
  { icon: Hotel, title: 'Hotels', desc: 'Linen, towels, and guest laundry' },
  { icon: Cross, title: 'Hospitals', desc: 'Sterilized medical linen' },
  { icon: UtensilsCrossed, title: 'Restaurants', desc: 'Tablecloths, napkins, uniforms' },
  { icon: GraduationCap, title: 'Schools', desc: 'Uniforms and institutional linen' },
  { icon: Factory, title: 'Factories', desc: 'Industrial workwear cleaning' },
  { icon: Building2, title: 'Corporate Offices', desc: 'Employee uniform service' },
];

const offerings = [
  { icon: FileText, label: 'Monthly Contracts' },
  { icon: IndianRupee, label: 'Bulk Pricing' },
  { icon: CalendarCheck, label: 'Pickup Schedule' },
  { icon: Headphones, label: 'Dedicated Support' },
  { icon: Receipt, label: 'Invoice Billing' },
];

export default function B2BSolutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-lg" style={{ background: 'var(--background)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '64px' }}
        >
          <div className="section-label" style={{ margin: '0 auto 24px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
            Business Solutions
          </div>
          <h2 className="section-title">
            Enterprise Laundry{' '}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Scalable laundry services tailored for businesses of all sizes.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6" style={{ gap: '16px', marginBottom: '48px' }}>
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card text-center"
                style={{ padding: '28px 16px' }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(31,78,121,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <Icon size={24} style={{ color: 'var(--primary)' }} />
                </div>
                <h3 style={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'var(--heading)',
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '4px',
                }}>
                  {industry.title}
                </h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--paragraph-light)' }}>
                  {industry.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Offerings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card flex flex-wrap items-center justify-center"
          style={{ padding: '32px', gap: '32px' }}
        >
          <p style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            color: 'var(--heading)',
            fontFamily: 'var(--font-heading)',
          }}>
            What We Offer:
          </p>
          {offerings.map((offer) => {
            const Icon = offer.icon;
            return (
              <div key={offer.label} className="flex items-center" style={{ gap: '8px' }}>
                <Icon size={16} style={{ color: 'var(--primary)' }} />
                <span style={{ fontSize: '0.8rem', color: 'var(--paragraph)', fontWeight: 500 }}>{offer.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
