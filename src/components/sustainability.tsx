import { Leaf, Recycle } from 'lucide-react'

export function Sustainability() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-lg border border-amber-900/30 bg-stone-900/60 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80"
        alt="Granos de café tostado"
        className="w-full h-64 lg:h-full object-cover"
      />
      <div className="p-8 lg:pr-10">
        <span className="inline-flex items-center gap-2 text-amber-400 text-xs font-medium tracking-wide uppercase">
          <Leaf className="h-4 w-4" />
          Nuestra promesa de sustentabilidad
        </span>
        <h2 className="mt-3 text-2xl font-semibold text-neutral-50">
          El recorrido de tu bote no termina con el café
        </h2>
        <p className="mt-3 text-neutral-400 leading-relaxed">
          El bote y la tapa son totalmente reciclables, lo que facilita
          mantener a nuestro planeta feliz y saludable. Además, la válvula de
          conservación de aroma mantiene el producto fresco por más tiempo.
        </p>
        <div className="mt-5 flex items-center gap-2 text-sm text-amber-200">
          <Recycle className="h-4 w-4" />
          Frasco de vidrio 100% reciclable
        </div>
      </div>
    </section>
  )
}
