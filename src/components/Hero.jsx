import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.15, 1],
      opacity: [0.15, 0.25, 0.15],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    animateReverse: {
      scale: [1.1, 0.9, 1.1],
      opacity: [0.12, 0.22, 0.12],
      transition: {
        duration: 9,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        padding: '8rem 0 4rem 0',
        zIndex: 5,
      }}
    >
      {/* Background Orbs */}
      <motion.div
        className="glow-orb"
        variants={glowVariants}
        animate="animate"
        style={{
          background: 'radial-gradient(circle, var(--accent-blue) 0%, rgba(0,0,0,0) 70%)',
          width: '50vw',
          height: '50vw',
          top: '-10%',
          left: '-10%',
        }}
      />
      <motion.div
        className="glow-orb"
        variants={glowVariants}
        animate="animateReverse"
        style={{
          background: 'radial-gradient(circle, var(--accent-purple) 0%, rgba(0,0,0,0) 70%)',
          width: '45vw',
          height: '45vw',
          bottom: '10%',
          right: '-5%',
        }}
      />

      {/* Hero Grid Overlay */}
      <div
        className="hero-grid"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {/* Tag / Badge */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                marginBottom: '2rem',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  boxShadow: '0 0 8px #4ade80',
                }}
              />
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#93c5fd',
                  letterSpacing: '0.02em',
                }}
              >
                Available for Roles & Freelance Projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}
            >
              <span className="text-gradient">Full Stack Developer Building </span>
              <span className="accent-gradient-rainbow">Modern Web Experiences</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '650px',
                marginBottom: '3rem',
              }}
            >
              I create scalable, responsive, and user-friendly web applications using modern technologies.
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
              }}
            >
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="btn btn-primary"
                style={{ padding: '0.875rem 2rem' }}
              >
                View Projects
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="btn btn-outline"
                style={{ padding: '0.875rem 2rem' }}
              >
                Contact Me
                <MessageSquare size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
