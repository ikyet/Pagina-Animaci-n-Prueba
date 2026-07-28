import { SplineSceneBasic } from "@/components/spline-demo"
import { STEPS, StepCard } from "@/components/spline-explainer"

function App() {
  const [s1, s2, s3, s4, s5, s6] = STEPS

  return (
    <div className="min-h-screen bg-neutral-950 p-6 lg:p-10">
      <div className="mx-auto max-w-6xl">
        <header className="text-center mb-8 lg:mb-10">
          <h1 className="text-2xl lg:text-3xl font-semibold text-neutral-50">
            ¿Cómo funciona esta animación?
          </h1>
          <p className="mt-2 text-neutral-400 max-w-xl mx-auto">
            No hay ningún video detrás del robot: es una escena 3D interactiva
            renderizada en vivo. Así se logra la ilusión de movimiento.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(320px,560px)_1fr] gap-6 lg:gap-8 items-center">
          <div className="order-1 lg:order-1 grid gap-6 lg:content-center">
            <StepCard index={1} title={s1.title} body={s1.body} />
            <StepCard index={3} title={s3.title} body={s3.body} />
          </div>

          <div className="order-2 lg:order-2">
            <SplineSceneBasic />
          </div>

          <div className="order-3 lg:order-3 grid gap-6 lg:content-center">
            <StepCard index={2} title={s2.title} body={s2.body} />
            <StepCard index={4} title={s4.title} body={s4.body} />
          </div>

          <div className="order-4 lg:order-4 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <StepCard index={5} title={s5.title} body={s5.body} />
            <StepCard index={6} title={s6.title} body={s6.body} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
