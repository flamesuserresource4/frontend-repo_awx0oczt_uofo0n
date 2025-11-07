import React from 'react';

const logos = [
  { name: 'Atlas', path: 'M4 12h16M4 6h16M4 18h16' },
  { name: 'Pulse', path: 'M3 12h4l2 6 4-12 2 6h6' },
  { name: 'Nova', path: 'M12 2l3 7h7l-5.5 4 2.5 7-7-4-7 4 2.5-7L2 9h7z' },
  { name: 'Forge', path: 'M12 3v18M3 12h18' },
  { name: 'Flux', path: 'M2 12h20M12 2v20' },
];

const SvgLogo = ({ path }) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 text-white/70" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d={path} />
  </svg>
);

const Logos = () => {
  return (
    <section aria-label="Trusted by" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur">
          <p className="text-center text-xs uppercase tracking-wider text-white/50">Trusted by modern finance teams</p>
          <div className="mt-6 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
            {logos.map((l) => (
              <div key={l.name} className="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-white/70">
                <SvgLogo path={l.path} />
                <span className="text-sm">{l.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
