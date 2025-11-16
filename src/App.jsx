import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Hero />
      <Services />
      <Work />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
