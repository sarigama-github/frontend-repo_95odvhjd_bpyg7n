import { Coffee, Croissant, Sandwich } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    key: 'coffee',
    title: 'Artisanal Coffee',
    icon: Coffee,
    image: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?q=80&w=1200&auto=format&fit=crop',
    desc: 'Single-origin pours, slow extractions, silken crema.'
  },
  {
    key: 'bakery',
    title: 'Homemade Bakery',
    icon: Croissant,
    image: 'https://images.unsplash.com/photo-1675092637098-363c551547c0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIb21lbWFkZSUyMEJha2VyeXxlbnwwfDB8fHwxNzYzNjM0MTc5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    desc: 'Buttery layers, warm crumbs, small-batch bakes.'
  },
  {
    key: 'sandwich',
    title: 'Gourmet Sandwiches',
    icon: Sandwich,
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1200&auto=format&fit=crop',
    desc: 'Sourdough, seasonal fillings, generous textures.'
  },
]

export default function SignatureMenu() {
  return (
    <section id="menu" className="py-20 bg-[#f5efe6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2b0d16]">Signature Menu</h2>
          <p className="mt-3 text-[#5a463f]">Three crafts. One cozy luxury.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ key, title, icon: Icon, image, desc }, idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-[#6a1e2f]/20 bg-white shadow-[0_10px_40px_rgba(43,13,22,0.08)]"
            >
              <div className="relative h-60 overflow-hidden">
                <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b0d16]/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-[#6a1e2f]">
                  <Icon size={20} />
                  <h3 className="font-serif text-xl">{title}</h3>
                </div>
                <p className="mt-2 text-sm text-[#5a463f]">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
