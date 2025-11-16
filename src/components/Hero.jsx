import React from 'react'
import Spline from '@splinetool/react-spline'
import { Menu, X } from 'lucide-react'

export default function Hero() {
  const [open, setOpen] = React.useState(false)

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-white">
      {/* Top Navigation */}
      <header className="relative z-20">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400" />
              <span className="text-xl font-bold tracking-tight">azen</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
              <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
              <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
              <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
              <a href="#cta" className="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 transition-colors">Book a demo</a>
            </nav>
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          {open && (
            <div className="mt-3 flex flex-col gap-2 rounded-lg border border-gray-200 p-3 md:hidden bg-white">
              <a href="#services" className="px-2 py-2 rounded hover:bg-gray-50" onClick={() => setOpen(false)}>Services</a>
              <a href="#work" className="px-2 py-2 rounded hover:bg-gray-50" onClick={() => setOpen(false)}>Work</a>
              <a href="#contact" className="px-2 py-2 rounded hover:bg-gray-50" onClick={() => setOpen(false)}>Contact</a>
              <a href="#cta" className="px-2 py-2 rounded bg-gray-900 text-white text-center" onClick={() => setOpen(false)}>Book a demo</a>
            </div>
          )}
        </div>
      </header>

      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white" />

      {/* Hero Copy */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-10 md:pt-16 lg:pt-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-700 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400" />
            AI Agent Studio for modern brands
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Build voice and chat agents that feel effortless
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Azen designs, trains, and deploys AI agents that convert. From concierge voice flows to autonomous support, we ship production systems that sound human—backed by measurable ROI.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
            <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-3 text-white hover:bg-gray-800 transition-colors">
              Get a proposal
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-gray-900 hover:bg-gray-50 transition-colors">
              See our work
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-green-500" />Live in production</div>
            <div>24/7 voice + chat • Multilingual • SOC2-ready</div>
          </div>
        </div>
      </div>
    </section>
  )
}
