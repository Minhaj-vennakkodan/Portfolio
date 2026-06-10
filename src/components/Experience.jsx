import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Award, CheckCircle } from 'lucide-react';

const internshipDuties = [
  {
    title: 'Real-World Project Development',
    desc: 'Collaborated with multidisciplinary development teams in agile sprints, delivering full-stack code pipelines to testing environments.',
  },
  {
    title: 'Frontend & Backend Implementation',
    desc: 'Developed robust controller endpoints using Node/Express, integrated MongoDB schemas, and mapped reactive components in React.js.',
  },
  {
    title: 'Responsive UI Development',
    desc: 'Refactored legacy desktop layouts into fluid, mobile-first architectures, assuring pixel-perfect translations across user device nodes.',
  },
];

export default function Experience() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  const nodeVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" style={{ position: 'relative', zIndex: 10 }}>
      {/* Background orbs */}
      <div
        className="glow-orb"
        style={{
          background: 'radial-gradient(circle, var(--accent-blue) 0%, rgba(0,0,0,0) 70%)',
          width: '500px',
          height: '500px',
          bottom: '10%',
          right: '-20%',
          opacity: 0.08,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Journey</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-desc">
            A timeline of my hands-on training and contributions to production codebases.
          </p>
        </div>

        {/* Timeline Layout */}
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Center Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            style={{
              position: 'absolute',
              left: '20px',
              top: '10px',
              bottom: '10px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent-blue), var(--accent-purple), transparent)',
              originY: 0,
            }}
          />

          {/* Timeline Node Block */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
          >
            {/* Primary Experience Card */}
            <motion.div variants={nodeVariants} style={{ display: 'flex', gap: '2rem', position: 'relative' }}>
              {/* Glowing Pin */}
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-primary)',
                  border: '3px solid var(--accent-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-blue)',
                  boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)',
                  zIndex: 2,
                  flexShrink: 0,
                }}
              >
                <Briefcase size={16} />
              </div>

              {/* Main Content Box */}
              <div
                className="glass-panel"
                style={{
                  padding: '2.5rem',
                  width: '100%',
                  background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.3) 0%, rgba(3, 7, 18, 0.5) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                }}
              >
                {/* Meta Header */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      Web Development Intern
                    </h3>
                    <span
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#a78bfa',
                        marginTop: '0.25rem',
                        display: 'block',
                      }}
                    >
                      Real-World Project Development & UI Implementation
                    </span>
                  </div>

                  {/* Date Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.8rem',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '9999px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <Calendar size={13} />
                    <span>June 2025 - Present</span>
                  </div>
                </div>

                {/* Core Accomplishments */}
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1rem', lineHeight: 1.7 }}>
                  Active contributor in building web features, working directly on core interfaces, server controllers, and database configuration, supporting robust application deployment.
                </p>

                {/* Timeline Sub-points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {internshipDuties.map((duty, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div
                        style={{
                          marginTop: '0.25rem',
                          color: 'var(--accent-blue)',
                          flexShrink: 0,
                        }}
                      >
                        <CheckCircle size={16} />
                      </div>
                      <div>
                        <h4
                          style={{
                            fontSize: '0.95rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            marginBottom: '0.25rem',
                          }}
                        >
                          {duty.title}
                        </h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                          {duty.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
