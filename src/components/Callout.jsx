import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Callout() {
  return (
    <section
      style={{
        padding: '6rem 0',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
      }}
    >
      {/* Background neon elements */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70%',
          height: '100%',
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 80%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '4rem 3rem',
            textAlign: 'center',
            position: 'relative',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.4) 0%, rgba(3, 7, 18, 0.8) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
          }}
        >
          {/* Quote Icon */}
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-blue)',
              marginBottom: '1rem',
            }}
          >
            <Quote size={28} style={{ transform: 'rotate(180deg)' }} />
          </div>

          {/* Testimonial Quote */}
          <blockquote style={{ margin: 0, padding: 0 }}>
            <p
              style={{
                fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.4,
                fontStyle: 'italic',
                letterSpacing: '-0.02em',
              }}
            >
              "Passionate about building{' '}
              <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                impactful digital products
              </span>{' '}
              and continuously learning{' '}
              <span style={{ background: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                new technologies
              </span>
              ."
            </p>
          </blockquote>

          {/* Decorative subtitle */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginTop: '1rem',
            }}
          >
            <div style={{ width: '24px', height: '1px', backgroundColor: 'var(--text-muted)' }} />
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Minhaj's Philosophy
            </span>
            <div style={{ width: '24px', height: '1px', backgroundColor: 'var(--text-muted)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
