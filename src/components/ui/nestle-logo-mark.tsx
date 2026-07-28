'use client'

import { useRef, type MouseEvent } from 'react'
import { motion, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

interface NestleLogoMarkProps {
  className?: string
}

export function NestleLogoMark({ className }: NestleLogoMarkProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const sceneSpring = { stiffness: 90, damping: 16, mass: 0.4 }
  const sceneRotate = useSpring(0, sceneSpring)
  const sceneShiftX = useSpring(0, sceneSpring)
  const sceneShiftY = useSpring(0, sceneSpring)

  const headSpring = { stiffness: 130, damping: 14, mass: 0.3 }
  const headRotate = useSpring(0, headSpring)

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1
    const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1
    sceneRotate.set(nx * 6)
    sceneShiftX.set(nx * 10)
    sceneShiftY.set(ny * 6)
    headRotate.set(nx * 12)
  }

  function handleMouseLeave() {
    sceneRotate.set(0)
    sceneShiftX.set(0)
    sceneShiftY.set(0)
    headRotate.set(0)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('relative flex items-center justify-center', className)}
    >
      <motion.div style={{ rotate: sceneRotate, x: sceneShiftX, y: sceneShiftY }}>
        <svg
          viewBox="0 0 480 280"
          width="380"
          height="222"
          className="max-w-full h-auto text-amber-100/90 drop-shadow-[0_20px_30px_rgba(0,0,0,0.45)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* leaf sprig, top-left */}
          <motion.g
            animate={{ rotate: [0, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '115px 45px' }}
          >
            <path d="M115 70 C93 52 92 18 116 6 C134 20 132 52 115 72 Z" />
            <path d="M116 6 C140 10 158 30 148 54 C126 50 112 30 116 6 Z" />
            <path d="M113 70 C102 66 92 74 96 88 C108 88 116 80 113 70 Z" />
            <path d="M110 74 L128 100" />
          </motion.g>

          {/* woven nest, with a curled perch underneath */}
          <motion.g
            animate={{ y: [0, 1.5, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M85 168 Q130 142 175 162 Q215 182 258 162 Q292 145 312 166" />
            <path d="M78 186 Q135 212 195 186 Q245 164 288 186" />
            <path d="M88 202 Q145 224 205 200 Q252 180 295 200" />
            <path d="M96 216 Q150 234 200 216" />
            <path d="M78 205 C60 210 52 225 62 238 C72 246 84 240 84 228" />
          </motion.g>

          {/* chick 1, upper, smaller */}
          <motion.g
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
            style={{ transformOrigin: '180px 88px' }}
          >
            <circle cx="180" cy="88" r="14" />
            <path d="M192 79 L210 68 L196 92" />
            <circle cx="185" cy="82" r="2" fill="currentColor" stroke="none" />
          </motion.g>

          {/* chick 2, lower, bigger, closer to the mother's beak */}
          <motion.g
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '208px 108px' }}
          >
            <circle cx="208" cy="108" r="17" />
            <path d="M223 97 L243 84 L227 114" />
            <circle cx="215" cy="100" r="2.3" fill="currentColor" stroke="none" />
          </motion.g>

          {/* mother bird head, tracks the cursor, beak feeding down to the chicks */}
          <motion.g style={{ rotate: headRotate, transformOrigin: '255px 55px' }}>
            <circle cx="255" cy="55" r="25" />
            <path d="M233 66 L212 82" />
            <circle cx="263" cy="45" r="2.8" fill="currentColor" stroke="none" />
          </motion.g>

          {/* branch behind the head, with two twig stubs */}
          <path d="M335 28 L465 18" />
          <path d="M385 24 L393 8" />
          <path d="M425 21 L433 6" />

          {/* mother bird body */}
          <path d="M234 66 C214 90 210 128 228 160 C246 186 280 190 304 170 C318 152 316 118 300 92 C290 76 270 66 254 62" />

          {/* mother bird wing, raised */}
          <motion.g
            animate={{ rotate: [0, -2, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '300px 90px' }}
          >
            <path d="M300 90 C330 42 380 20 432 32 C400 58 362 82 336 118 C368 108 398 120 418 148 C384 158 350 172 322 190" />
            <path d="M312 98 C340 66 374 56 404 66" />
            <path d="M320 126 C346 112 372 116 392 132" />
          </motion.g>

          {/* mother bird tail, fanned to the lower right */}
          <motion.g
            animate={{ rotate: [0, 2, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '320px 190px' }}
          >
            <path d="M322 190 Q360 205 378 244" />
            <path d="M322 190 Q372 218 408 236" />
            <path d="M316 200 Q350 232 356 258" />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  )
}
