import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    features: ['Up to 5 services', 'Basic anomaly detection', 'Community support'],
    cta: 'Start free'
  },
  {
    name: 'Pro',
    price: '$49',
    period: 'per month',
    features: ['Unlimited services', 'Advanced detection', 'Zero-trust access', 'Email support'],
    cta: 'Start trial',
    highlight: true
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    period: '',
    features: ['SLA + SSO', 'SOC 2 & ISO controls', 'Custom playbooks', 'Dedicated support'],
    cta: 'Contact sales'
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-300">Choose a plan that scales with your team.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative rounded-2xl border ${t.highlight ? 'border-emerald-400/50 bg-emerald-400/10' : 'border-white/10 bg-white/5'} p-6`}
            >
              {t.highlight && (
                <div className="absolute -top-3 right-6 rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-slate-900">Popular</div>
              )}
              <h3 className="text-xl font-semibold text-white">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">{t.price}</span>
                <span className="text-sm text-slate-300">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {t.features.map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold transition-colors ${t.highlight ? 'bg-emerald-400 text-slate-900 hover:bg-emerald-300' : 'bg-white/10 text-white hover:bg-white/20'}`}>{t.cta}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
