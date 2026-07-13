'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Cog, Flame, ClipboardCheck, IndianRupee, Truck } from 'lucide-react';

const trustItems = [
  { icon: Shield, label: 'Government Authorized', desc: 'Certified & Compliant' },
  { icon: Cog, label: 'Industrial Machines', desc: '20kg Capacity Systems' },
  { icon: Flame, label: 'Steam Sterilization', desc: 'Deep Sanitization' },
  { icon: ClipboardCheck, label: 'Quality Checked', desc: 'Multi-Point Inspection' },
  { icon: IndianRupee, label: 'Affordable Pricing', desc: 'Best Value Service' },
  { icon: Truck, label: 'Door Delivery', desc: 'Pickup & Drop Service' },
];

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} style={{ padding: '48px 0', background: 'var(--surface)' }}>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6" style={{ gap: '16px' }}>
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card flex flex-col items-center text-center"
                style={{ padding: '24px 16px', cursor: 'default' }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(31,78,121,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '12px',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Icon size={22} style={{ color: 'var(--primary)' }} />
                </div>
                <h3 style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--heading)',
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '4px',
                }}>
                  {item.label}
                </h3>
                <p style={{
                  fontSize: '0.75rem',
                  color: 'var(--paragraph-light)',
                }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
