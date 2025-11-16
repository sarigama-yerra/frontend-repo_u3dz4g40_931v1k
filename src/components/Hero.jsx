import React from 'react'
import Spline from '@splinetool/react-spline'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [open, setOpen] = React.useState(false)

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14 } },
  }

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[var(--brand-bg)]">
      {/* Top Navigation */}
      <header className="relative z-20">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="h-8 w-8 rounded-full bg-gradient-to-br from-[var(--gradient-1)] via-[var(--gradient-2)] to-[var(--gradient-3)] shadow-sm"
              />
              <span className="text-xl font-bold tracking-tight text-[var(--brand-ink)]">azen</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--brand-ink)]/80">
              <a href="#services" className="hover:text-[var(--brand-ink)] transition-colors">Services</a>
              <a href="#work" className="hover:text-[var(--brand-ink)] transition-colors">Work</a>
              <a href="#contact" className="hover:text-[var(--brand-ink)] transition-colors">Contact</a>
              <a href="#cta" className="hover-shine inline-flex items-center rounded-full bg-[var(--brand-primary)] px-4 py-2 text-white shadow-sm hover:bg-[var(--brand-primary-hover)] transition-colors">Book a demo</a>
            </nav>
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--brand-border)]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-3 flex flex-col gap-2 rounded-lg border border-[var(--brand-border)] p-3 md:hidden bg-[var(--brand-surface)]"
            >
              <a href="#services" className="px-2 py-2 rounded hover:bg-[var(--brand-surface-2)]" onClick={() => setOpen(false)}>Services</a>
              <a href="#work" className="px-2 py-2 rounded hover:bg-[var(--brand-surface-2)]" onClick={() => setOpen(false)}>Work</a>
              <a href="#contact" className="px-2 py-2 rounded hover:bg-[var(--brand-surface-2)]" onClick={() => setOpen(false)}>Contact</a>
              <a href="#cta" className="px-2 py-2 rounded bg-[var(--brand-primary)] text-white text-center hover:bg-[var(--brand-primary-hover)]" onClick={() => setOpen(false)}>Book a demo</a>
            </motion.div>
          )}
        </div>
      </header>

      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--brand-bg)]" />

      {/* Hero Copy */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-10 md:pt-16 lg:pt-24">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-white/70 px-3 py-1 text-xs text-[var(--brand-ink)]/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[var(--gradient-1)] via-[var(--gradient-2)] to-[var(--gradient-3)]" />
            AI Agent Studio for modern brands
          </motion.span>
          <motion.h1 variants={fadeUp} className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--brand-ink)] sm:text-5xl md:text-6xl">
            Build voice and chat agents that feel effortless
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-lg text-[var(--brand-ink-muted)]">
            Azen designs, trains, and deploys AI agents that convert. From concierge voice flows to autonomous support, we ship production systems that sound human—backed by measurable ROI.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
            <motion.a whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} href="#cta" className="hover-shine inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] px-5 py-3 text-white shadow-sm hover:bg-[var(--brand-primary-hover)] transition-colors">
              Get a proposal
            </motion.a>
            <motion.a whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} href="#work" className="inline-flex items-center justify-center rounded-full border border-[var(--brand-border-strong)] bg-[var(--brand-surface)] px-5 py-3 text-[var(--brand-ink)] hover:bg-[var(--brand-surface-2)] transition-colors">
              See our work
            </motion.a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-6 text-xs text-[var(--brand-ink-subtle)]">
            <div className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-green-500" />Live in production</div>
            <div>24/7 voice + chat • Multilingual • SOC2-ready</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
