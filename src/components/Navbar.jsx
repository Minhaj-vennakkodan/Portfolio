import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '1rem 0' : '1.5rem 0',
          background: scrolled ? 'rgba(3, 7, 18, 0.75)' : 'rgba(3, 7, 18, 0)',
          backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(255, 255, 255, 0)',
          transition: 'padding 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s, border 0.3s',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          >
            <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Minhaj
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                      transition: 'var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#resume"
              className="btn btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download initiated! (Simulated PDF download for Minhaj)");
              }}
            >
              <Download size={15} />
              Resume
            </a>
          </div>

          {/* Mobile Hamburguer Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-nav-toggle"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* CSS for navbar responsiveness */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: block !important;
          }
        }
      `}</style>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              right: 0,
              background: 'rgba(3, 7, 18, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '2rem',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', listStyle: 'none', padding: 0, margin: 0 }}>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                      display: 'block',
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#resume"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                alert("Resume download initiated! (Simulated PDF download for Minhaj)");
              }}
            >
              <Download size={16} />
              Resume Download
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
