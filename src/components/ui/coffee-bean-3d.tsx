'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Center, Loader, Bounds } from '@react-three/drei'
import { cn } from '@/lib/utils'

const MODEL_URL = `${import.meta.env.BASE_URL}models/coffee-bean.glb`

function CoffeeBeanModel() {
  const { scene } = useGLTF(MODEL_URL)
  return (
    <Center>
      <primitive object={scene} />
    </Center>
  )
}

useGLTF.preload(MODEL_URL)

interface CoffeeBean3DProps {
  className?: string
}

export function CoffeeBean3D({ className }: CoffeeBean3DProps) {
  return (
    <div className={cn('relative', className)}>
      <Canvas camera={{ position: [0, 0, 5], fov: 40, near: 0.01, far: 1000 }} dpr={[1, 2]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 5]} intensity={1.8} />
        <directionalLight position={[-4, -2, -3]} intensity={0.4} />
        <pointLight position={[0, 2, 2]} intensity={0.5} />

        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.6}>
            <CoffeeBeanModel />
          </Bounds>
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.4}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI - Math.PI / 3}
        />
      </Canvas>
      <Loader />
    </div>
  )
}
