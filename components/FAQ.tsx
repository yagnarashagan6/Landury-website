'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What types of garments do you accept?',
    a: 'We accept all types of garments including everyday wear, formal clothes, delicates, blankets, curtains, wedding dresses, uniforms, and industrial linen. Each garment type is handled with appropriate care and cleaning methods.',
  },
  {
    q: 'How does the pickup and delivery work?',
    a: 'Simply book a pickup through our website or by phone. Our team will collect your laundry from your doorstep during working hours (9 AM – 6 PM). After processing, we deliver your clean laundry back to your door.',
  },
  {
    q: 'What is the turnaround time?',
    a: 'Standard service delivers within 48 hours. Our Premium plan offers 24-hour express delivery. Same-day service is also available for urgent requirements (subject to availability).',
  },
  {
    q: 'Are your machines safe for delicate fabrics?',
    a: 'Absolutely. Our industrial machines have multiple wash settings optimized for different fabric types. Delicate items are handled separately with gentle cycles and appropriate temperature settings. We maintain a 99% fabric safety record.',
  },
  {
    q: 'Do you offer corporate/bulk contracts?',
    a: 'Yes! We offer custom monthly contracts for hotels, hospitals, restaurants, schools, and corporate offices. Benefits include bulk pricing, dedicated support, scheduled pickups, and invoice billing. Contact us for a custom quote.',
  },
  {
    q: 'What detergents do you use?',
    a: 'We use premium, eco-friendly detergents that are tough on stains but gentle on fabrics. Our Premium plan includes additional fabric conditioner and specialized stain treatment.',
  },
  {
    q: 'Is there a minimum order quantity?',
    a: 'No minimum order for individual customers. For corporate contracts, we can discuss minimum quantities based on your needs. Our industrial machines can handle loads up to 20kg per cycle.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We currently serve Villupuram District and surrounding areas in Tamil Nadu. We are actively expanding our service coverage. Contact us to check availability in your area.',
  },
];

function FAQItem({ faq, index, isOpen, toggle }: { faq: typeof faqs[0]; index: number; isOpen: boolean; toggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={toggle}
        className="flex items-center justify-between w-full text-left"
        style={{
          padding: '20px 0',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          gap: '16px',
        }}
      >
        <span style={{
          fontSize: '0.95rem',
          fontWeight: 600,
          color: isOpen ? 'var(--primary)' : 'var(--heading)',
          fontFamily: 'var(--font-heading)',
          transition: 'color 0.3s ease',
        }}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ flexShrink: 0 }}
        >
          <ChevronDown size={20} style={{ color: isOpen ? 'var(--primary)' : 'var(--paragraph-light)' }} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <p style={{
              fontSize: '0.85rem',
              color: 'var(--paragraph)',
              lineHeight: 1.7,
              paddingBottom: '20px',
            }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="section-lg" style={{ background: 'var(--surface)' }}>
      <div className="container" style={{ maxWidth: '768px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '48px' }}
        >
          <div className="section-label" style={{ margin: '0 auto 24px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
            FAQ
          </div>
          <h2 className="section-title">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
