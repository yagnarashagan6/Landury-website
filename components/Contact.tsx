'use client';

import { useRef, useState, type FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, MapPin, Clock, Truck, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border)',
    background: 'var(--surface)',
    color: 'var(--heading)',
    fontSize: '0.85rem',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  };

  return (
    <section id="contact" ref={ref} className="section-lg" style={{ background: 'var(--background)' }}>
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
            Contact Us
          </div>
          <h2 className="section-title">
            Get In{' '}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Book a pickup or reach out for any queries. We&apos;re here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '48px' }}>
          {/* Left — Map + Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Map */}
            <div
              style={{
                width: '100%',
                height: '280px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                marginBottom: '24px',
                border: '1px solid var(--border)',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.7!2d79.5!3d11.94!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU2JzI0LjAiTiA3OcKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Landury Location"
              />
            </div>

            {/* Info Cards */}
            <div className="flex flex-col" style={{ gap: '12px' }}>
              <div className="glass-card flex items-start" style={{ padding: '16px 20px', gap: '12px' }}>
                <MapPin size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--heading)', fontFamily: 'var(--font-heading)', marginBottom: '2px' }}>
                    Address
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--paragraph)', lineHeight: 1.5 }}>
                    NH 49, Agram Sithamur, Pambai, Kanai,<br />
                    Villupuram District, Tamil Nadu – 605301
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: '12px' }}>
                <div className="glass-card flex items-center" style={{ padding: '14px 16px', gap: '10px' }}>
                  <Clock size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--paragraph-light)' }}>Working Hours</p>
                    <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--heading)' }}>9 AM – 6 PM</p>
                  </div>
                </div>
                <div className="glass-card flex items-center" style={{ padding: '14px 16px', gap: '10px' }}>
                  <Phone size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--paragraph-light)' }}>Call Us</p>
                    <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--heading)' }}>+91 XXXXX XXXXX</p>
                  </div>
                </div>
                <div className="glass-card flex items-center" style={{ padding: '14px 16px', gap: '10px' }}>
                  <Truck size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--paragraph-light)' }}>Delivery</p>
                    <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--heading)' }}>Available</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card" style={{ padding: '36px 32px' }}>
              <h3 style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--heading)',
                fontFamily: 'var(--font-heading)',
                marginBottom: '8px',
              }}>
                Book a Pickup
              </h3>
              <p style={{
                fontSize: '0.8rem',
                color: 'var(--paragraph)',
                marginBottom: '28px',
              }}>
                Fill in your details and we&apos;ll schedule a pickup at your convenience.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: '16px' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '16px' }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(31,78,121,0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(31,78,121,0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <select
                  required
                  style={{ ...inputStyle, color: 'var(--paragraph)' }}
                  defaultValue=""
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(31,78,121,0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <option value="" disabled>Select Service</option>
                  <option>Regular Wash</option>
                  <option>Wash + Dry + Fold</option>
                  <option>Steam Iron</option>
                  <option>Premium Dry Cleaning</option>
                  <option>Curtains & Blankets</option>
                  <option>Corporate/Bulk Service</option>
                </select>

                <input
                  type="text"
                  placeholder="Pickup Address"
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(31,78,121,0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />

                <input
                  type="text"
                  placeholder="Preferred Time (e.g., 10 AM – 12 PM)"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(31,78,121,0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />

                <textarea
                  placeholder="Additional Message (optional)"
                  rows={3}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(31,78,121,0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />

                <motion.button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '16px 32px' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {submitted ? (
                    <>✓ Request Submitted</>
                  ) : (
                    <>
                      Book Pickup
                      <Send size={16} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
