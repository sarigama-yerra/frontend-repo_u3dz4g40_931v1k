import React from 'react'
import { Bot, Headphones, BarChart3, Workflow } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Bot,
    title: 'Custom AI Agents',
    desc: 'Conversational voice and chat agents tailored to your brand, trained on your data.',
  },
  {
    icon: Headphones,
    title: 'AI-Powered Support',
    desc: 'Deflect tickets with intelligent triage, auto-responses, and seamless human handoff.',
  },
  {
    icon: Workflow,
    title: 'Automation & Integrations',
    desc: 'We connect your stack: CRMs, helpdesks, data warehouses, and internal tools.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Optimization',
    desc: 'Real-time dashboards and continuous tuning to maximize conversion and CSAT.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-[var(--brand-bg)] py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(500px_200px_at_20%_0%,rgba(37,99,235,0.08),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(500px_200px_at_80%_100%,rgba(56,189,248,0.08),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--brand-ink)] sm:text-4xl">What we do</h2>
            <p className="mt-2 text-[color:var(--brand-ink-muted)] max-w-xl">From idea to production in weeks. We design, build, and operate AI agents that delight users and deliver results.</p>
          </div>
          <a href="#cta" className="hidden sm:inline-flex items-center rounded-full bg-[var(--brand-primary)] px-4 py-2 text-white hover:bg-[var(--brand-primary-hover)]">Book a demo</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="group rounded-2xl border border-[var(--brand-border)] p-6 transition-all hover:shadow-xl hover:-translate-y-1 bg-[var(--brand-surface)]"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-[var(--gradient-1)] via-[var(--gradient-2)] to-[var(--gradient-3)] p-3 text-white shadow-sm">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--brand-ink)]">{title}</h3>
              <p className="mt-2 text-sm text-[var(--brand-ink-muted)]">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
