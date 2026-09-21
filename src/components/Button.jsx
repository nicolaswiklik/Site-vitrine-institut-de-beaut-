const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ease-out active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4'

const variants = {
  primary:
    'bg-cocoa text-ivory shadow-soft hover:bg-[#4d382e] hover:-translate-y-0.5 hover:shadow-lift focus-visible:outline-gold',
  secondary:
    'border border-cocoa/30 text-cocoa hover:border-cocoa hover:bg-cocoa hover:text-ivory focus-visible:outline-gold',
  gold:
    'bg-gold text-cocoa hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lift focus-visible:outline-gold-light',
  light:
    'bg-ivory text-cocoa hover:bg-white hover:-translate-y-0.5 hover:shadow-lift focus-visible:outline-gold-light',
}

/** Lien stylé en bouton. Les liens externes s'ouvrent dans un nouvel onglet. */
export default function Button({ href, variant = 'primary', className = '', children, ...rest }) {
  const external = /^https?:\/\//.test(href)
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  )
}
