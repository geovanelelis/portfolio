// 'use client'

import type { Metadata } from 'next'
import {
  Anybody,
  Mohave,
  Odor_Mean_Chey,
  Sansation,
} from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const sansation = Sansation({
  variable: '--font-sansation',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

const anybody = Anybody({
  variable: '--font-anybody',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const mohave = Mohave({
  variable: '--font-mohave',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const odorMeanChey = Odor_Mean_Chey({
  variable: '--font-odor-mean-chey',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Geovane Lelis',
  description: 'Portfolio pessoal de Geovane Lelis',
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  const messages = await getMessages({ locale })
  return (
    <html
      lang={locale}
      className={`${mohave.variable} ${anybody.variable} ${sansation.variable} ${odorMeanChey.variable} antialiased`}
    >
      <body className="bg-primary-950 text-white">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
