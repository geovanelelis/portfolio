'use client'

import { useTranslations } from 'next-intl'
import Avatar from './Avatar'
import Button from './Button'
import { ChevronsRight } from 'lucide-react'

export default function HeroSection() {
  const t = useTranslations('heroSection')
  return (
    <div className=" max-w-[1000px] h-[85vh] w-fit flex justify-center items-center px-5 lg:px-0">
      <div className="flex flex-col items-start gap-5">
        <div className="w-full">
          <Avatar
            src="/avatar.png"
            alt="Foto de Geovane Lelis"
            size="sm"
            className="hover:shadow-lg hover:shadow-blue-700/40 hover:brightness-105 hover:inset-shadow-xl transition-all duration-300 border-2 border-primary-100 cursor-pointer"
          />
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-between gap-8 lg:gap-20 font-sans font-regular">
          <h1 className="flex lg:flex-col items-start">
            <span className="text-blue-400 flex text-2xl gap-2 whitespace-nowrap">
              <span>{t('saudation')},</span>
              <span>{t('presentation')}</span>
            </span>
            <span className="flex lg:flex-col text-primary-100 text-base lg:text-2xl">
              <span>GEOVANE</span>
              <span>LELIS</span>
            </span>
          </h1>{' '}
          <div className="flex flex-col gap-10">
            <h1 className="text-6xl lg:text-7xl font-heading font-semibold bg-gradient-to-r from-primary-50 to-primary-200 bg-clip-text text-transparent">
              {t('title')}
            </h1>
            <Button text={t('buttonAction')} icon={<ChevronsRight className="size-5.5" />} />
          </div>
        </div>
      </div>
    </div>
  )
}
