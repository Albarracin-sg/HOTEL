import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/global.css'
import App from './App.tsx'

//exact language
import es from "../i18n/Spanish/es.json"
import en from "../i18n/English/en.json"
import Ko from "../i18n/Korean/ko.json"

//lenguage
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

i18next.use(initReactI18next).init({
  lng: 'es',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: {
      translation: es,
    },
    en: {
      translation: en,
    },
    ko: {
      translation: Ko,
    },
  }
})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
