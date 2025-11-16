import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative w-full bg-[var(--brand-cta-bg)] py-20 text-white">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(700px_300px_at_10%_10%,rgba(56,189,248,0.20),transparent_60%),radial-gradient(600px_260px_at_90%_80%,rgba(37,99,235,0.18),transparent_60%),radial-gradient(500px_220px_at_30%_90%,rgba(34,211,238,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s design your agent roadmap</motion.h2>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.05 }} className="mt-3 max-w-2xl text-white/80">Book a 30‑minute session to map impact, integrations, and timelines. We’ll follow up with a tailored proposal within 48 hours.</motion.p>
          </div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 }} className="flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-[var(--brand-ink)] hover:bg-white/90 transition-colors">Book a demo</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-white hover:bg-white/10 transition-colors">Contact sales</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
