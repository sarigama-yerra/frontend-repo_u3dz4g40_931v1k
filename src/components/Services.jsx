import React from 'react'
import { Bot, Headphones, BarChart3, Workflow } from 'lucide-react'

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
    <section id="services" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What we do</h2>
            <p className="mt-2 text-gray-600 max-w-xl">From idea to production in weeks. We design, build, and operate AI agents that delight users and deliver results.</p>
          </div>
          <a href="#cta" className="hidden sm:inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">Book a demo</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 p-6 transition-all hover:shadow-lg bg-white">
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400 p-3 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
