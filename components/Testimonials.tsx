'use client';

import { useRef, useCallback, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    name: 'Priya Shankar',
    role: 'Homemaker',
    text: 'Absolutely fantastic service! My clothes come back smelling fresh and perfectly ironed every single time. The automated process ensures consistency.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Hotel Owner',
    text: 'We switched to Landury for our hotel linen service and the quality improvement was immediate. Their industrial machines handle bulk orders effortlessly.',
    rating: 5,
  },
  {
    name: 'Anita Devi',
    role: 'Working Professional',
    text: 'The doorstep pickup and delivery saves me so much time. The quality is premium and the pricing is very reasonable. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Mohammed Farhan',
    role: 'Restaurant Manager',
    text: 'Their corporate contract plan is perfect for our restaurant. Tablecloths and uniforms are always spotless. Great reliability and communication.',
    rating: 5,
  },
  {
    name: 'Lakshmi Narayan',
    role: 'Family of Five',
    text: 'Managing laundry for a large family was a nightmare until we discovered Landury. Their 20kg capacity machines handle everything in one go!',
    rating: 5,
  },
  {
    name: 'Dr. Suresh Babu',
    role: 'Clinic Owner',
    text: 'We trust Landury with our medical linen. The steam sterilization gives us confidence in hygiene standards. Professional and reliable service.',
    rating: 5,
  },
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [query]);
  return matches;
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isMd = useMediaQuery('(min-width: 768px)');
  const isLg = useMediaQuery('(min-width: 1024px)');

  const slideSize = isLg ? 'calc(33.333% - 14px)' : isMd ? 'calc(50% - 10px)' : 'calc(100% - 16px)';

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
  });

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  useEffect(() => {
    const cleanup = autoplay();
    return () => cleanup?.();
  }, [autoplay]);

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
            Testimonials
          </div>
          <h2 className="section-title">
            What Our Customers{' '}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Real stories from real customers who trust us with their laundry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex" style={{ gap: '20px' }}>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{
                    flex: `0 0 ${slideSize}`,
                    minWidth: 0,
                    padding: '32px',
                  }}
                >
                  {/* Stars */}
                  <div className="flex" style={{ gap: '2px', marginBottom: '16px' }}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} fill="#1F4E79" color="#1F4E79" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--heading)',
                    lineHeight: 1.7,
                    marginBottom: '24px',
                    fontStyle: 'italic',
                  }}>
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center" style={{ gap: '12px' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'var(--gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1rem',
                      fontFamily: 'var(--font-heading)',
                    }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <p style={{
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: 'var(--heading)',
                        fontFamily: 'var(--font-heading)',
                      }}>
                        {t.name}
                      </p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--paragraph-light)' }}>
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
