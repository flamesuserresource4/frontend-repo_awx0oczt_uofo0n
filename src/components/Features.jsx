import React from 'react';
import { Shield, Zap, LineChart, Workflow } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant automation',
    desc: 'Trigger payouts, invoices, and reconciliations with rules or webhooks. Reduce manual steps to zero.',
  },
  {
    icon: LineChart,
    title: 'Live analytics',
    desc: 'Unified ledger with real-time dashboards. Forecast cash flow and spot anomalies instantly.',
  },
  {
    icon: Shield,
    title: 'Bank-grade security',
    desc: 'End-to-end encryption, role-based access, audit logs, and continuous monitoring built-in.',
  },
  {
    icon: Workflow,
    title: 'Integrations that click',
    desc: 'Connect ERPs, banks, and data warehouses with native connectors and a clean API.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Automation without compromise</h2>
          <p className="mt-3 text-white/70">Everything teams need to move faster with control and clarity.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition hover:bg-white/[0.06]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-400/20 to-cyan-400/20 text-emerald-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
