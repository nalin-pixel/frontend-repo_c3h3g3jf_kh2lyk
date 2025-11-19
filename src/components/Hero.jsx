import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.15),transparent_35%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8 items-center">
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Zero-Trust Security Platform
            </span>
            <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Secure every endpoint with confidence
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Aegis Secure is a modern security SaaS that protects your apps, APIs, and infrastructure with real-time threat detection, automated remediation, and seamless compliance.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="inline-flex items-center rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-900 hover:bg-emerald-400 transition-colors">
                Start free trial
              </a>
              <a href="#features" className="inline-flex items-center rounded-xl border border-white/10 px-5 py-3 font-semibold text-white/90 hover:bg-white/5">
                See features
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-400">
              <div className="flex -space-x-2">
                <img className="h-8 w-8 rounded-full ring-2 ring-slate-900" src="https://i.pravatar.cc/80?img=13" />
                <img className="h-8 w-8 rounded-full ring-2 ring-slate-900" src="https://i.pravatar.cc/80?img=5" />
                <img className="h-8 w-8 rounded-full ring-2 ring-slate-900" src="https://i.pravatar.cc/80?img=22" />
              </div>
              Trusted by 2,000+ teams
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative aspect-square w-full">
          <div className="absolute inset-0 rounded-[28px] border border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 to-transparent" />
          <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </motion.div>
      </div>
    </section>
  )
}
