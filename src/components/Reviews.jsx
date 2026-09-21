import { ExternalLink, Quote } from 'lucide-react'
import { reviews, site } from '../data/site'
import Button from './Button'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Stars from './Stars'

export default function Reviews() {
  return (
    <section id="avis" aria-labelledby="avis-title" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="avis-title"
            eyebrow="Avis clients"
            title="Elles nous ont fait confiance"
            text={`${site.rating.score}/${site.rating.outOf} sur ${site.rating.source}, d’après plus de ${site.rating.count} avis de clientes.`}
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal as="li" key={review.name} delay={i * 100} className="flex">
              <figure className="flex w-full flex-col rounded-2xl border border-sand-deep/70 bg-white/70 p-7 shadow-soft">
                <Quote size={28} className="text-gold" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-[16px] leading-relaxed text-cocoa">
                  « {review.text} »
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-sand-deep/70 pt-5">
                  <span>
                    <span className="block font-serif text-xl text-cocoa">{review.name}</span>
                    <span className="block text-xs text-cocoa-soft">{review.service}</span>
                  </span>
                  <Stars value={review.rating} />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 flex justify-center">
          <Button href={site.googleReviewsUrl} variant="secondary">
            Lire tous les avis sur Google
            <ExternalLink size={16} aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
