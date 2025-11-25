'use client'

import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <div className="h-fit">
      <div className="flex items-center  justify-center gap-6">
        <HeroSection />
      </div>
      <div className="w-full bg-amber-300 h-[450px]"></div>
    </div>
  )
}
