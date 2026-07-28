import { Coffee, Droplet, Gauge, Package } from 'lucide-react'

const DETAILS = [
  {
    icon: Coffee,
    label: 'Tipo de café',
    value: 'Café negro',
  },
  {
    icon: Droplet,
    label: 'Notas de sabor',
    value: 'Toque de amargor y acidez, sabor frutal y tostado',
  },
  {
    icon: Gauge,
    label: 'Intensidad',
    value: 'Media',
  },
  {
    icon: Package,
    label: 'Presentación',
    value: '300 gr · disponible en HEB y Walmart',
  },
] as const

export function ProductDetails() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {DETAILS.map(({ icon: Icon, label, value }) => (
        <div
          key={label}
          className="rounded-lg border border-amber-900/30 bg-stone-900/60 p-5"
        >
          <Icon className="h-5 w-5 text-amber-400" />
          <h3 className="mt-3 text-sm font-medium text-neutral-200">{label}</h3>
          <p className="mt-1 text-sm text-neutral-400 leading-relaxed">{value}</p>
        </div>
      ))}
    </section>
  )
}
