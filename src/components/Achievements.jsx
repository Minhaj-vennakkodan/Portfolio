import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Award, Code, GraduationCap } from 'lucide-react';

// Counter component for animated statistics
function StatCounter({ target, duration = 1500, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: Target,
    title: 'Projects Completed',
    target: '15',
    suffix: '+',
    desc: 'Bespoke web tools and applications built with React, CSS, and Node.',
    color: '#3b82f6',
  },
  {
    icon: Award,
    title: 'Internship Experience',
    target: '9',
    suffix: '+ Months',
    desc: 'Direct development experience building functional production client features.',
    color: '#8b5cf6',
  },
  {
    icon: Code,
    title: 'Technologies Learned',
    target: '10',
    suffix: '+ Stacks',
    desc: 'Fluent across full stack languages, databases, version control, and IDE tools.',
    color: '#10b981',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    target: '100',
    suffix: '% Active',
    desc: 'Committed to constant self-improvement and staying on the cutting edge of tech.',
    color: '#f59e0b',
  },
];

export default function Achievements() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="achievements" style={{ position: 'relative', zIndex: 10 }}>
      {/* Background Orbs */}
      <div
        className="glow-orb"
        style={{
          background: 'radial-gradient(circle, var(--accent-purple) 0%, rgba(0,0,0,0) 70%)',
          width: '400px',
          height: '400px',
          top: '10%',
          left: '10%',
          opacity: 0.05,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Milestones</span>
          <h2 className="section-title">Achievements</h2>
          <p className="section-desc">
            A snapshot of my developmental markers, tracking growth, consistency, and professional execution.
          </p>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.title}
                variants={cardVariants}
                className="glass-panel"
                whileHover={{ y: -6, borderColor: `${stat.color}33` }}
                style={{
                  padding: '2rem',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  background: 'rgba(15, 23, 42, 0.35)',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                }}
              >
                {/* Icon & Counter Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: `${stat.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: stat.color,
                      border: `1px solid ${stat.color}25`,
                    }}
                  >
                    <IconComponent size={20} />
                  </div>

                  <span
                    style={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: '#fff',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    <StatCounter target={stat.target} suffix={stat.suffix} />
                  </span>
                </div>

                {/* Details */}
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {stat.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
