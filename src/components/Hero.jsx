import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-[#2b0d16]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2b0d16] pointer-events-none" />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-[#f5efe6]">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-[#f5efe6]/80">Premium Café • Boutique Bakery</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-serif leading-tight">Cher’ole — Crafted with Passion</h1>
          <p className="mt-4 text-base md:text-lg text-[#f5efe6]/90 max-w-2xl">Premium Coffee • Homemade Bakery • Gourmet Sandwiches</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#menu" className="rounded-full bg-[#f5efe6] text-[#2b0d16] px-6 py-3 text-sm font-medium shadow-md hover:shadow-lg transition-all">Explore Menu</a>
            <a href="#visit" className="rounded-full border border-[#f5efe6]/40 text-[#f5efe6] px-6 py-3 text-sm font-medium hover:bg-white/10 transition-all">Visit Us</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
