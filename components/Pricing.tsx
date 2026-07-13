'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight, Star } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '49',
    unit: '/kg',
    desc: 'Perfect for everyday laundry needs',
    features: [
      'Wash + Dry + Fold',
      'Standard Detergent',
      '48-Hour Delivery',
      'Doorstep Pickup',
      'Basic Packaging',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: '79',
    unit: '/kg',
    desc: 'For those who want the best care',
    features: [
      'Everything in Basic',
      'Premium Detergent & Softener',
      '24-Hour Express Delivery',
      'Steam Iron Finish',
      'Premium Packaging',
      'Fabric Conditioner',
      'Stain Treatment',
    ],
    popular: true,
  },
  {
    name: 'Business',
    price: '₹ Custom',
    unit: '',
    desc: 'Tailored solutions for enterprises',
    features: [
      'Everything in Premium',
      'Monthly Contract Pricing',
      'Dedicated Account Manager',
      'Priority Pickup Schedule',
      'Invoice Billing',
      'Volume Discounts',
      'Custom SLA',
    ],
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" ref={ref} className="section-lg" style={{ background: 'var(--surface)' }}>
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
            Pricing
          </div>
          <h2 className="section-title">
            Simple, Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Choose a plan that fits your needs. No hidden charges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '24px', maxWidth: '960px', margin: '0 auto' }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden ${plan.popular ? '' : 'glass-card'}`}
              style={{
                padding: '36px 28px',
                borderRadius: 'var(--radius-lg)',
                background: plan.popular
                  ? 'linear-gradient(135deg, #1F4E79, #2563EB)'
                  : undefined,
                color: plan.popular ? 'white' : undefined,
                border: plan.popular ? 'none' : undefined,
                boxShadow: plan.popular
                  ? '0 16px 48px rgba(31,78,121,0.25)'
                  : undefined,
                transform: plan.popular ? 'scale(1.02)' : undefined,
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="flex items-center" style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  gap: '4px',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255,255,255,0.2)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                }}>
                  <Star size={12} fill="currentColor" />
                  Popular
                </div>
              )}

              <h3 style={{
                fontSize: '1rem',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                marginBottom: '8px',
                color: plan.popular ? 'white' : 'var(--heading)',
              }}>
                {plan.name}
              </h3>
              <p style={{
                fontSize: '0.8rem',
                opacity: plan.popular ? 0.8 : 1,
                color: plan.popular ? 'rgba(255,255,255,0.8)' : 'var(--paragraph)',
                marginBottom: '20px',
              }}>
                {plan.desc}
              </p>

              <div className="flex items-baseline" style={{ gap: '4px', marginBottom: '28px' }}>
                <span style={{
                  fontSize: plan.unit ? '0.85rem' : '0',
                  fontWeight: 500,
                  opacity: 0.7,
                }}>
                  ₹
                </span>
                <span style={{
                  fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1,
                }}>
                  {plan.price}
                </span>
                <span style={{
                  fontSize: '0.85rem',
                  opacity: 0.6,
                }}>
                  {plan.unit}
                </span>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center" style={{ gap: '10px', fontSize: '0.8rem' }}>
                    <Check size={16} style={{
                      color: plan.popular ? 'rgba(255,255,255,0.9)' : 'var(--primary)',
                      flexShrink: 0,
                    }} />
                    <span style={{ opacity: plan.popular ? 0.9 : 1 }}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={plan.popular ? 'btn-secondary' : 'btn-primary'}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  ...(plan.popular ? {
                    background: 'white',
                    color: 'var(--primary)',
                    borderColor: 'white',
                  } : {}),
                }}
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {plan.name === 'Business' ? 'Contact Sales' : 'Get Started'}
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
