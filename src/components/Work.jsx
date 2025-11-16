import React from 'react'

const logos = [
  'Acme Co.',
  'Nova Retail',
  'Helix Health',
  'Orbit Finance',
  'Nimbus AI',
  'Atlas Travel',
]

export default function Work() {
  return (
    <section id="work" className="relative w-full bg-gradient-to-b from-[var(--brand-bg)] to-[var(--brand-surface-2)] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--brand-ink)] sm:text-4xl">Selected results</h2>
            <p className="mt-2 text-[var(--brand-ink-muted)] max-w-2xl">We partner with growth-stage teams to launch AI agents that actually move metrics. Here are outcomes we recently delivered.</p>
          </div>
          <div className="flex gap-3 text-sm">
            <div className="rounded-full border border-[var(--brand-border-strong)] bg-[var(--brand-surface)] px-3 py-1">+42% conversion</div>
            <div className="rounded-full border border-[var(--brand-border-strong)] bg-[var(--brand-surface)] px-3 py-1">-57% ticket volume</div>
            <div className="rounded-full border border-[var(--brand-border-strong)] bg-[var(--brand-surface)] px-3 py-1">NPS +18</div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)]">
              <div className="aspect-[16/10] bg-gradient-to-br from-[var(--gradient-1-100)] via-[var(--gradient-2-100)] to-[var(--gradient-3-100)]" />
              <div className="p-6">
                <div className="text-xs uppercase tracking-wide text-[var(--brand-ink-subtle)]">Case Study</div>
                <h3 className="mt-1 text-lg font-semibold text-[var(--brand-ink)]">Autonomous support for a global retailer</h3>
                <p className="mt-2 text-sm text-[var(--brand-ink-muted)]">We built a multilingual voice agent handling 65% of inquiries end-to-end, integrated with their order systems.</p>
                <a href="#cta" className="mt-4 inline-flex text-sm font-medium text-[var(--brand-ink)] hover:underline">Read more →</a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((name) => (
            <div key={name} className="flex items-center justify-center rounded-lg border border-[var(--brand-border)] bg-[var(--brand-surface)] p-4 text-sm text-[var(--brand-ink-muted)]">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
