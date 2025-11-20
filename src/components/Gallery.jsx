import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1600&auto=format&fit=crop'
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-[#f5efe6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2b0d16]">Moodboard</h2>
          <p className="mt-3 text-[#5a463f]">Warm tones, natural textures, gentle light.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={src + i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="overflow-hidden rounded-2xl border border-[#6a1e2f]/20 bg-white shadow-[0_10px_40px_rgba(43,13,22,0.08)]"
            >
              <img src={src} alt="Cher’ole ambience" className="w-full h-48 md:h-56 object-cover hover:scale-[1.03] transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
