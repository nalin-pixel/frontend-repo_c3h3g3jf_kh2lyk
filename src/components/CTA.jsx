import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Deploy stronger defenses today</h2>
          <p className="mt-4 text-slate-300">Start your free trial in minutes. No credit card required.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 flex max-w-md items-center gap-3">
            <input type="email" required placeholder="Work email" className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
            <button className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-900 hover:bg-emerald-400">Get started</button>
          </form>
          <p className="mt-3 text-xs text-slate-400">By signing up you agree to our Terms and Privacy Policy.</p>
        </motion.div>
      </div>
    </section>
  )
}
