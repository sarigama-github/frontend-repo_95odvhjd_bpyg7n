import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import SignatureMenu from './components/SignatureMenu'
import Featured from './components/Featured'
import Gallery from './components/Gallery'
import Visit from './components/Visit'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#2b0d16]">
      {/* Grain/texture overlay for warmth */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,239,230,0.06),transparent_50%)]"/>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SignatureMenu />
        <Featured />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </div>
  )
}

export default App
