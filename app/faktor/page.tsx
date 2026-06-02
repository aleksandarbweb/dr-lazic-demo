"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function FaktorEasterEggPage() {
  const [countdown, setCountdown] = useState<number | null>(7)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [countdown])

  return (
    <div className="fixed inset-0 z-[9999] brainrot-flash text-white flex flex-col items-center justify-center cursor-default h-[100dvh] w-screen overflow-hidden">
      {countdown !== null && countdown > 0 ? (
        <div className="font-black leading-none brainrot-number mix-blend-difference absolute inset-0 flex items-center justify-center w-full h-full">
          {countdown}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-8 text-center brainrot-shake relative w-full h-full mx-auto">
          {/* Multiple chaotic shadow copies of the image */}
          <div className="absolute top-10 left-10 w-[20svw] min-w-[200px] aspect-[4/5] object-top opacity-50 mix-blend-color-burn brainrot-glitch delay-[50ms]">
            <Image src="/images/drmartaterzicheadshot.png" alt="" fill priority className="object-cover object-top filter invert hue-rotate-[180deg]" />
          </div>
          <div className="absolute bottom-10 right-10 w-[40svw] min-w-[300px] aspect-[4/5] object-top opacity-40 mix-blend-exclusion brainrot-shake delay-[100ms] z-50">
            <Image src="/images/drmartaterzicheadshot.png" alt="" fill priority className="object-cover object-top blur-[5px] scale-150 rotate-[45deg]" />
          </div>
          <div className="absolute top-1/4 right-0 w-[50svw] min-w-[300px] aspect-square object-top opacity-30 mix-blend-color-dodge brainrot-number delay-[200ms]">
            <Image src="/images/drmartaterzicheadshot.png" alt="" fill priority className="object-cover object-top rotate-[-120deg]" />
          </div>

          <div className="relative w-[30svw] min-w-[280px] max-w-[500px] aspect-[4/5] object-top mb-12 mt-12 overflow-hidden rounded-none border-[20px] border-l-red-500 border-r-blue-500 border-t-yellow-500 border-b-lime-500 shadow-[0_0_150px_rgba(255,0,0,1)] brainrot-glitch z-10 scale-125 md:scale-[2]">
            <Image
              src="/images/drmartaterzicheadshot.png"
              alt="Dr Marta Terzić"
              fill
              priority
              className="object-cover object-top animate-[spin_0.2s_linear_infinite] filter invert drop-shadow([0_0_20px_blue]) hue-rotate-90 saturate-200"
            />
          </div>
          <div className="relative z-20 brainrot-glitch mb-10">
             <p className="text-6xl md:text-8xl lg:text-[10rem] font-black text-red-500 uppercase tracking-tighter mix-blend-difference" style={{ textShadow: '20px 20px 0px blue, -20px -20px 0px lime, 0 0 50px red' }}>
               ALOOOO<br/>JESTE STAVILI<br/>FAKTOR?????
             </p>
          </div>
          
          {/* A second text copy overlaid */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none mix-blend-overlay brainrot-shake opacity-80 scale-150">
             <p className="text-[12rem] md:text-[25rem] font-black text-white uppercase tracking-tighter leading-none opacity-50 blur-[5px]">
               FAKTOR
             </p>
          </div>

          <Link href="/" className="mt-8 px-12 py-6 border-8 border-yellow-500 text-black bg-white rounded-none hover:bg-black hover:text-red-500 hover:border-red-500 transition-none font-black tracking-widest text-3xl uppercase brainrot-shake z-50 transform hover:scale-150">
            Pustite me nazad!!!
          </Link>
        </div>
      )}
    </div>
  )
}
