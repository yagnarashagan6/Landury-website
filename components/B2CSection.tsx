'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shirt, CloudSun, BedDouble, LayoutGrid, Heart, Snowflake, GraduationCap, MapPin, Truck } from 'lucide-react';

const items = [
  { icon: Shirt, label: 'Everyday Wear' },
  { icon: CloudSun, label: 'Blankets' },
  { icon: BedDouble, label: 'Bedsheets' },
  { icon: LayoutGrid, label: 'Curtains' },
  { icon: Heart, label: 'Wedding Dresses' },
  { icon: Snowflake, label: 'Winter Wear' },
  { icon: GraduationCap, label: 'School Uniforms' },
];

export default function B2CSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-lg" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '64px' }}>
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="section-label">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
                For Households
              </div>
              <h2 className="section-title" style={{ marginBottom: '16px' }}>
                For Every{' '}
                <span className="gradient-text">Household</span>
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '40px' }}>
                From everyday laundry to specialty items, we handle it all with the same level of care and precision.
              </p>
            </motion.div>

            <div className="grid grid-cols-2" style={{ gap: '12px', marginBottom: '32px' }}>
              {items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                    className="flex items-center"
                    style={{
                      gap: '10px',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--heading)',
                    }}
                  >
                    <Icon size={18} style={{ color: 'var(--primary)' }} />
                    {item.label}
                  </motion.div>
                );
              })}
            </div>

            {/* Doorstep badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap"
              style={{ gap: '12px' }}
            >
              <div className="flex items-center" style={{
                gap: '8px',
                padding: '10px 20px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(31,78,121,0.06)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--primary)',
              }}>
                <MapPin size={14} />
                Doorstep Pickup
              </div>
              <div className="flex items-center" style={{
                gap: '8px',
                padding: '10px 20px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(31,78,121,0.06)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--primary)',
              }}>
                <Truck size={14} />
                Doorstep Delivery
              </div>
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              aspectRatio: '1',
              maxWidth: '480px',
              margin: '0 auto',
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(135deg, rgba(31,78,121,0.04), rgba(59,130,246,0.03))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div className="animate-float" style={{
              position: 'absolute',
              top: '10%',
              right: '10%',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'var(--gradient)',
              opacity: 0.06,
            }} />
            <div className="animate-float-slow" style={{
              position: 'absolute',
              bottom: '15%',
              left: '15%',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              border: '2px solid rgba(31,78,121,0.08)',
            }} />

            <div style={{
              textAlign: 'center',
              padding: '40px',
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'var(--gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                boxShadow: '0 0 50px rgba(31,78,121,0.15)',
              }}>
                <Shirt size={48} color="white" />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--heading)',
                marginBottom: '8px',
              }}>
                Fresh & Clean
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--paragraph)' }}>
                Every garment treated with care
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
