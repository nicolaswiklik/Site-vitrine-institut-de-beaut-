import { Clock, Link2, MapPin, Phone } from 'lucide-react'
import { openingHours, site } from '../data/site'
import { InstagramIcon } from './icons'
import Button from './Button'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const { street, zip, city } = site.address
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(`${street}, ${zip} ${city}`)}&output=embed`

function Item({ icon: Icon, label, children }) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-gold-deep">
        <Icon size={20} aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-cocoa-soft">{label}</h3>
        <div className="mt-1 text-[17px] text-cocoa">{children}</div>
      </div>
    </li>
  )
}

export default function Contact() {
  const today = new Date().toLocaleDateString('fr-FR', { weekday: 'long' })
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-sand/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title="Venez nous rencontrer"
            text={`Retrouvez l’institut au cœur de ${city}. Une question ? Écrivez-nous sur Instagram ou réservez directement en ligne sur Planity.`}
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <ul className="space-y-7 rounded-2xl bg-ivory p-7 shadow-soft sm:p-9">
              <Item icon={MapPin} label="Adresse">
                <address className="not-italic">
                  {street}
                  <br />
                  {zip} {city}
                </address>
              </Item>
              {site.phone && (
                <Item icon={Phone} label="Téléphone">
                  <a href={`tel:${site.phoneHref}`} className="underline decoration-gold/60 underline-offset-4 hover:decoration-gold">
                    {site.phone}
                  </a>
                </Item>
              )}
              <Item icon={InstagramIcon} label="Instagram">
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
                >
                  {site.instagramHandle}
                </a>
              </Item>
              <Item icon={Link2} label="Tous les liens">
                <a
                  href={site.linktreeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
                >
                  linktr.ee/Artdesthetique
                </a>
              </Item>
              {openingHours.length > 0 && (
              <Item icon={Clock} label="Horaires">
                <table className="mt-1 w-full max-w-xs text-[15px]">
                  <caption className="sr-only">Horaires d’ouverture</caption>
                  <tbody>
                    {openingHours.map(({ day, hours }) => (
                      <tr key={day} className={day.toLowerCase() === today ? 'font-semibold' : 'text-cocoa-soft'}>
                        <th scope="row" className="py-1 pr-6 text-left [font-weight:inherit]">{day}</th>
                        <td className="py-1 text-right">{hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Item>
              )}
              <li>
                <Button href={site.bookingUrl} className="w-full sm:w-auto">
                  Découvrir les disponibilités
                </Button>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120} className="min-h-[22rem] overflow-hidden rounded-2xl bg-sand shadow-soft">
            <iframe
              title={`Carte Google Maps : ${site.name}, ${street}, ${city}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-full min-h-[22rem] w-full border-0"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
