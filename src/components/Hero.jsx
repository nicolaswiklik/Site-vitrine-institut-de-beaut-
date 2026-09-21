import { ArrowRight, Star } from 'lucide-react'
import { copy, images, site } from '../data/site'
import Button from './Button'
import Stars from './Stars'

export default function Hero() {
  return (
    <section id="accueil" aria-labelledby="hero-title" className="relative overflow-hidden bg-ivory pt-16 lg:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-sand opacity-70 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 md:pb-24 md:pt-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="reveal is-visible order-2 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">{copy.hero.eyebrow}</p>
          <h1 id="hero-title" className="mt-4 text-5xl leading-[1.05] text-cocoa sm:text-6xl lg:text-7xl">
            {copy.hero.titleLead} <em className="italic text-gold-deep">{copy.hero.titleAccent}</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cocoa-soft">{copy.hero.text}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={site.bookingUrl}>Prendre rendez-vous</Button>
            <Button href="#prestations" variant="secondary">
              Découvrir les prestations
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>

          <a
            href={site.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-sand-deep bg-white/60 px-4 py-3 shadow-soft transition-colors hover:bg-white"
          >
            <Stars value={5} />
            <span className="text-sm text-cocoa-soft">
              <strong className="font-semibold text-cocoa">
                {site.rating.score}/{site.rating.outOf}
              </strong>{' '}
              sur {site.rating.source} · {site.rating.label}
            </span>
          </a>
        </div>

        <div className="order-1 mx-auto w-full max-w-[16rem] sm:max-w-md lg:order-2 lg:max-w-none">
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-4 -top-4 hidden h-full w-full rounded-t-[999px] rounded-b-3xl border border-gold/60 sm:block"
            />
            <img
              src={images.hero}
              alt="Esthéticienne réalisant une épilation des sourcils au fil sur une cliente"
              width="1000"
              height="1250"
              fetchPriority="high"
              decoding="async"
              className="relative aspect-[4/5] w-full rounded-t-[999px] rounded-b-3xl object-cover object-top shadow-lift"
            />
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-cocoa px-5 py-3 text-sm text-ivory shadow-lift sm:left-auto sm:-left-6 sm:translate-x-0">
              <Star size={16} className="fill-gold text-gold" aria-hidden="true" />
              Spécialiste du fil · {site.city}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
