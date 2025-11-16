import React from 'react'

export default function CTA() {
  return (
    <section id="cta" className="relative w-full bg-[var(--brand-cta-bg)] py-20 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.5),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.4),transparent_60%),radial-gradient(ellipse_at_top_left,rgba(251,146,60,0.4),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s design your agent roadmap</h2>
            <p className="mt-3 max-w-2xl text-white/80">Book a 30‑minute session to map impact, integrations, and timelines. We’ll follow up with a tailored proposal within 48 hours.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-[var(--brand-ink)] hover:bg-white/90 transition-colors">Book a demo</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-white hover:bg-white/10 transition-colors">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
