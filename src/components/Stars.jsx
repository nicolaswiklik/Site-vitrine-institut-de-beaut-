import { Star } from 'lucide-react'

export default function Stars({ value = 5, size = 16 }) {
  return (
    <span className="inline-flex gap-0.5" role="img" aria-label={`Note : ${value} sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={size}
          aria-hidden="true"
          className={i < value ? 'fill-gold text-gold' : 'text-sand-deep'}
        />
      ))}
    </span>
  )
}
