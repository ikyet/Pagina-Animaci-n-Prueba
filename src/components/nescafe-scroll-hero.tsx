'use client'

import { useEffect } from 'react'
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero'

const BG_IMAGE = 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1920&q=80'
const MEDIA_IMAGE = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1280&q=80'

export function NescafeScrollHero() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc={MEDIA_IMAGE}
      bgImageSrc={BG_IMAGE}
      title="NESCAFÉ Tostado y Molido"
      date="Taster's Choice®"
      scrollToExpand="Desliza para descubrir"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-amber-50">Un gran café en cada taza</h2>
        <p className="text-lg mb-6 text-neutral-300 leading-relaxed">
          NESCAFÉ® Taster's Choice® Tostado y Molido está hecho con una fina
          selección de granos 100% arábica. Cada taza revela notas afrutadas,
          acidez suave y un cuerpo ligero, con ese característico aroma
          tostado que solo un gran café puede ofrecer.
        </p>
        <p className="text-lg text-neutral-300 leading-relaxed">
          Con válvula de conservación de aroma y un frasco 100% reciclable,
          disfrútalo con tu método de extracción favorito: Moka Pot,
          Aeropress, Chemex o Cold Brew.
        </p>
      </div>
    </ScrollExpandMedia>
  )
}
