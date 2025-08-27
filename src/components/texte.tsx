import Image from 'next/image'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import {
  HiOutlineCalendarDays,
  HiOutlineDevicePhoneMobile,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from 'react-icons/hi2'

export function ProfileCard() {
  return (
    <div className="w-full flex items-center justify-center relative mt-6 font-primary text-primary-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 max-w-[350px] pt-22 pb-8 px-8 flex flex-col items-center gap-6 bg-gradient-to-br from-primary-900 border border-primary-800 rounded-3xl z-0">
        {/* NOME E TAG */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="flex gap-2 items-start">
            <span className="text-blue-400 text-xs text-right flex flex-col leading-1">
              <span className="text-base font-semibold">olá,</span>
              <span>eu sou</span>
            </span>
            <span className="text-primary-100 text-3xl font-bold">Geovane Lelis</span>
          </h1>
          <span className="text-sm text-primary-200 bg-primary-800 px-4 py-1 rounded-lg">
            Desenvolvedor Full Stack
          </span>
        </div>

        <hr className="w-full text-primary-700" />

        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <span className="bg-gradient-to-br from-primary-800/80 to-primary-950/60 rounded-xl p-4 shadow-xl shadow-primary-950/50">
              <HiOutlineEnvelope className="size-5 text-blue-400" />
            </span>
            <h2 className="flex flex-col">
              <span className="text-xs text-primary-400">EMAIL</span>
              <span>geovanelelisds@gmail.com</span>
            </h2>
          </div>
          <div className="flex gap-4 items-center w-full justify-end">
            <h2 className="flex flex-col">
              <span className="text-xs text-primary-400 text-end">PHONE</span>
              <span>+55 (31) 9 8667-8504</span>
            </h2>
            <span className="bg-gradient-to-br from-primary-800/80 to-primary-950/60 rounded-xl p-4 shadow-xl shadow-primary-950/50">
              <HiOutlineDevicePhoneMobile className="size-5 text-blue-400" />
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="bg-gradient-to-br from-primary-800/80 to-primary-950/60 rounded-xl p-4 shadow-xl shadow-primary-950/50">
              <HiOutlineCalendarDays className="size-5 text-blue-400" />
            </span>
            <h2 className="flex flex-col">
              <span className="text-xs text-primary-400">BIRTHDAY</span>
              <span>June 16, 2003</span>
            </h2>
          </div>
          <div className="flex gap-4 items-center w-full justify-end">
            <h2 className="flex flex-col">
              <span className="text-xs text-primary-400 text-end">LOCATION</span>
              <span className="text-end">Ribeirão das Neves, Minas Gerais, Brazil</span>
            </h2>
            <span className="bg-gradient-to-br from-primary-800/80 to-primary-950/60 rounded-xl p-4 shadow-xl shadow-primary-950/50">
              <HiOutlineMapPin className="size-5 text-blue-400" />
            </span>
          </div>
        </div>

        <div className="flex gap-6">
          <FaGithub className="size-5 hover:text-blue-400 hover:scale-115 transition duration-300 cursor-pointer" />
          <FaLinkedin className="size-5 hover:text-blue-400 hover:scale-115 transition duration-300 cursor-pointer" />
          <FaWhatsapp className="size-5 hover:text-blue-400 hover:scale-115 transition duration-300 cursor-pointer" />
        </div>
      </div>

      {/* FOTO PRINCIPAL */}
      <div className="relative z-10 flex flex-col items-center w-[150px]">
        <div className="w-full px-2 pt-4 overflow-hidden bg-gradient-to-tl from-blue-950 to-blue-700 rounded-3xl mt-0 border-10 border-primary-950">
          <Image src={'/foto3.png'} alt="foto de Geovane Lelis" width={1000} height={1000} />
        </div>
      </div>
    </div>
  )
}
