const STEPS = [
  {
    title: "El modelo se diseña en Spline",
    body: "El robot no es un video ni un GIF: es una escena 3D real hecha en Spline (una herramienta de diseño 3D para web). Ahí se modela el objeto y se le definen animaciones por keyframes, igual que en un editor de video: 'en el segundo 0 el brazo está aquí, en el segundo 2 está allá'.",
  },
  {
    title: "Se exporta como .splinecode",
    body: "La escena se exporta a un archivo .splinecode: una descripción compacta de la geometría, materiales, luces y esas animaciones — no una imagen ni un video pre-renderizado.",
  },
  {
    title: "El navegador la renderiza en tiempo real",
    body: "@splinetool/react-spline descarga ese archivo y usa un motor WebGL para dibujar la escena directamente en un <canvas>, calculando la iluminación y la cámara en el momento, no reproduciendo frames grabados.",
  },
  {
    title: "60 veces por segundo se interpola una nueva pose",
    body: "El runtime corre un loop con requestAnimationFrame: en cada uno de esos ~60 fotogramas por segundo, calcula la posición intermedia entre keyframes usando curvas de easing. Esa sucesión de poses ligeramente distintas, mostradas muy rápido, es la ilusión de movimiento.",
  },
  {
    title: "La carga es diferida (lazy)",
    body: "El componente SplineScene usa React.lazy + Suspense: el motor 3D (pesa varios MB) solo se descarga cuando el componente aparece en pantalla, mostrando un loader mientras tanto, para no bloquear el resto de la página.",
  },
  {
    title: "El brillo que sigue al mouse es otro truco, aparte",
    body: "El halo difuminado (Spotlight) no es parte del modelo 3D: es un div con un gradiente radial en CSS cuya posición sigue al cursor, animada con resortes (springs) de Framer Motion para que el movimiento se sienta suave y no instantáneo.",
  },
]

export function SplineExplainer() {
  return (
    <section className="w-full max-w-3xl mx-auto mt-10 text-neutral-300">
      <h2 className="text-2xl font-semibold text-neutral-50">
        ¿Cómo funciona esta animación?
      </h2>
      <p className="mt-2 text-neutral-400">
        No hay ningún video detrás del robot. Es una escena 3D interactiva
        renderizada en vivo por el navegador. Así se logra la ilusión de
        movimiento, paso a paso:
      </p>

      <ol className="mt-6 space-y-5">
        {STEPS.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-700 text-sm text-neutral-400">
              {i + 1}
            </span>
            <div>
              <h3 className="font-medium text-neutral-100">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-400">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
