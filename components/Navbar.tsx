'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? 'glass-strong shadow-sm'
            : 'bg-transparent'
        }`}
        style={{ borderBottom: isScrolled ? '1px solid var(--border)' : 'none' }}
      >
        <div className="container flex items-center justify-between" style={{ height: '72px' }}>
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-2"
            style={{ textDecoration: 'none' }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                background: 'var(--gradient)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 800,
                fontSize: '1rem',
                fontFamily: 'var(--font-heading)',
              }}
            >
              L
            </div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '1.25rem',
                color: 'var(--heading)',
                letterSpacing: '-0.02em',
              }}
            >
              Landury
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center" style={{ gap: '32px' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="relative group"
                style={{
                  textDecoration: 'none',
                  color: 'var(--paragraph)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-body)',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--heading)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--paragraph)';
                }}
              >
                {link.label}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: 'var(--gradient)' }}
                />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center" style={{ gap: '12px' }}>
            <button
              className="btn-primary"
              onClick={() => handleNavClick('#contact')}
              style={{ padding: '10px 24px', fontSize: '0.85rem' }}
            >
              Book Pickup
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            style={{
              width: '44px',
              height: '44px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              color: 'var(--heading)',
            }}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99]"
            style={{ background: 'rgba(0,0,0,0.3)' }}
            onClick={() => setIsMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="glass-strong absolute right-0 top-0 bottom-0 flex flex-col"
              style={{
                width: '80%',
                maxWidth: '360px',
                padding: '96px 32px 32px',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col" style={{ gap: '8px' }}>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    style={{
                      textDecoration: 'none',
                      color: 'var(--heading)',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-heading)',
                      padding: '12px 0',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{ marginTop: '32px' }}
              >
                <button
                  className="btn-primary"
                  onClick={() => handleNavClick('#contact')}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Book Pickup
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
