import { useReveal } from '../hooks/useReveal'

/** Fait apparaître ses enfants en douceur lors du défilement. */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      style={{ '--reveal-delay': `${delay}ms` }}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
