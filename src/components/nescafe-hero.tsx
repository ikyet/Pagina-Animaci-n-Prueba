'use client'

import { Coffee } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'
import { NestleLogoMark } from '@/components/ui/nestle-logo-mark'

export function NescafeHero() {
  return (
    <Card className="w-full min-h-[480px] lg:h-[560px] bg-gradient-to-br from-stone-950 via-amber-950 to-stone-900 relative overflow-hidden border-amber-900/40">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />

      <div className="flex flex-col lg:flex-row h-full">
        <div className="flex-1 p-8 lg:p-12 relative z-10 flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 text-amber-400 text-sm font-medium tracking-wide uppercase mb-4">
            <Coffee className="h-4 w-4" />
            NESCAFÉ® Taster's Choice®
          </span>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-amber-50 to-amber-300/80">
            Tostado y Molido
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg leading-relaxed">
            Una fina selección de granos 100% arábica que ofrecen una taza
            limpia, con notas afrutadas, acidez suave y cuerpo ligero. El café
            gourmet soluble por excelencia, en cada sorbo.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-amber-800/60 bg-amber-950/40 px-3 py-1 text-xs text-amber-200">
              300 gr
            </span>
            <span className="rounded-full border border-amber-800/60 bg-amber-950/40 px-3 py-1 text-xs text-amber-200">
              Intensidad media
            </span>
            <span className="rounded-full border border-amber-800/60 bg-amber-950/40 px-3 py-1 text-xs text-amber-200">
              100% arábica
            </span>
          </div>
        </div>

        <div className="flex-1 relative min-h-[300px]">
          <NestleLogoMark className="w-full h-full" />
        </div>
      </div>
    </Card>
  )
}
