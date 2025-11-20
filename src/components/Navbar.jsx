import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#menu', label: 'Signature Menu' },
    { href: '#featured', label: 'Featured' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#visit', label: 'Visit Us' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-2xl border border-white/10 bg-[#2b0d16]/60 backdrop-blur-md text-[#f5efe6] shadow-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-[#f5efe6] text-[#2b0d16] flex items-center justify-center font-semibold">C</div>
              <div className="text-lg font-serif tracking-wide">Cher’ole</div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-[#f5efe6]/90 hover:text-white transition-colors">{l.label}</a>
              ))}
              <a href="#menu" className="rounded-full bg-[#f5efe6] text-[#2b0d16] px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-shadow">Explore Menu</a>
            </nav>

            <button className="md:hidden text-[#f5efe6]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-6 pb-6">
              <div className="flex flex-col gap-3">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-[#f5efe6]/90 py-2 border-b border-white/10">{l.label}</a>
                ))}
                <a href="#menu" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-[#f5efe6] text-[#2b0d16] px-4 py-2 text-sm font-medium text-center">Explore Menu</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
