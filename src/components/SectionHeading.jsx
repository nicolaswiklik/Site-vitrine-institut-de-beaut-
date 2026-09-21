export default function SectionHeading({ eyebrow, title, text, align = 'center', tone = 'dark', id }) {
  const centered = align === 'center'
  const dark = tone === 'dark'
  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.22em] ${dark ? 'text-gold-deep' : 'text-gold-light'}`}
      >
        {eyebrow}
      </p>
      <h2 id={id} className={`mt-3 text-4xl leading-tight sm:text-5xl ${dark ? 'text-cocoa' : 'text-ivory'}`}>
        {title}
      </h2>
      <span
        aria-hidden="true"
        className={`mt-5 block h-px w-14 bg-gold ${centered ? 'mx-auto' : ''}`}
      />
      {text && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? 'text-cocoa-soft' : 'text-ivory/80'}`}>
          {text}
        </p>
      )}
    </div>
  )
}
