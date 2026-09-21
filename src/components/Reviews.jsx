import { ExternalLink, Quote } from 'lucide-react'
import { reviews, site } from '../data/site'
import Button from './Button'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Reviews() {
  return (
    <section id="avis" aria-labelledby="avis-title" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="avis-title"
            eyebrow="Avis clients"
            title="Elles nous ont fait confiance"
            text={`${site.rating.score}/${site.rating.outOf} sur ${site.rating.source} · ${site.rating.label}`}
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal as="li" key={review.text} delay={i * 100} className="flex">
              <figure className="flex w-full flex-col rounded-2xl border border-sand-deep/70 bg-white/70 p-7 shadow-soft">
                <Quote size={28} className="text-gold" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-[16px] leading-relaxed text-cocoa">
                  «&nbsp;{review.text}&nbsp;»
                </blockquote>
                <figcaption className="mt-6 border-t border-sand-deep/70 pt-5">
                  <span className="block font-serif text-xl text-cocoa">Cliente</span>
                  <span className="block text-xs text-cocoa-soft">Avis publié sur {site.rating.source}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 flex justify-center">
          <Button href={site.reviewsUrl} variant="secondary">
            Consulter les avis sur Planity
            <ExternalLink size={16} aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
