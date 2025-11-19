import { ShieldCheck, Lock, Server, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: ShieldCheck,
    title: 'Real-time threat detection',
    desc: 'Stream-based analysis inspects traffic in milliseconds to block exploits and anomalies before they spread.'
  },
  {
    icon: Lock,
    title: 'Zero-trust access',
    desc: 'Granular, identity-aware policies across apps, services, and APIs with continuous verification.'
  },
  {
    icon: Server,
    title: 'Agentless coverage',
    desc: 'Deploy in minutes via sidecar or gateway. No invasive agents required on workloads.'
  },
  {
    icon: Sparkles,
    title: 'AI-guided remediation',
    desc: 'Recommendations and automated playbooks reduce mean-time-to-contain from hours to minutes.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to stay secure</h2>
          <p className="mt-4 text-slate-300">Built for security teams that want powerful controls without the complexity.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-emerald-400/40 hover:bg-emerald-400/5 transition-colors"
            >
              <div className="relative">
                <div className="absolute -inset-2 rounded-xl bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <f.icon className="relative h-7 w-7 text-emerald-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
