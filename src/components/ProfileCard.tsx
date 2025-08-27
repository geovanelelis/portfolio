'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import {
  HiOutlineCalendarDays,
  HiOutlineDevicePhoneMobile,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from 'react-icons/hi2'

export default function ProfileCard() {
  const t = useTranslations('profileCard')

  return (
    <div className="w-full flex items-center justify-center relative mt-6 font-primary text-primary-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 max-w-[350px] pt-30 pb-8 px-8 flex flex-col items-center gap-8 bg-gradient-to-br from-primary-900 border border-primary-800 rounded-3xl z-0">
        <div className="flex flex-col items-center gap-3">
          <h1 className="flex gap-2 items-start">
            <span className="text-blue-400 text-xs text-right flex flex-col leading-1">
              <span className="text-base font-semibold">{t('saudation')},</span>
              <span>{t('presentation')}</span>
            </span>
            <span className="text-primary-100 text-3xl font-bold">Geovane Lelis</span>
          </h1>
          <span className="text-sm text-primary-200 bg-primary-800/80 px-4 py-1 rounded-lg">
            {t('tag')}
          </span>
        </div>

        <hr className="w-full text-primary-700" />

        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-center">
            <span className="bg-gradient-to-br from-primary-800/80 to-primary-950/60 rounded-xl p-4 shadow-xl shadow-primary-950/50">
              <HiOutlineEnvelope className="size-5 text-blue-400" />
            </span>
            <h2 className="flex flex-col">
              <span className="text-xs text-primary-400">EMAIL</span>
              <a href="mailto:geovanelelisds@gmail.com">
                <span>geovanelelisds@gmail.com</span>
              </a>
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <span className="bg-gradient-to-br from-primary-800/80 to-primary-950/60 rounded-xl p-4 shadow-xl shadow-primary-950/50">
              <HiOutlineDevicePhoneMobile className="size-5 text-blue-400" />
            </span>
            <h2 className="flex flex-col">
              <span className="text-xs text-primary-400 ">{t('phoneTitle')}</span>
              <a href="tel:+5531986678504">
                <span>+55 (31) 9 8667-8504</span>
              </a>
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <span className="bg-gradient-to-br from-primary-800/80 to-primary-950/60 rounded-xl p-4 shadow-xl shadow-primary-950/50">
              <HiOutlineCalendarDays className="size-5 text-blue-400" />
            </span>
            <h2 className="flex flex-col">
              <span className="text-xs text-primary-400">{t('birthdayTitle')}</span>
              <span>{t('birthdayContent')}</span>
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <span className="bg-gradient-to-br from-primary-800/80 to-primary-950/60 rounded-xl p-4 shadow-xl shadow-primary-950/50">
              <HiOutlineMapPin className="size-5 text-blue-400" />
            </span>
            <h2 className="flex flex-col">
              <span className="text-xs text-primary-400">{t('locationTitle')}</span>
              <span className="">{t('locationContent')}</span>
            </h2>
          </div>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/geovanelelis">
            <FaGithub className="size-5 hover:text-blue-400 hover:scale-115 transition duration-300 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/geovanelelis/">
            <FaLinkedin className="size-5 hover:text-blue-400 hover:scale-115 transition duration-300 cursor-pointer" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=98667-8504&text=Ol%C3%A1%20Geovane!">
            <FaWhatsapp className="size-5 hover:text-blue-400 hover:scale-115 transition duration-300 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* FOTO PRINCIPAL */}
      <div className="relative z-10 flex flex-col items-center w-[200px]">
        <div className="w-full px-2 pt-4 overflow-hidden bg-gradient-to-tl from-blue-950 to-blue-700 rounded-4xl mt-0 border-10 border-primary-950">
          <Image src={'/foto.png'} alt="foto de Geovane Lelis" width={1000} height={1000} />
        </div>
      </div>
    </div>
  )
}
