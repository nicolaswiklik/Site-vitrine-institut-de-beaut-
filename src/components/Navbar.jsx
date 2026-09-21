import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, site } from '../data/site'
import Button from './Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fermeture du menu mobile avec la touche Échap
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-sand-deep/60 bg-ivory/95 backdrop-blur' : 'bg-ivory/80 backdrop-blur-sm'
      }`}
    >
      <nav aria-label="Navigation principale" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <a href="#accueil" onClick={close} className="flex flex-col leading-none">
          <span className="font-serif text-2xl font-semibold tracking-tight text-cocoa">{site.name}</span>
          <span className="mt-1 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.22em] text-gold-deep sm:tracking-[0.3em]">
            {site.baseline}
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-cocoa/85 transition-colors hover:text-cocoa after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button
            href={site.bookingUrl}
            aria-label="Prendre rendez-vous"
            className="whitespace-nowrap !px-4 !py-2.5 sm:!px-5"
          >
            <span className="sm:hidden" aria-hidden="true">Réserver</span>
            <span className="hidden sm:inline">Prendre rendez-vous</span>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-cocoa transition-colors hover:bg-sand focus-visible:outline-2 focus-visible:outline-gold lg:hidden"
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-sand-deep/60 bg-ivory px-4 pb-6 pt-2 lg:hidden"
      >
        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className="block border-b border-sand-deep/50 py-4 font-serif text-2xl text-cocoa"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button href={site.bookingUrl} className="mt-6 w-full">
          Prendre rendez-vous
        </Button>
      </div>
    </header>
  )
}
