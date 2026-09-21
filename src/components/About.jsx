import { HeartHandshake, Leaf, ShieldCheck } from 'lucide-react'
import { about, images, site } from '../data/site'
import Button from './Button'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const icons = { Leaf, HeartHandshake, ShieldCheck }

export default function About() {
  return (
    <section id="a-propos" aria-labelledby="a-propos-title" className="bg-sand/60 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <span aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border border-gold/60" />
          <img
            src={images.portrait}
            alt={`Portrait de ${about.name}, ${about.role.toLowerCase()}`}
            width="800"
            height="1000"
            loading="lazy"
            decoding="async"
            className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
          />
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              id="a-propos-title"
              align="left"
              eyebrow="À propos"
              title="Une beauté simple, sincère et sur mesure"
            />
            <p className="mt-6 font-serif text-xl italic text-gold-deep">
              {about.name} — {about.role}
            </p>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-cocoa-soft sm:text-[17px]">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {about.highlights.map((item, i) => {
              const Icon = icons[item.icon]
              return (
                <Reveal as="li" key={item.title} delay={i * 90} className="rounded-2xl bg-ivory p-5 shadow-soft">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sand text-gold-deep">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-xl text-cocoa">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa-soft">{item.text}</p>
                </Reveal>
              )
            })}
          </ul>

          <Reveal className="mt-10">
            <Button href={site.bookingUrl}>Prendre rendez-vous</Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
