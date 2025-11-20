import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-[#f5efe6] border border-[#6a1e2f]/20 p-8 md:p-12 shadow-[0_10px_40px_rgba(43,13,22,0.08)]"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2b0d16]">Where warmth meets craft</h2>
              <p className="mt-4 text-[#5a463f] leading-relaxed">At Cher’ole, every cup, loaf, and layer is handcrafted — thoughtful and slow. We source fresh ingredients, roast with care, and bake with patience. A boutique space for quiet mornings, hushed conversations, and the simple luxury of time.</p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="rounded-2xl bg-white/70 border border-[#6a1e2f]/10 p-4">
                  <div className="text-[#6a1e2f] font-serif text-xl">12h</div>
                  <div className="text-xs text-[#5a463f]/80">Cold brew steep</div>
                </div>
                <div className="rounded-2xl bg-white/70 border border-[#6a1e2f]/10 p-4">
                  <div className="text-[#6a1e2f] font-serif text-xl">48h</div>
                  <div className="text-xs text-[#5a463f]/80">Sourdough prove</div>
                </div>
                <div className="rounded-2xl bg-white/70 border border-[#6a1e2f]/10 p-4">
                  <div className="text-[#6a1e2f] font-serif text-xl">100%</div>
                  <div className="text-xs text-[#5a463f]/80">Handcrafted</div>
                </div>
              </div>
            </div>
            <div className="relative h-80 md:h-full min-h-[22rem] rounded-3xl overflow-hidden border border-[#6a1e2f]/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop"
                alt="Artisanal coffee and bakery at Cher’ole"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2b0d16]/20 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
