import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Lightbulb, Code2, Smartphone, Zap } from 'lucide-react';

const strengths = [
  {
    icon: Briefcase,
    title: 'Internship Experience',
    desc: 'Hands-on training building real-world enterprise interfaces and production web infrastructure.',
    color: '#3b82f6',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    desc: 'Strong algorithmic foundation with a logical, systematic approach to debugging and optimization.',
    color: '#8b5cf6',
  },
  {
    icon: Code2,
    title: 'Clean Code',
    desc: 'Writing modular, reusable, and readable codebases conforming to SOLID principles and industry standards.',
    color: '#ec4899',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    desc: 'Crafting responsive mobile-first layouts that render flawlessly across any display resolution.',
    color: '#10b981',
  },
  {
    icon: Zap,
    title: 'Modern Development',
    desc: 'Leveraging Vite, Git, and automated testing workflows to deliver lightning-fast applications.',
    color: '#f59e0b',
  },
];

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" style={{ position: 'relative', zIndex: 10 }}>
      {/* Dynamic background element */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Title */}
        <div className="section-header">
          <span className="section-subtitle">Introduction</span>
          <h2 className="section-title">About Me</h2>
        </div>

        {/* Bio Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            marginBottom: '4rem',
            textAlign: 'left',
          }}
          className="bio-layout"
        >
          {/* Text Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            style={{
              padding: '2.5rem',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.3) 0%, rgba(3, 7, 18, 0.6) 100%)',
            }}
          >
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', fontWeight: 800 }}>
              Hi, I'm{' '}
              <span style={{ background: 'linear-gradient(135deg, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Minhaj
              </span>
            </h3>
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}
            >
              A Full Stack Developer with internship experience building modern web applications. I enjoy creating responsive, user-focused digital experiences and continuously improving my development skills.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              My passion lies at the intersection of frontend elegance and backend robustness. I thrive in collaborative environments that push technical boundaries, looking for elegant solutions to complex system architectures.
            </p>
          </motion.div>
        </div>

        {/* Strengths Grid */}
        <motion.div
          className="strengths-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {strengths.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="glass-panel strength-card"
                whileHover={{ y: -8, scale: 1.02 }}
                style={{
                  padding: '2.25rem',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Glow Overlay on hover */}
                <div
                  className="card-glow"
                  style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: `radial-gradient(circle, ${item.color}10 0%, transparent 60%)`,
                    pointerEvents: 'none',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                />

                {/* Icon Badge */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: `${item.color}15`,
                    border: `1px solid ${item.color}33`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: item.color,
                  }}
                >
                  <IconComponent size={24} />
                </div>

                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        .strength-card:hover .card-glow {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
