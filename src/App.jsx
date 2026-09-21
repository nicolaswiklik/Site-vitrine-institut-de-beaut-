import { useEffect, useState } from 'react'
import About from './components/About'
import CallToAction from './components/CallToAction'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import LegalPage from './components/LegalPage'
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'
import Services from './components/Services'

// Routage minimal par hash : "#/mentions-legales" et "#/confidentialite" affichent une page légale,
// tout autre hash (#prestations, #contact…) est une ancre de la page d'accueil.
const getLegalPage = () => {
  const m = window.location.hash.match(/^#\/(mentions-legales|confidentialite)$/)
  return m ? m[1] : null
}

export default function App() {
  const [legalPage, setLegalPage] = useState(getLegalPage)

  useEffect(() => {
    const onHash = () => setLegalPage(getLegalPage())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // Après un changement de page : haut de page pour les pages légales, ancre demandée sinon
  useEffect(() => {
    if (legalPage) {
      window.scrollTo(0, 0)
      return
    }
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [legalPage])

  return (
    <>
      <a
        href="#prestations"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cocoa focus:px-5 focus:py-3 focus:text-ivory"
      >
        Aller au contenu
      </a>
      <Navbar />
      {legalPage ? (
        <LegalPage page={legalPage} />
      ) : (
        <main>
          <Hero />
          <Services />
          <Gallery />
          <About />
          <Reviews />
          <CallToAction />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  )
}
