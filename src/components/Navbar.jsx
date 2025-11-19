import { useState } from 'react'
import { ShieldCheck, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Customers', href: '#customers' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-emerald-500/20 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-emerald-500/20 blur-xl" />
                <ShieldCheck className="relative h-7 w-7 text-emerald-400" />
              </div>
              <span className="text-white font-semibold tracking-tight">Aegis Secure</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map(item => (
                <a key={item.label} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#pricing" className="inline-flex items-center rounded-lg bg-emerald-500/90 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400 transition-colors">
                Start free
              </a>
            </nav>
            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
              {navItems.map(item => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-slate-300 hover:text-white hover:bg-white/5">
                  {item.label}
                </a>
              ))}
              <a href="#pricing" onClick={() => setOpen(false)} className="block text-center rounded-lg bg-emerald-500/90 px-3 py-2 font-semibold text-slate-900 hover:bg-emerald-400">Start free</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
