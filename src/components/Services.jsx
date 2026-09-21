import { Check } from 'lucide-react'
import { services, site } from '../data/site'
import Button from './Button'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Services() {
  return (
    <section id="prestations" aria-labelledby="prestations-title" className="bg-sand/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="prestations-title"
            eyebrow="Nos prestations"
            title="Des soins pensés pour vous"
            text="Quatre univers de beauté, réalisés avec précision et douceur. Tarifs indicatifs, adaptés après échange lors de votre rendez-vous."
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => (
            <Reveal as="li" key={service.id} delay={i * 90} className="flex">
              <article className="group flex w-full flex-col overflow-hidden rounded-2xl bg-ivory shadow-soft transition-shadow duration-300 hover:shadow-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    width="800"
                    height="600"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl text-cocoa">{service.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-cocoa-soft">{service.description}</p>
                  <p className="mt-5 flex items-baseline gap-2 border-t border-sand-deep/70 pt-5">
                    <span className="text-xs uppercase tracking-widest text-cocoa-soft">À partir de</span>
                    <span className="font-serif text-3xl font-semibold text-gold-deep">{service.price} €</span>
                  </p>
                  <Button
                    href={site.bookingUrl}
                    variant="secondary"
                    className="mt-5 w-full"
                    aria-label={`Réserver : ${service.title}`}
                  >
                    Réserver
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10 flex justify-center">
          <p className="inline-flex items-center gap-2 text-sm text-cocoa-soft">
            <Check size={16} className="text-gold-deep" aria-hidden="true" />
            Annulation gratuite jusqu’à 24h avant votre rendez-vous
          </p>
        </Reveal>
      </div>
    </section>
  )
}
