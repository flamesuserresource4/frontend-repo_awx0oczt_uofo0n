import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleScrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background accent gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-400/20 via-cyan-400/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-400/10 via-purple-400/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 sm:py-20 md:grid-cols-2 lg:gap-16">
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            New: Automated reconciliation and AI-driven insights
          </div>
          <h1 className="text-balance font-semibold tracking-tight text-white [text-wrap:balance] text-4xl sm:text-5xl lg:text-6xl">
            Finance automation that moves money and metrics forward
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Streamline payouts, reconcile in real-time, and surface opportunities with a glass‑morphic fintech experience. Secure. Compliant. Effortless.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={handleScrollToPricing}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-slate-900 shadow/20 shadow-xl transition hover:shadow-2xl hover:-translate-y-0.5"
            >
              Start free trial
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              See how it works
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs text-white/60">
            <span className="rounded-md bg-emerald-400/10 px-2 py-1 text-emerald-300">PCI DSS</span>
            <span className="rounded-md bg-emerald-400/10 px-2 py-1 text-emerald-300">SOC 2</span>
            <span>No credit card required</span>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] md:h-[560px]">
          {/* 3D Spline Scene */}
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur">
            <Spline
              scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Subtle sheen overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/10 via-transparent to-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
