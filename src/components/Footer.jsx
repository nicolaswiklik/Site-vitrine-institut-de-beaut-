import { copy, navLinks, site } from '../data/site'
import { InstagramIcon } from './icons'

export default function Footer() {
  const { street, zip, city } = site.address
  return (
    <footer className="bg-[#2b1e18] text-ivory/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-serif text-3xl text-ivory">{site.name}</p>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-gold-light">{site.baseline}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Épilation des sourcils au fil, soins du visage, extensions de cils, maquillage permanent et onglerie à {site.city}.
          </p>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${site.instagramHandle}`}
            className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-gold-light hover:text-gold-light focus-visible:outline-2 focus-visible:outline-gold-light"
          >
            <InstagramIcon size={20} />
          </a>
        </div>

        <nav aria-label="Navigation du pied de page">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Navigation</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-gold-light">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Coordonnées</h2>
          <address className="mt-4 space-y-2.5 text-sm not-italic">
            <p>{street}<br />{zip} {city}</p>
            {site.phone && (
              <p>
                <a href={`tel:${site.phoneHref}`} className="transition-colors hover:text-gold-light">{site.phone}</a>
              </p>
            )}
            <p>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold-light">
                {site.instagramHandle}
              </a>
            </p>
            <p>
              <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="text-gold-light underline underline-offset-4 hover:text-ivory">
                Prendre rendez-vous
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="max-w-xl text-ivory/70">{copy.demoNotice}</p>
          <ul className="flex gap-5">
            <li><a href="#/mentions-legales" className="hover:text-gold-light">Mentions légales</a></li>
            <li><a href="#/confidentialite" className="hover:text-gold-light">Politique de confidentialité</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
