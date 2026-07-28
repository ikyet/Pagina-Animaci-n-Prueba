import { SplineSceneBasic } from "@/components/spline-demo"
import { SplineExplainer } from "@/components/spline-explainer"

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-neutral-950">
      <SplineSceneBasic />
      <SplineExplainer />
    </div>
  )
}

export default App
