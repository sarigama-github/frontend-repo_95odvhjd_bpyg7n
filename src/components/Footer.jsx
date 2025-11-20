export default function Footer() {
  return (
    <footer className="bg-[#2b0d16] text-[#f5efe6]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-serif">Cher’ole — Crafted with Passion</div>
          <div className="flex items-center gap-4 text-[#f5efe6]/80">
            <a aria-label="Instagram" href="#" className="hover:text-white transition-colors">Instagram</a>
            <a aria-label="Facebook" href="#" className="hover:text-white transition-colors">Facebook</a>
            <a aria-label="TikTok" href="#" className="hover:text-white transition-colors">TikTok</a>
          </div>
        </div>
        <div className="text-xs text-[#f5efe6]/60 mt-6">© {new Date().getFullYear()} Cher’ole. All rights reserved.</div>
      </div>
    </footer>
  )
}
