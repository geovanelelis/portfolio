'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false)
  const [activeSection, setActiveSection] = useState<string>(window.location.hash)
  const [activeIdiomaModal, setActiveIdiomaModal] = useState(false)
  const [country, setCountry] = useState('')

  const t = useTranslations('nav')
  const locale = useLocale()
  const router = useRouter()

  const navItems = [
    { name: t('home'), href: '#inicio' },
    { name: t('portfolio'), href: '#portfolio' },
    { name: t('about'), href: '#sobre' },
    { name: t('contact'), href: '#contato' },
  ]

  useEffect(() => {
    setActiveSection(window.location.hash)

    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }

    const handleHashChange = () => setActiveSection(location.hash)

    window.addEventListener('scroll', handleScroll)

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const selectCountry = (lang: string) => {
    setCountry(lang)
    setActiveIdiomaModal(false)
    lang === 'pt' ? router.push('/') : router.push(`/${lang}`)
  }

  return (
    <div
      className={`absolute left-0 right-0 justify-center mx-auto mt-5 border-primary-800 bg-primary-950/50 backdrop-blur-lg rounded-2xl ${
        isScrolling
          ? 'w-[85%] lg:w-[1000px] fixed z-50 mt-6 top-0 border py-3 px-4'
          : 'w-full py-3 lg:px-12 px-6 z-50'
      } transition-all duration-400`}
    >
      <div className="w-full flex items-center justify-between font-primary">
        <a href="/">
          <div className="flex title justify-center items-center gap-3 cursor-pointer group">
            <Image src={'/logo-icon.svg'} width={30} height={30} alt="Logo" />
            <h1
              className={`font-logo sm:absolute text-primary-100 text-2xl sm:translate-y-2 sm:opacity-0 sm:group-hover:opacity-100  group-hover:translate-y-0 ${
                isScrolling ? 'left-15' : 'left-22'
              } transition-all duration-400`}
            >
              <span className="bg-gradient-to-tl from-blue-600 via-blue-500 to-blue-300 inline-block text-transparent bg-clip-text">
                geo
              </span>
              vane
            </h1>
          </div>
        </a>
        <div className="hidden sm:flex">
          <ul className="text-primary-300 flex justify-center items-center h-full gap-6 lg:gap-10 text-xs font-bold">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  className={`navlink hover:text-primary-100 transition-colors duration-300 ${
                    activeSection === item.href ? 'activeNavLink text-primary-100' : ''
                  }`}
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div
            className="group flex items-center gap-2 px-4 py-2 border rounded-full border-primary-600 hover:bg-primary-50 cursor-pointer transition-all duration-300"
            onClick={() => setActiveIdiomaModal(!activeIdiomaModal)}
          >
            <div className="flex flex-col w-5 h-5 object-cover overflow-hidden">
              {locale === 'en' ? (
                <Image
                  src={'/images/bandeira-en.png'}
                  alt="Linguagem EN-US"
                  width={20}
                  height={20}
                  className="rounded-full w-full"
                />
              ) : (
                <Image
                  src={'/images/bandeira-br.jpg'}
                  alt="Linguagem PT-BR"
                  width={20}
                  height={20}
                  className="rounded-full w-full"
                />
              )}
            </div>
            {activeIdiomaModal ? (
              <FaAngleUp className="size-3 group-hover:text-blue-600 transition-colors duration-300" />
            ) : (
              <FaAngleDown className="size-3 group-hover:text-blue-600 transition-colors duration-300" />
            )}
          </div>

          {activeIdiomaModal && (
            <div className="absolute mt-2 text-primary-950 text-xs bg-primary-50 border border-primary-950 rounded-xl p-1">
              <ul className="flex flex-col">
                <li
                  className="flex items-center gap-2 cursor-pointer hover:bg-blue-300 py-1 px-3 rounded-full"
                  onClick={() => selectCountry('pt')}
                >
                  <div className="w-5 h-5 object-cover overflow-hidden">
                    <Image
                      src={'/images/bandeira-br.jpg'}
                      alt="Linguagem PT-BR"
                      width={20}
                      height={20}
                      className="rounded-full w-full"
                    />
                  </div>
                  BR
                </li>
                <li
                  className="flex items-center gap-2 cursor-pointer hover:bg-blue-300 py-1 px-3 rounded-full"
                  onClick={() => selectCountry('en')}
                >
                  <div className="w-5 h-5 object-cover overflow-hidden">
                    <Image
                      src={'/images/bandeira-en.png'}
                      alt="Linguagem EN-US"
                      width={20}
                      height={20}
                      className="rounded-full w-full"
                    />
                  </div>
                  EN
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
