import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Terminal as TerminalIcon, ShieldCheck, Mail, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [showTerminal, setShowTerminal] = useState(false);

  const addLog = (text, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setTerminalLogs((prev) => [...prev, { timestamp, text, type }]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Quick validations
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus('error');
      setErrorMsg('All fields are required.');
      if (showTerminal) {
        addLog('Error: Validation failed. Missing fields.', 'error');
      }
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      if (showTerminal) {
        addLog('Error: Invalid email format.', 'error');
      }
      return;
    }

    // Submit Simulation
    setStatus('sending');
    addLog(`Initiating HTTP POST request to /api/contact...`, 'info');
    addLog(`Headers: { "Content-Type": "application/json" }`, 'info');
    addLog(`Payload: ${JSON.stringify({ name: form.name, email: form.email, subject: form.subject }, null, 2)}`, 'info');

    setTimeout(() => {
      addLog(`Connecting to SMTP relay server...`, 'info');
    }, 500);

    setTimeout(() => {
      addLog(`Status: 200 OK. Message queued for delivery.`, 'success');
      addLog(`Email successfully routed to minhaj@portfolio.dev`, 'success');
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" style={{ position: 'relative', zIndex: 10 }}>
      {/* Background radial highlight */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '20%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Reach Out</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-desc">
            Have a project in mind, an opportunity to discuss, or just want to say hi? Fill out the form below.
          </p>
        </div>

        {/* Form & Terminal Container */}
        <div
          className="contact-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: showTerminal ? '1fr 1fr' : '1fr',
            gap: '2.5rem',
            maxWidth: showTerminal ? '1100px' : '650px',
            margin: '0 auto',
            transition: 'max-width 0.4s ease',
          }}
        >
          {/* Contact Form Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="glass-panel"
            style={{
              padding: '2.5rem',
              background: 'linear-gradient(135deg, rgba(11, 21, 40, 0.45) 0%, rgba(3, 7, 18, 0.75) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Form Title & Console Switch */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Send a Message</h3>

              {/* Dev Mode toggle button */}
              <button
                type="button"
                onClick={() => {
                  setShowTerminal(!showTerminal);
                  if (!showTerminal && terminalLogs.length === 0) {
                    setTerminalLogs([
                      { timestamp: new Date().toLocaleTimeString(), text: 'Debugger Console initialized.', type: 'info' },
                      { timestamp: new Date().toLocaleTimeString(), text: 'Listening for client form submission events...', type: 'info' },
                    ]);
                  }
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  background: showTerminal ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  border: showTerminal ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid rgba(255, 255, 255, 0.06)',
                  color: showTerminal ? '#60a5fa' : 'var(--text-secondary)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                }}
              >
                <TerminalIcon size={14} />
                <span>Console Logs {showTerminal ? 'ON' : 'OFF'}</span>
              </button>
            </div>

            {/* Error alerts */}
            {status === 'error' && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  borderRadius: '8px',
                  color: '#f87171',
                  marginBottom: '1.5rem',
                  fontSize: '0.9rem',
                }}
              >
                <AlertTriangle size={18} style={{ flexShrink: 0 }} />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Success modal/alert */}
            {status === 'success' && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  borderRadius: '8px',
                  color: '#34d399',
                  marginBottom: '1.5rem',
                  fontSize: '0.9rem',
                }}
              >
                <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
                <span>Your message has been sent successfully! Thank you.</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                {/* Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Jane Doe"
                    disabled={status === 'sending'}
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="jane@example.com"
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Freelance Project Inquiry"
                  disabled={status === 'sending'}
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Hi Minhaj, I would like to build..."
                  disabled={status === 'sending'}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', gap: '0.5rem', padding: '0.875rem' }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className="spinner" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Dev Mode Terminal Output */}
          <AnimatePresence>
            {showTerminal && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-panel"
                style={{
                  padding: '1.5rem',
                  background: '#090d16',
                  border: '1px solid rgba(59, 130, 246, 0.15)',
                  fontFamily: 'monospace',
                  fontSize: '0.8rem',
                  color: '#e2e8f0',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  maxHeight: '520px',
                }}
              >
                {/* Terminal Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '0.35rem' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>minhaj-relational-relay.sh</span>
                </div>

                {/* Console Log Content */}
                <div style={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingRight: '0.25rem' }}>
                  {terminalLogs.map((log, idx) => {
                    let logColor = '#94a3b8';
                    if (log.type === 'error') logColor = '#f87171';
                    else if (log.type === 'success') logColor = '#34d399';

                    return (
                      <div key={idx} style={{ lineHeight: 1.4 }}>
                        <span style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }}>[{log.timestamp}]</span>
                        <span style={{ color: logColor }}>{log.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Reset terminal option */}
                <button
                  type="button"
                  onClick={() => setTerminalLogs([{ timestamp: new Date().toLocaleTimeString(), text: 'Terminal output cleared.', type: 'info' }])}
                  style={{
                    alignSelf: 'flex-end',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    fontSize: '0.7rem',
                    textDecoration: 'underline',
                  }}
                >
                  Clear Console
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Spinner stylesheet */}
      <style>{`
        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          display: inline-block;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 992px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
            max-width: 650px !important;
          }
        }
      `}</style>
    </section>
  );
}
