import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Logos from './components/Logos';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-tr from-emerald-400 to-cyan-400" />
            <span className="font-semibold tracking-tight">FluxPay</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Docs</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden rounded-lg border border-white/15 px-3 py-2 text-sm text-white/90 hover:bg-white/10 sm:inline-flex">Sign in</button>
            <button className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:shadow-lg">Get started</button>
          </div>
        </div>
      </header>

      {/* Content sections */}
      <main>
        <Hero />
        <Logos />
        <Features />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
