import { createI18n } from 'vue-i18n'
import en from './en'
import th from './th'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, th }
})

export default i18n