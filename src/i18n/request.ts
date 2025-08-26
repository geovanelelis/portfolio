import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => {
  // fallback para 'pt' se o locale não for 'pt' ou 'en'
  const resolvedLocale = (locale && ['pt', 'en'].includes(locale)) ? locale : 'pt';

  return {
    locale: resolvedLocale,
    messages: (await import(`../../messages/${resolvedLocale}.json`)).default,
  }
})
