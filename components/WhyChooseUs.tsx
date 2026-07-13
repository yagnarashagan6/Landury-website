'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Shield,
  Cog,
  WashingMachine,
  Droplets,
  Flame,
  IndianRupee,
  Truck,
  FileText,
  ClipboardCheck,
  Users,
} from 'lucide-react';

const features = [
  { icon: Shield, label: 'Government Authorized' },
  { icon: Cog, label: '100% Automated Process' },
  { icon: WashingMachine, label: 'Industrial Machines' },
  { icon: Droplets, label: 'Premium Detergents' },
  { icon: Flame, label: 'Steam Sanitization' },
  { icon: IndianRupee, label: 'Affordable Pricing' },
  { icon: Truck, label: 'Door Delivery' },
  { icon: FileText, label: 'Corporate Contracts' },
  { icon: ClipboardCheck, label: 'Quality Inspection' },
  { icon: Users, label: 'Professional Staff' },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="section-lg" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '64px' }}>
          {/* Left — Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '1',
                maxWidth: '480px',
                margin: '0 auto',
                borderRadius: 'var(--radius-xl)',
                background: 'linear-gradient(135deg, rgba(31,78,121,0.06), rgba(59,130,246,0.04))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Abstract shapes */}
              <div className="animate-float" style={{
                position: 'absolute',
                top: '15%',
                left: '15%',
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'var(--gradient)',
                opacity: 0.1,
                transform: 'rotate(45deg)',
              }} />
              <div className="animate-float-slow" style={{
                position: 'absolute',
                bottom: '20%',
                right: '20%',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'var(--gradient)',
                opacity: 0.08,
              }} />
              <div className="animate-float" style={{
                position: 'absolute',
                top: '50%',
                right: '15%',
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                border: '2px solid rgba(31,78,121,0.1)',
              }} />

              {/* Center emblem */}
              <div style={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                background: 'var(--gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 60px rgba(31,78,121,0.2)',
              }}>
                <div style={{
                  textAlign: 'center',
                  color: 'white',
                }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', lineHeight: 1 }}>10+</div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 500, opacity: 0.9, letterSpacing: '0.05em' }}>YEARS</div>
                  <div style={{ fontSize: '0.65rem', opacity: 0.8 }}>OF EXCELLENCE</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Features */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="section-label">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
                Why Choose Us
              </div>
              <h2 className="section-title" style={{ marginBottom: '16px' }}>
                Trusted by{' '}
                <span className="gradient-text">Thousands</span>
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '40px' }}>
                We combine industrial-grade machinery with meticulous care to deliver
                results that exceed expectations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '16px' }}>
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                    className="flex items-center"
                    style={{
                      gap: '12px',
                      padding: '14px 16px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border)',
                      background: 'var(--surface)',
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                    }}
                    whileHover={{
                      x: 4,
                      borderColor: 'rgba(31,78,121,0.2)',
                      boxShadow: '0 4px 16px rgba(31,78,121,0.06)',
                    }}
                  >
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(31,78,121,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={18} style={{ color: 'var(--primary)' }} />
                    </div>
                    <span style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--heading)',
                      fontFamily: 'var(--font-heading)',
                    }}>
                      {feature.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
