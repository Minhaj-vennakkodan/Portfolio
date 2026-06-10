import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'HTML5',
        icon: (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#e34f26">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.562h11.196l-.238-2.563H5.85l.707 7.687h8.861l-.32 3.528-3.136.848-3.135-.85-.202-2.264H6.11l.363 4.134 5.504 1.492 5.518-1.492.614-6.884H8.531z" />
          </svg>
        ),
        level: 'Advanced',
      },
      {
        name: 'CSS3',
        icon: (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#1572b6">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.562h11.196l-.238-2.563H5.85l.707 7.687h8.861l-.32 3.528-3.136.848-3.135-.85-.202-2.264H6.11l.363 4.134 5.504 1.492 5.518-1.492.614-6.884H8.531z" style={{ fill: '#fff' }} />
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.562h11.196l-.238-2.563H5.85l.707 7.687h8.861l-.32 3.528-3.136.848-3.135-.85-.202-2.264H6.11l.363 4.134 5.504 1.492 5.518-1.492.614-6.884H8.531z" opacity="0.2" />
          </svg>
        ),
        level: 'Advanced',
      },
      {
        name: 'JavaScript',
        icon: (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#f7df1e">
            <rect width="24" height="24" rx="3" />
            <path d="M1.5 0h21a1.5 1.5 0 0 1 1.5 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zm17.9 19.388c.616 0 1.144-.14 1.583-.42a2.384 2.384 0 0 0 .991-1.168c.25-.572.373-1.282.373-2.132v-.102h-2.348v.149c0 .59-.115 1.011-.345 1.263-.222.245-.56.368-1.012.368-.43 0-.756-.118-.981-.353-.224-.236-.336-.613-.336-1.13v-3.79c0-.525.122-.911.365-1.157.242-.246.6-.369 1.074-.369.458 0 .8.12 1.025.362.227.242.34.667.34 1.275v.19h2.348v-.265c0-.85-.128-1.554-.383-2.112a2.417 2.417 0 0 0-.996-1.144c-.438-.255-.959-.383-1.564-.383-.695 0-1.282.164-1.76.492-.472.321-.823.784-1.054 1.39-.224.6-.336 1.344-.336 2.232v3.743c0 .9.117 1.652.35 2.257.238.599.6.14.35 2.257c.238.599.6 1.055 1.084 1.367.49.306 1.096.46 1.815.46zm-9.088 0c.712 0 1.298-.17 1.76-.51.468-.344.814-.83 1.037-1.458.23-.635.344-1.428.344-2.38v-.102h-2.371v.126c0 .602-.107 1.025-.32 1.272-.213.247-.532.371-.958.371-.4 0-.709-.126-.927-.379-.219-.253-.328-.67-.328-1.25v-3.66c0-.59.112-1.018.336-1.283.224-.265.55-.398.98-.398.397 0 .692.128.887.383.195.255.293.682.293 1.28v.172h2.371v-.246c0-.958-.118-1.743-.356-2.357a2.533 2.533 0 0 0-1.042-1.41c-.48-.328-1.093-.492-1.838-.492-.727 0-1.344.17-1.85.51-.5.333-.872.822-1.116 1.466-.238.638-.357 1.432-.357 2.38v3.66c0 .949.119 1.743.357 2.381.244.632.616 1.116 1.116 1.452.506.33 1.123.498 1.85.498z" fill="#000" />
          </svg>
        ),
        level: 'Advanced',
      },
      {
        name: 'React.js',
        icon: (
          <svg viewBox="-11.5 -10.23174 23 20.46348" width="28" height="28">
            <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        ),
        level: 'Intermediate',
      },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      {
        name: 'Node.js',
        icon: (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#339933">
            <path d="M12 24c-.224 0-.44-.061-.63-.178l-9.45-5.836A1.233 1.233 0 0 1 1.28 16.92v-9.84c0-.442.235-.851.618-1.071L11.37.172a1.236 1.236 0 0 1 1.26 0l9.472 5.836c.383.22.618.63.618 1.07v9.84c0 .444-.235.852-.618 1.072l-9.472 5.836c-.19.117-.406.178-.63.178zM3.736 16.223l8.264 5.105 8.264-5.105V7.777l-8.264-5.104-8.264 5.104v8.446zm8.25-10.7c1.372 0 2.488 1.116 2.488 2.488 0 .493-.146.953-.396 1.344-.136.212-.34.348-.582.39-.24.043-.49-.028-.682-.19-.344-.29-.785-.45-1.25-.45-1.07 0-1.942.871-1.942 1.942 0 1.07.871 1.94 1.942 1.94.465 0 .906-.16 1.25-.45a.755.755 0 0 1 .68-.19c.244.042.447.178.583.39.25.39.397.85.397 1.344 0 1.372-1.116 2.488-2.488 2.488-2.724 0-4.942-2.218-4.942-4.942S9.262 5.522 11.986 5.522z" />
          </svg>
        ),
        level: 'Intermediate',
      },
      {
        name: 'Express.js',
        icon: (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#ffffff">
            {/* Minimal EX logo */}
            <rect width="24" height="24" rx="4" fill="#1e293b" />
            <text x="3" y="16" fontFamily="monospace" fontSize="13" fontWeight="bold" fill="#fff">ex</text>
          </svg>
        ),
        level: 'Intermediate',
      },
      {
        name: 'MongoDB',
        icon: (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#47a248">
            <path d="M12.222 0C11.517 0 7.378 4.417 7.378 9.944c0 4.606 2.872 7.744 4.844 9.472.296.257.652.392 1.01.392.355 0 .708-.135 1.002-.387 2.012-1.722 4.908-4.887 4.908-9.477C19.142 4.407 14.937 0 14.222 0zm-1.896 9.873c.489-.57 1.096-1.127 1.83-1.637v9.428c-.89-.838-1.83-2.316-1.83-3.955V9.873zm3.725-1.637c.732.51 1.338 1.066 1.826 1.637v3.836c0 1.638-.937 3.117-1.826 3.955V8.236zM13.222 21.056c-.504 0-.913.41-.913.913v1.118c0 .503.409.913.913.913s.913-.41.913-.913v-1.118c0-.503-.409-.913-.913-.913z" />
          </svg>
        ),
        level: 'Intermediate',
      },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      {
        name: 'Git',
        icon: (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#f05032">
            <path d="M23.384 11.233L12.767.616a1.08 1.08 0 0 0-1.533 0L8.71 3.14l3.14 3.14a2.915 2.915 0 0 1 3.197.68c.767.767.973 1.867.625 2.766l3.13 3.13a2.923 2.923 0 0 1 2.767.625 2.934 2.934 0 0 1 0 4.148 2.934 2.934 0 0 1-4.148 0 2.923 2.923 0 0 1-.625-2.767l-2.905-2.905V15.22c.383.218.697.558.892.973a1.954 1.954 0 0 1-.95 2.53 1.954 1.954 0 0 1-2.53-.95 1.942 1.942 0 0 1 .184-1.868L10.02 12.18c-.9.348-2 .142-2.766-.625a2.91 2.91 0 0 1-.68-3.197L3.435 5.216.616 8.035a1.08 1.08 0 0 0 0 1.533l10.617 10.617c.423.424 1.11.424 1.533 0l10.618-10.618a1.082 1.082 0 0 0 0-1.534z" fill="#fff" />
            <path d="M23.384 11.233L12.767.616a1.08 1.08 0 0 0-1.533 0L8.71 3.14l3.14 3.14a2.915 2.915 0 0 1 3.197.68c.767.767.973 1.867.625 2.766l3.13 3.13a2.923 2.923 0 0 1 2.767.625 2.934 2.934 0 0 1 0 4.148 2.934 2.934 0 0 1-4.148 0 2.923 2.923 0 0 1-.625-2.767l-2.905-2.905V15.22c.383.218.697.558.892.973a1.954 1.954 0 0 1-.95 2.53 1.954 1.954 0 0 1-2.53-.95 1.942 1.942 0 0 1 .184-1.868L10.02 12.18c-.9.348-2 .142-2.766-.625a2.91 2.91 0 0 1-.68-3.197L3.435 5.216.616 8.035a1.08 1.08 0 0 0 0 1.533l10.617 10.617c.423.424 1.11.424 1.533 0l10.618-10.618a1.082 1.082 0 0 0 0-1.534z" opacity="0.25" />
          </svg>
        ),
        level: 'Intermediate',
      },
      {
        name: 'GitHub',
        icon: (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#ffffff">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
        ),
        level: 'Advanced',
      },
      {
        name: 'VS Code',
        icon: (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#007acc">
            <path d="M23.986 6.568L18.665.918c-.352-.352-.924-.352-1.276 0L8.713 9.588 3.518 5.688c-.347-.26-.838-.173-1.082.193L.16 9.387c-.21.312-.178.736.079.993l4.636 4.636L.239 19.652c-.256.256-.288.68-.078.993l2.276 3.506c.244.366.735.453 1.082.193l5.195-3.9 8.676 8.676c.352.352.924.352 1.276 0l5.321-5.65c.34-.361.325-.94-.034-1.299L13.12 12l10.9-10.133c.359-.359.374-.938.034-1.299zM17.41 12l-4.148 4.148-3.08-3.08L17.41 12z" fill="#007acc" />
            <path d="M23.986 6.568L18.665.918c-.352-.352-.924-.352-1.276 0L8.713 9.588 3.518 5.688c-.347-.26-.838-.173-1.082.193L.16 9.387c-.21.312-.178.736.079.993l4.636 4.636L.239 19.652c-.256.256-.288.68-.078.993l2.276 3.506c.244.366.735.453 1.082.193l5.195-3.9 8.676 8.676c.352.352.924.352 1.276 0l5.321-5.65c.34-.361.325-.94-.034-1.299L13.12 12l10.9-10.133c.359-.359.374-.938.034-1.299zM17.41 12l-4.148 4.148-3.08-3.08L17.41 12z" opacity="0.2" fill="#fff" />
          </svg>
        ),
        level: 'Advanced',
      },
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const skillVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" style={{ position: 'relative', zIndex: 10 }}>
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Title */}
        <div className="section-header">
          <span className="section-subtitle">Proficiencies</span>
          <h2 className="section-title">My Skills</h2>
          <p className="section-desc">
            A curated list of technologies, frameworks, databases, and version control systems that I utilize to develop modern products.
          </p>
        </div>

        {/* Categories Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
          }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="glass-panel"
              style={{
                padding: '2.5rem',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                background: 'rgba(15, 23, 42, 0.25)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '1.75rem',
                  textAlign: 'left',
                  letterSpacing: '0.01em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-blue)',
                    boxShadow: '0 0 6px var(--accent-blue)',
                  }}
                />
                {category.title}
              </h3>

              {/* Grid items */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1.25rem',
                }}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ scale: 1.04, y: -4 }}
                    style={{
                      padding: '1.25rem 1.5rem',
                      borderRadius: '12px',
                      background: 'rgba(15, 23, 42, 0.4)',
                      border: '1px solid rgba(255, 255, 255, 0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      transition: 'border 0.2s ease, box-shadow 0.2s ease',
                      cursor: 'default',
                    }}
                    className="skill-item"
                  >
                    {/* Icon container */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                      }}
                    >
                      {skill.icon}
                    </div>

                    {/* Skill Info */}
                    <div style={{ textAlign: 'left' }}>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {skill.name}
                      </h4>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .skill-item:hover {
          border-color: rgba(59, 130, 246, 0.2) !important;
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.08);
        }
      `}</style>
    </section>
  );
}
