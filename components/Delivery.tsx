'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, WashingMachine, ClipboardCheck, Truck, Clock, Zap, Calendar } from 'lucide-react';

const timeline = [
  { icon: MapPin, label: 'Pickup', desc: 'Collected from your door' },
  { icon: WashingMachine, label: 'Cleaning', desc: 'Industrial precision wash' },
  { icon: ClipboardCheck, label: 'Quality Check', desc: 'Thorough inspection' },
  { icon: Truck, label: 'Delivery', desc: 'Back to your doorstep' },
];

export default function Delivery() {
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
            Delivery
          </div>
          <h2 className="section-title">
            Door-to-Door{' '}
            <span className="gradient-text">Service</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Seamless pickup and delivery — we handle the logistics so you don&apos;t have to.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '48px' }}>
          {/* Left — Timeline */}
          <div>
            <div className="relative" style={{ paddingLeft: '48px' }}>
              {/* Vertical line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: '23px',
                  width: '2px',
                  background: 'var(--gradient)',
                  transformOrigin: 'top',
                  opacity: 0.3,
                }}
              />

              <div className="flex flex-col" style={{ gap: '40px' }}>
                {timeline.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                      className="flex items-center relative"
                      style={{ gap: '20px' }}
                    >
                      <div style={{
                        position: 'absolute',
                        left: '-48px',
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: 'var(--gradient)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 20px rgba(31,78,121,0.2)',
                        zIndex: 2,
                      }}>
                        <Icon size={20} color="white" />
                      </div>
                      <div className="glass-card" style={{ padding: '20px 24px', flex: 1 }}>
                        <h4 style={{
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: 'var(--heading)',
                          fontFamily: 'var(--font-heading)',
                          marginBottom: '4px',
                        }}>
                          {step.label}
                        </h4>
                        <p style={{ fontSize: '0.8rem', color: 'var(--paragraph)' }}>
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right — Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col"
            style={{ gap: '16px' }}
          >
            <div className="glass-card flex items-center" style={{ padding: '20px 24px', gap: '16px' }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '14px',
                background: 'rgba(31,78,121,0.06)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Clock size={22} style={{ color: 'var(--primary)' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--heading)', fontFamily: 'var(--font-heading)' }}>
                  Working Hours
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--paragraph)' }}>9 AM – 6 PM, Monday to Saturday</p>
              </div>
            </div>

            <div className="glass-card flex items-center" style={{ padding: '20px 24px', gap: '16px' }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '14px',
                background: 'rgba(31,78,121,0.06)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Zap size={22} style={{ color: 'var(--primary)' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--heading)', fontFamily: 'var(--font-heading)' }}>
                  Same Day Available*
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--paragraph)' }}>Express service for urgent requirements</p>
              </div>
            </div>

            <div className="glass-card flex items-center" style={{ padding: '20px 24px', gap: '16px' }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '14px',
                background: 'rgba(31,78,121,0.06)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Calendar size={22} style={{ color: 'var(--primary)' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--heading)', fontFamily: 'var(--font-heading)' }}>
                  On-Time Guaranteed
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--paragraph)' }}>Delivery charges applicable • Reliable schedule</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
