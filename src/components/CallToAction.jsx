import { copy, images, site } from '../data/site'
import Button from './Button'
import Reveal from './Reveal'

export default function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-cocoa py-24 sm:py-32">
      <img
        src={images.cta}
        alt=""
        aria-hidden="true"
        width="1600"
        height="900"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-cocoa/60 via-cocoa/40 to-cocoa/80" />
      <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span aria-hidden="true" className="mx-auto block h-px w-14 bg-gold" />
        <h2 id="cta-title" className="mt-8 text-4xl leading-tight text-ivory sm:text-6xl">
          {copy.cta.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ivory/80">{copy.cta.text}</p>
        <Button href={site.bookingUrl} variant="gold" className="mt-10 !px-8 !py-4 text-base">
          Réserver maintenant
        </Button>
      </Reveal>
    </section>
  )
}
