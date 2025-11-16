import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--brand-border)] bg-[var(--brand-surface)]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="h-7 w-7 rounded-full bg-gradient-to-br from-[var(--gradient-1)] via-[var(--gradient-2)] to-[var(--gradient-3)]" />
            <span className="text-sm font-semibold text-[var(--brand-ink)]">azen</span>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-sm text-[color:var(--brand-ink-subtle)]">© {new Date().getFullYear()} Azen Digital. All rights reserved.</motion.div>
        </div>
      </div>
    </footer>
  )
}
