import { gallery, site } from '../data/site'
import { InstagramIcon } from './icons'
import Button from './Button'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Le format des vignettes crée un rythme visuel léger sur la grille
const spans = {
  tall: 'aspect-square lg:row-span-2 lg:aspect-auto',
  wide: 'aspect-square lg:aspect-auto',
}

export default function Gallery() {
  return (
    <section id="galerie" aria-labelledby="galerie-title" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="galerie-title"
            eyebrow="Galerie"
            title="L’univers de l’institut"
            text="Un aperçu des prestations proposées : regard, soins du visage, onglerie et bien-être. Photos d’illustration."
          />
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:auto-rows-[17rem]">
          {gallery.map((item, i) => (
            <Reveal as="li" key={item.src} delay={(i % 3) * 80} className={`group relative overflow-hidden rounded-2xl bg-sand [&:last-child:nth-child(odd)]:col-span-2 [&:last-child:nth-child(odd)]:aspect-[2/1] lg:[&:last-child:nth-child(odd)]:col-span-1 lg:[&:last-child:nth-child(odd)]:aspect-auto ${spans[item.ratio]}`}>
              <figure className="h-full w-full">
                <img
                  src={item.src}
                  alt={item.alt}
                  width="900"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cocoa/70 to-transparent p-4 pt-10 font-serif text-lg text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 flex justify-center">
          <Button href={site.instagramUrl} variant="secondary">
            <InstagramIcon size={18} />
            Suivre {site.instagramHandle}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
