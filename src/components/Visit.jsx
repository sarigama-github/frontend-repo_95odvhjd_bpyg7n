import { motion } from 'framer-motion'

export default function Visit() {
  return (
    <section id="visit" className="bg-[#f5efe6] pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-[#6a1e2f]/20" />
        <div className="grid md:grid-cols-2 gap-8 mt-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border border-[#6a1e2f]/20 shadow-[0_10px_40px_rgba(43,13,22,0.08)]"
          >
            <iframe
              title="Cher’ole Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086254239872!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
              width="100%"
              height="380"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className=""
          >
            <h3 className="font-serif text-3xl text-[#2b0d16]">Visit Us</h3>
            <p className="mt-3 text-[#5a463f]">A quiet corner for long mornings and slow afternoons.</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-4 border border-[#6a1e2f]/20">
                <div className="text-xs text-[#5a463f]/70">Weekdays</div>
                <div className="text-[#2b0d16] font-serif text-xl">7:30 — 19:00</div>
              </div>
              <div className="rounded-2xl bg-white p-4 border border-[#6a1e2f]/20">
                <div className="text-xs text-[#5a463f]/70">Weekends</div>
                <div className="text-[#2b0d16] font-serif text-xl">8:00 — 20:00</div>
              </div>
            </div>

            <div className="mt-6 text-[#2b0d16]">
              <p className="font-medium">123 Boutique Lane, Your City</p>
              <p className="text-[#5a463f]">Near the old bookshop</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
