import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    highlight: 'Everything to get going',
    features: ['1,000 operations', 'Basic workflows', 'Community support', 'Email summaries'],
    cta: 'Start free',
  },
  {
    name: 'Growth',
    price: '$49',
    period: '/mo',
    highlight: 'For growing teams',
    features: ['100k operations', 'Advanced rules', 'Priority support', 'Audit logs'],
    cta: 'Start 14‑day trial',
    popular: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    highlight: 'Large volumes & SSO',
    features: ['Unlimited ops', 'SAML SSO', 'Dedicated support', 'On-prem options'],
    cta: 'Contact sales',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Pay for usage. No long-term contracts. Cancel anytime.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 backdrop-blur ${
                tier.popular
                  ? 'border-emerald-400/30 bg-emerald-400/10'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-6 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2 py-0.5 text-xs text-emerald-300">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-medium text-white">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-white">{tier.price}</span>
                <span className="text-white/60">{tier.period}</span>
              </div>
              <p className="mt-2 text-sm text-white/70">{tier.highlight}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-white/80">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-emerald-400/15 text-emerald-300">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-xl px-4 py-3 font-medium transition ${
                tier.popular
                  ? 'bg-white text-slate-900 hover:shadow-xl'
                  : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
