import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Download, Sparkles, Shield, Zap, Monitor, Laptop, Smartphone, Tablet, Info } from 'lucide-react'

const devices = [
  { name: 'Desktop', icon: Monitor },
  { name: 'Laptop', icon: Laptop },
  { name: 'Tablet', icon: Tablet },
  { name: 'Mobile', icon: Smartphone },
]

const features = [
  { title: 'Blazing Fast', desc: 'Optimized performance for instant playback and smooth navigation.', icon: Zap },
  { title: 'Secure & Private', desc: 'Your data stays yours. Built with modern security best practices.', icon: Shield },
  { title: 'Sleek UI', desc: 'A modern, neon-infused interface designed for focus and flow.', icon: Sparkles },
]

function App() {
  const handleDownload = () => {
    const el = document.getElementById('download')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[#080510] text-white overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh] grid place-items-center">
        {/* Spline 3D background */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Subtle gradient overlay (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />

        <div className="relative z-10 container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-sm text-purple-200 shadow-[0_0_30px_rgba(168,85,247,0.25)]"
            >
              <Sparkles size={16} className="text-purple-300" />
              Introducing
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-5 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
            >
              ZTUBE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-5 text-lg sm:text-xl text-purple-100/80 max-w-2xl mx-auto"
            >
              A next‑gen, neon‑smooth video experience. Download the app and step into the purple realm.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={handleDownload}
                className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-7 py-3 text-lg font-semibold shadow-[0_10px_40px_-10px_rgba(168,85,247,0.6)] transition-transform hover:scale-[1.03] active:scale-100"
              >
                <Download className="transition -translate-y-[1px] group-hover:translate-y-0" size={20} />
                Download ZTUBE
              </button>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-purple-100 hover:bg-white/10 transition"
              >
                <Info size={18} /> Learn more
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 text-sm text-purple-200/70"
            >
              Developer: NeonForge Labs • Version size: 48.7 MB • Supports macOS, Windows, Linux, iOS, Android
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="about" className="relative py-24 bg-gradient-to-b from-black to-[#0b0616]">
        <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden>
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full blur-3xl bg-purple-700/40" />
          <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full blur-3xl bg-fuchsia-600/30" />
        </div>

        <div className="relative container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center"
          >
            Built for speed. Designed for vibe.
          </motion.h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-purple-600/20 blur-2xl" />
                <f.icon className="text-purple-300" />
                <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-purple-100/80">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Compatibility */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/10 to-fuchsia-600/10 p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold">Compatibility</h3>
                <p className="mt-2 text-purple-100/80 max-w-xl">
                  ZTUBE runs seamlessly across devices. Enjoy a consistent, fluid experience everywhere.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {devices.map((d, i) => (
                  <motion.div
                    key={d.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="group rounded-xl border border-white/10 bg-white/5 p-4 text-center hover:bg-white/10 transition"
                  >
                    <d.icon className="mx-auto text-purple-300" />
                    <div className="mt-2 text-sm">{d.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="relative py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-600/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#1a0b2e] to-[#0c0719] p-8 md:p-12"
          >
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-purple-700/30 blur-2xl" />
            <div className="absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-fuchsia-600/20 blur-3xl" />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold">Download ZTUBE</h3>
                <p className="mt-3 text-purple-100/80">Version 1.0 • Size: 48.7 MB • Developer: NeonForge Labs</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 font-semibold hover:bg-purple-500 transition shadow-[0_10px_40px_-10px_rgba(168,85,247,0.6)]">
                    <Download size={18} /> macOS (DMG)
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 font-semibold hover:bg-purple-500 transition">
                    <Download size={18} /> Windows (EXE)
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 font-semibold hover:bg-purple-500 transition">
                    <Download size={18} /> Linux (AppImage)
                  </a>
                </div>
                <p className="mt-4 text-xs text-purple-200/70">Mobile downloads coming soon via App Store and Google Play.</p>
              </div>

              <div className="relative">
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-purple-200/70">Developer</div>
                    <div className="text-lg font-semibold">NeonForge Labs</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-purple-200/70">App Size</div>
                    <div className="text-lg font-semibold">48.7 MB</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-purple-200/70">Version</div>
                    <div className="text-lg font-semibold">1.0.0</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-purple-200/70">Compatibility</div>
                    <div className="text-sm font-semibold">macOS • Windows • Linux • iOS • Android</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40">
        <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-purple-200/70">© {new Date().getFullYear()} ZTUBE by NeonForge Labs</div>
          <div className="text-sm">
            <a href="#about" className="text-purple-300 hover:text-purple-200">About</a>
            <span className="mx-2 text-white/30">•</span>
            <a href="#download" className="text-purple-300 hover:text-purple-200">Download</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
