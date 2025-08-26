// 'use client'

import type { Metadata } from 'next'
import { MuseoModerno, Odor_Mean_Chey, Poppins, Sansation } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const museomoderno = MuseoModerno({
  variable: '--font-museomoderno',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const sansation = Sansation({
  variable: '--font-sansation',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

const odormeanchey = Odor_Mean_Chey({
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
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const messages = await getMessages({ locale })
  return (
    <html
      lang={locale}
      className={`${poppins.variable} ${museomoderno.variable} ${sansation.variable} ${odormeanchey.variable} antialiased`}
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
