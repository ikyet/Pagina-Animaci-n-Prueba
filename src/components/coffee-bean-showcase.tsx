import { CoffeeBean3D } from '@/components/ui/coffee-bean-3d'

export function CoffeeBeanShowcase() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-lg border border-amber-900/30 bg-stone-900/60 overflow-hidden">
      <div className="p-8 lg:pl-10">
        <span className="text-amber-400 text-xs font-medium tracking-wide uppercase">
          El grano en 3D
        </span>
        <h2 className="mt-3 text-2xl font-semibold text-neutral-50">
          Explóralo desde cualquier ángulo
        </h2>
        <p className="mt-3 text-neutral-400 leading-relaxed">
          Arrastra con el cursor para girar el grano y descubrir el tostado
          medio que le da a NESCAFÉ® Taster's Choice® sus notas afrutadas y
          su cuerpo ligero.
        </p>
      </div>

      <div className="h-72 lg:h-[420px] bg-gradient-to-br from-stone-950 to-amber-950/40">
        <CoffeeBean3D className="w-full h-full" />
      </div>
    </section>
  )
}
