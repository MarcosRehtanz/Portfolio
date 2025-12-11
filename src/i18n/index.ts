import es from './es.json'
import en from './en.json'

export type Language = 'es' | 'en'

export const translations = {
  es,
  en,
} as const

export type Translations = typeof es
