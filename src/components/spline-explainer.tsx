export const STEPS = [
  {
    title: "Se diseña en Spline",
    body: "El robot no es un video: es una escena 3D real con animaciones definidas por keyframes, como en un editor de video.",
  },
  {
    title: "Se exporta como .splinecode",
    body: "Un archivo compacto con la geometría, materiales, luces y esas animaciones — no una imagen ni un video pre-renderizado.",
  },
  {
    title: "Se renderiza en tiempo real",
    body: "react-spline descarga ese archivo y usa WebGL para dibujar la escena en un <canvas>, calculando luz y cámara al vuelo.",
  },
  {
    title: "60 poses por segundo",
    body: "Un loop con requestAnimationFrame interpola la posición entre keyframes con curvas de easing. Esa sucesión rápida es el movimiento.",
  },
  {
    title: "Carga diferida (lazy)",
    body: "React.lazy + Suspense hacen que el motor 3D (varios MB) se descargue solo cuando el componente aparece en pantalla.",
  },
  {
    title: "El brillo es otro truco",
    body: "El halo que sigue al mouse no es parte del modelo: es un gradiente CSS animado con resortes de Framer Motion.",
  },
] as const

export function StepCard({
  index,
  title,
  body,
  className = "",
}: {
  index: number
  title: string
  body: string
  className?: string
}) {
  return (
    <div className={`flex gap-3 ${className}`}>
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-700 text-sm text-neutral-400">
        {index}
      </span>
      <div>
        <h3 className="font-medium text-neutral-100">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-neutral-400">
          {body}
        </p>
      </div>
    </div>
  )
}
