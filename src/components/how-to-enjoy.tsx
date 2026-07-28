const METHODS = ['Moka Pot', 'Aeropress', 'Sifón', 'Chemex', 'Cold Brew'] as const

export function HowToEnjoy() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-lg border border-amber-900/30 bg-stone-900/60 overflow-hidden">
      <div className="p-8 lg:pl-10 order-2 lg:order-1">
        <span className="text-amber-400 text-xs font-medium tracking-wide uppercase">
          Cómo disfrutar
        </span>
        <h2 className="mt-3 text-2xl font-semibold text-neutral-50">
          Un café que se adapta a tu método favorito
        </h2>
        <p className="mt-3 text-neutral-400 leading-relaxed">
          Cualquiera que sea el método de extracción que prefieras, podrás
          conservar las notas afrutadas, el aroma intenso y su característico
          cuerpo ligero. Perfecto para acompañar con un brownie de chocolate.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {METHODS.map((method) => (
            <li
              key={method}
              className="rounded-full border border-amber-800/60 bg-amber-950/40 px-3 py-1 text-xs text-amber-200"
            >
              {method}
            </li>
          ))}
        </ul>
      </div>
      <img
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
        alt="Preparación de café en Chemex"
        className="w-full h-64 lg:h-full object-cover order-1 lg:order-2"
      />
    </section>
  )
}
