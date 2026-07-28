import { NescafeScrollHero } from "@/components/nescafe-scroll-hero"
import { NescafeHero } from "@/components/nescafe-hero"
import { ProductDetails } from "@/components/product-details"
import { CoffeeBeanShowcase } from "@/components/coffee-bean-showcase"
import { Sustainability } from "@/components/sustainability"
import { HowToEnjoy } from "@/components/how-to-enjoy"

function App() {
  return (
    <div className="min-h-screen bg-stone-950">
      <NescafeScrollHero />

      <div className="p-6 lg:p-10">
        <div className="mx-auto max-w-6xl grid gap-8">
          <NescafeHero />
          <ProductDetails />
          <CoffeeBeanShowcase />
          <Sustainability />
          <HowToEnjoy />

          <footer className="text-center text-xs text-neutral-600 pt-4 pb-2">
            NESCAFÉ® Taster's Choice® — página de práctica, no oficial de Nestlé.
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
