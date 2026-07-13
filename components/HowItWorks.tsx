'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  CalendarCheck,
  Package,
  ArrowDownUp,
  WashingMachine,
  Wind,
  Shirt,
  ClipboardCheck,
  Gift,
  Truck,
} from 'lucide-react';

const steps = [
  { icon: CalendarCheck, label: 'Schedule Pickup', desc: 'Book online or call us' },
  { icon: Package, label: 'Collection', desc: 'We collect from your door' },
  { icon: ArrowDownUp, label: 'Sorting', desc: 'Garments sorted by type' },
  { icon: WashingMachine, label: 'Machine Wash', desc: 'Industrial precision wash' },
  { icon: Wind, label: 'Drying', desc: 'Temperature-controlled dry' },
  { icon: Shirt, label: 'Steam Iron', desc: 'Professional finishing' },
  { icon: ClipboardCheck, label: 'Quality Check', desc: 'Multi-point inspection' },
  { icon: Gift, label: 'Packaging', desc: 'Neatly packed & sealed' },
  { icon: Truck, label: 'Door Delivery', desc: 'Delivered to your doorstep' },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" ref={ref} className="section-lg" style={{ background: 'var(--background)', overflow: 'hidden' }}>
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
            Our Process
          </div>
          <h2 className="section-title">
            How It{' '}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From pickup to delivery, every step is designed for perfection.
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block relative" style={{ paddingBottom: '24px' }}>
          {/* Connecting Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
            style={{
              position: 'absolute',
              top: '48px',
              left: '5%',
              right: '5%',
              height: '2px',
              background: 'var(--gradient)',
              transformOrigin: 'left',
              opacity: 0.3,
            }}
          />

          <div className="grid grid-cols-9" style={{ gap: '8px' }}>
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex flex-col items-center text-center relative"
                >
                  {/* Step Number */}
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'var(--gradient)',
                      color: 'white',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '12px',
                      fontFamily: 'var(--font-heading)',
                      boxShadow: '0 0 16px rgba(31,78,121,0.2)',
                    }}
                  >
                    {i + 1}
                  </div>

                  {/* Icon */}
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                      boxShadow: 'var(--shadow-md)',
                    }}
                  >
                    <Icon size={24} style={{ color: 'var(--primary)' }} />
                  </div>

                  <h4 style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--heading)',
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '4px',
                  }}>
                    {step.label}
                  </h4>
                  <p style={{ fontSize: '0.7rem', color: 'var(--paragraph-light)' }}>
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden relative" style={{ paddingLeft: '40px' }}>
          {/* Vertical Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '19px',
              width: '2px',
              background: 'var(--gradient)',
              transformOrigin: 'top',
              opacity: 0.3,
            }}
          />

          <div className="flex flex-col" style={{ gap: '32px' }}>
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="flex items-start relative"
                  style={{ gap: '16px' }}
                >
                  {/* Number dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-40px',
                      top: '4px',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'var(--gradient)',
                      color: 'white',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-heading)',
                      zIndex: 2,
                    }}
                  >
                    {i + 1}
                  </div>

                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} style={{ color: 'var(--primary)' }} />
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: 'var(--heading)',
                      fontFamily: 'var(--font-heading)',
                      marginBottom: '2px',
                    }}>
                      {step.label}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--paragraph-light)' }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
