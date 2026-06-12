import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CheckCircle2, Plus, Trash2, PieChart, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';


export default function Projects() {
  // FinTrack Mock Interactive Widget State
  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Freelance Project', amount: 1200, type: 'income', category: 'Job' },
    { id: 2, text: 'Monthly Rent', amount: -650, type: 'expense', category: 'Housing' },
    { id: 3, text: 'Groceries Store', amount: -120, type: 'expense', category: 'Food' },
    { id: 4, text: 'Coffee Shop', amount: -15, type: 'expense', category: 'Leisure' },
  ]);

  const [desc, setDesc] = useState('');
  const [amt, setAmt] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('Food');

  const addTransaction = (e) => {
    e.preventDefault();
    if (!desc || !amt) return;
    const amountVal = parseFloat(amt);
    if (isNaN(amountVal) || amountVal <= 0) return;

    const newTx = {
      id: Date.now(),
      text: desc,
      amount: type === 'expense' ? -amountVal : amountVal,
      type,
      category: type === 'income' ? 'Job' : category,
    };

    setTransactions([newTx, ...transactions]);
    setDesc('');
    setAmt('');
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((tx) => tx.id !== id));
  };

  // Calculations
  const income = transactions.filter((tx) => tx.amount > 0).reduce((acc, tx) => acc + tx.amount, 0);
  const expense = Math.abs(transactions.filter((tx) => tx.amount < 0).reduce((acc, tx) => acc + tx.amount, 0));
  const balance = income - expense;

  // Category chart breakdown (expenses only)
  const categoryTotals = transactions
    .filter((tx) => tx.amount < 0)
    .reduce((acc, tx) => {
      acc[tx.category] = (acc[tx.category] || 0) + Math.abs(tx.amount);
      return acc;
    }, {});

  const totalExpenseAmount = Object.values(categoryTotals).reduce((a, b) => a + b, 0) || 1;

  const features = [
    'Dashboard Overview',
    'Income Tracking',
    'Expense Management',
    'Analytics Charts',
    'PDF Export',
    'Responsive Design',
  ];

  return (
    <section id="projects" style={{ position: 'relative', zIndex: 10 }}>
      {/* Glow Orbs */}
      <div
        className="glow-orb"
        style={{
          background: 'radial-gradient(circle, var(--accent-purple) 0%, rgba(0,0,0,0) 70%)',
          width: '400px',
          height: '400px',
          top: '40%',
          left: '-10%',
          opacity: 0.1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            Explore a selection of my development projects. Here you can interact with a live preview of my applications.
          </p>
        </div>

        {/* Project Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel project-grid-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '3rem',
            padding: '3rem',
            textAlign: 'left',
            background: 'linear-gradient(135deg, rgba(11, 21, 40, 0.4) 0%, rgba(3, 7, 18, 0.7) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Project Details Left */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Badge */}
              <div
                style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  color: '#60a5fa',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                }}
              >
                React Web Application
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }} className="text-gradient">
                FinTrack – Personal Expense Tracker
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                A modern expense tracking web application that helps users manage income, expenses, analytics, and financial reports. Recruiters and clients can use the live simulator on the right to test transaction management.
              </p>

              {/* Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {['React.js', 'JavaScript', 'CSS3', 'Framer Motion', 'Context API'].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '0.35rem 0.8rem',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      fontWeight: 500,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features List */}
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Key Features
              </h4>
              <div
                className="features-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.75rem 1.5rem',
                  marginBottom: '2.5rem',
                }}
              >
                {features.map((feature) => (
                  <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="project-ctas" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                onClick={() => {
                  const el = document.getElementById('fintrack-demo');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="btn btn-primary"
              >
                Live Preview Widget
                <ArrowUpRight size={16} />
              </button>
              <a
                href="https://github.com/Minhaj-vennakkodan/expense-tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub Code
              </a>
            </div>
          </div>

          {/* Project Interactive Widget Right */}
          <div
            id="fintrack-demo"
            className="glass-panel fintrack-widget"
            style={{
              padding: '1.75rem',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              background: 'rgba(10, 15, 30, 0.7)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            }}
          >
            {/* Header / Title */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <PieChart size={18} style={{ color: 'var(--accent-blue)' }} />
                <span style={{ fontWeight: 700, fontSize: '0.95rem', letterSpacing: '-0.01em' }}>FinTrack Simulator</span>
              </div>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: '#4ade80',
                  background: 'rgba(74, 222, 128, 0.1)',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '4px',
                }}
              >
                Active Demo
              </span>
            </div>

            {/* Income & Expense Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  background: 'rgba(16, 185, 129, 0.06)',
                  border: '1px solid rgba(16, 185, 129, 0.12)',
                }}
              >
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.2rem' }}>Income</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10b981' }}>${income.toFixed(2)}</span>
              </div>
              <div
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  background: 'rgba(239, 68, 68, 0.06)',
                  border: '1px solid rgba(239, 68, 68, 0.12)',
                }}
              >
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.2rem' }}>Expenses</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ef4444' }}>${expense.toFixed(2)}</span>
              </div>
            </div>

            {/* Balance Card */}
            <div
              style={{
                padding: '1rem',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block' }}>Net Balance</span>
                <span style={{ fontSize: '1.3rem', fontWeight: 800, color: balance >= 0 ? 'var(--text-primary)' : '#ef4444' }}>
                  ${balance.toFixed(2)}
                </span>
              </div>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: balance >= 0 ? 'rgba(59, 130, 246, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: balance >= 0 ? 'var(--accent-blue)' : '#ef4444',
                }}
              >
                <DollarSign size={16} />
              </div>
            </div>

            {/* Quick Chart breakdown (interactive progress bars) */}
            {expense > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Expense Breakdown</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {Object.entries(categoryTotals).map(([catName, totalAmt]) => {
                    const percent = Math.round((totalAmt / totalExpenseAmount) * 100);
                    let color = '#3b82f6';
                    if (catName === 'Food') color = '#ef4444';
                    else if (catName === 'Housing') color = '#8b5cf6';
                    else if (catName === 'Leisure') color = '#ec4899';
                    else if (catName === 'Utilities') color = '#f59e0b';

                    return (
                      <div key={catName} style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
                          <span style={{ color: 'var(--text-secondary)' }}>{catName}</span>
                          <span style={{ fontWeight: 600 }}>${totalAmt.toFixed(0)} ({percent}%)</span>
                        </div>
                        <div style={{ height: '5px', width: '100%', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '999px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${percent}%`, background: color, borderRadius: '999px' }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* List / History */}
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>
                Recent Activities
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '140px', overflowY: 'auto', paddingRight: '0.25rem' }}>
                <AnimatePresence initial={false}>
                  {transactions.map((tx) => (
                    <motion.div
                      key={tx.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      style={{
                        padding: '0.5rem 0.75rem',
                        borderRadius: '6px',
                        background: 'rgba(255,255,255,0.01)',
                        border: '1px solid rgba(255,255,255,0.03)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span
                          style={{
                            width: '4px',
                            height: '18px',
                            borderRadius: '2px',
                            backgroundColor: tx.type === 'income' ? '#10b981' : '#ef4444',
                          }}
                        />
                        <div>
                          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block' }}>{tx.text}</span>
                          <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{tx.type === 'income' ? 'Income' : tx.category}</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: tx.type === 'income' ? '#10b981' : '#ef4444' }}>
                          {tx.type === 'income' ? '+' : '-'}${Math.abs(tx.amount).toFixed(0)}
                        </span>
                        <button
                          onClick={() => deleteTransaction(tx.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--text-muted)',
                            cursor: 'pointer',
                            padding: '0.1rem',
                            display: 'flex',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#ef4444')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {transactions.length === 0 && (
                  <div style={{ textAlign: 'center', padding: '1rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    No transactions recorded. Add one below!
                  </div>
                )}
              </div>
            </div>

            {/* Quick Add Form */}
            <form onSubmit={addTransaction} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.5rem' }}>
                <input
                  type="text"
                  placeholder="Activity e.g. Uber"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  style={{
                    padding: '0.45rem 0.75rem',
                    fontSize: '0.75rem',
                    background: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '6px',
                    color: '#fff',
                  }}
                />
                <input
                  type="number"
                  placeholder="Amount ($)"
                  value={amt}
                  onChange={(e) => setAmt(e.target.value)}
                  style={{
                    padding: '0.45rem 0.75rem',
                    fontSize: '0.75rem',
                    background: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '6px',
                    color: '#fff',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '0.5rem' }}>
                {/* Type Selection */}
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  style={{
                    padding: '0.45rem 0.5rem',
                    fontSize: '0.75rem',
                    background: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '6px',
                    color: '#fff',
                  }}
                >
                  <option value="expense" style={{ background: 'var(--bg-primary)' }}>Expense</option>
                  <option value="income" style={{ background: 'var(--bg-primary)' }}>Income</option>
                </select>

                {/* Category Selection */}
                {type === 'expense' ? (
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{
                      padding: '0.45rem 0.5rem',
                      fontSize: '0.75rem',
                      background: 'rgba(0,0,0,0.3)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '6px',
                      color: '#fff',
                    }}
                  >
                    <option value="Food" style={{ background: 'var(--bg-primary)' }}>Food</option>
                    <option value="Housing" style={{ background: 'var(--bg-primary)' }}>Housing</option>
                    <option value="Leisure" style={{ background: 'var(--bg-primary)' }}>Leisure</option>
                    <option value="Utilities" style={{ background: 'var(--bg-primary)' }}>Utilities</option>
                  </select>
                ) : (
                  <div
                    style={{
                      padding: '0.45rem 0.5rem',
                      fontSize: '0.75rem',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.04)',
                      borderRadius: '6px',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    Category: Job
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', gap: '0.25rem', width: '100%', borderRadius: '6px' }}
              >
                <Plus size={14} />
                Add Transaction
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Media Queries for responsive grid layouts */}
      <style>{`
        @media (max-width: 992px) {
          .project-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            padding: 2rem !important;
          }
        }
        @media (max-width: 576px) {
          .project-grid-layout {
            padding: 1.25rem !important;
            gap: 1.75rem !important;
          }
          .fintrack-widget {
            padding: 1rem !important;
            gap: 1.25rem !important;
          }
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 0.6rem !important;
          }
          .project-ctas {
            flex-direction: column !important;
          }
          .project-ctas a, .project-ctas button {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
