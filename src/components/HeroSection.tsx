'use client'

import { useTranslations } from 'next-intl'
import Avatar from './Avatar'
import Button from './Button'
import { StepForward } from 'lucide-react'

export default function HeroSection() {
  const t = useTranslations('heroSection')
  return (
    <div className=" max-w-[1200px] px-5 lg:px-0">
      <div className="flex flex-col items-start">
        <div className="w-full">
          <Avatar
            src="/avatar.png"
            alt="Foto de Geovane Lelis"
            size="sm"
            className="my-5 hover:shadow-lg hover:shadow-blue-700/40 hover:brightness-105 hover:inset-shadow-xl transition-all duration-300 border-2 border-primary-100 cursor-pointer"
          />
        </div>
        <div className=" flex flex-col lg:flex-row gap-8 lg:gap-20 font-primary">
          <h1 className="flex lg:flex-col items-start gap-2 lg:gap-1.5">
            <span className="text-blue-400 flex text-base font-semibold gap-2">
              <span>{t('saudation')},</span>
              <span>{t('presentation')}</span>
            </span>
            <span className="flex lg:flex-col text-primary-100 text-base lg:text-2xl font-semibold  gap-2 lg:gap-1.5">
              <span>GEOVANE</span>
              <span>LELIS</span>
            </span>
          </h1>
          <div className="flex flex-col gap-10">
            <h1 className="text-6xl lg:text-7xl font-bold">{t('title')}</h1>
            <Button text={t('buttonAction')} icon={<StepForward size={18} />} />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}
