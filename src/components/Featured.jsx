import { motion } from 'framer-motion'

const featured = [
  {
    title: 'Bestseller: Vanilla Bean Latte',
    image: 'https://images.unsplash.com/photo-1597989443292-339b71e55e02?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCZXN0c2VsbGVyJTNBJTIwVmFuaWxsYSUyMEJlYW4lMjBMYXR0ZXxlbnwwfDB8fHwxNzYzNjM0MTc5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    text: 'Silky-smooth, aromatic, a gentle hug in a cup.'
  },
  {
    title: 'Almond Croissant',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1600&auto=format&fit=crop',
    text: 'Buttery layers with toasted almond cream.'
  },
  {
    title: 'Sourdough Caprese',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1600&auto=format&fit=crop',
    text: 'Heirloom tomatoes, basil pesto, fresh mozzarella.'
  }
]

export default function Featured() {
  return (
    <section id="featured" className="py-20 bg-[#f5efe6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2b0d16]">Featured Items</h2>
          <p className="mt-3 text-[#5a463f]">A few of our quiet stars.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-3xl overflow-hidden bg-white border border-[#6a1e2f]/20 shadow-[0_10px_40px_rgba(43,13,22,0.08)]"
            >
              <div className="h-56 overflow-hidden">
                <img src={f.image} alt={f.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-[#2b0d16]">{f.title}</h3>
                <p className="mt-2 text-sm text-[#5a463f]">{f.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
