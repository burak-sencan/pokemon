import { RouterProvider } from 'react-router-dom'
import Router from './router'

//i18n
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, tr } from './i18n'

i18n.use(initReactI18next).init({
  resources: {
    en,
    tr,
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
})

const App = () => {
  return <RouterProvider router={Router} />
}
export default App
