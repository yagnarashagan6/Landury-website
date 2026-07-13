'use client';

import { ArrowUpRight } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Regular Wash',
  'Wash + Dry + Fold',
  'Steam Iron',
  'Dry Cleaning',
  'Corporate Service',
];

const socials = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaWhatsapp, href: '#', label: 'WhatsApp' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#0F172A',
      color: '#94A3B8',
      position: 'relative',
    }}>
      {/* Gradient accent line */}
      <div style={{
        height: '3px',
        background: 'var(--gradient)',
      }} />

      <div className="container" style={{ paddingTop: '64px', paddingBottom: '32px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '48px', marginBottom: '48px' }}>
          {/* Brand */}
          <div>
            <div className="flex items-center" style={{ gap: '10px', marginBottom: '16px' }}>
              <div style={{
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
              }}>
                L
              </div>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '1.25rem',
                color: 'white',
                letterSpacing: '-0.02em',
              }}>
                Landury
              </span>
            </div>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.7, marginBottom: '20px', maxWidth: '260px' }}>
              Precision in Every Wash. Excellence in Every Fold. Government authorized premium laundry solutions.
            </p>
            <div className="flex" style={{ gap: '10px' }}>
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      border: '1px solid rgba(148,163,184,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#94A3B8',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary-light)';
                      (e.currentTarget as HTMLElement).style.color = 'var(--primary-light)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(59,130,246,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(148,163,184,0.2)';
                      (e.currentTarget as HTMLElement).style.color = '#94A3B8';
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'white',
              fontFamily: 'var(--font-heading)',
              marginBottom: '16px',
              letterSpacing: '0.02em',
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    style={{
                      textDecoration: 'none',
                      color: '#94A3B8',
                      fontSize: '0.8rem',
                      transition: 'color 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'white'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#94A3B8'; }}
                  >
                    {link.label}
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'white',
              fontFamily: 'var(--font-heading)',
              marginBottom: '16px',
              letterSpacing: '0.02em',
            }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {serviceLinks.map((s) => (
                <li key={s}>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'white',
              fontFamily: 'var(--font-heading)',
              marginBottom: '16px',
              letterSpacing: '0.02em',
            }}>
              Working Hours
            </h4>
            <div className="flex flex-col" style={{ gap: '8px', fontSize: '0.8rem' }}>
              <p>Monday – Saturday</p>
              <p style={{ color: 'white', fontWeight: 600 }}>9:00 AM – 6:00 PM</p>
              <p style={{ marginTop: '8px' }}>Sunday</p>
              <p style={{ color: 'white', fontWeight: 600 }}>Closed</p>
            </div>
            <div style={{
              marginTop: '20px',
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(59,130,246,0.1)',
              border: '1px solid rgba(59,130,246,0.2)',
              fontSize: '0.75rem',
              color: 'var(--primary-light)',
            }}>
              📍 NH 49, Agram Sithamur, Pambai, Kanai, Villupuram, TN – 605301
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid rgba(148,163,184,0.1)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          fontSize: '0.75rem',
        }}>
          <p>© {new Date().getFullYear()} Landury. All rights reserved.</p>
          <div className="flex" style={{ gap: '20px' }}>
            <a href="#" style={{ color: '#94A3B8', textDecoration: 'none' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'white'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#94A3B8'; }}
            >
              Privacy Policy
            </a>
            <a href="#" style={{ color: '#94A3B8', textDecoration: 'none' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'white'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#94A3B8'; }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
