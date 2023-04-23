import { useEffect, useState } from 'react'
import { icons } from '../constants/Icons'
import { useTranslation } from 'react-i18next'
import Divider from '../components/Divider'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  )
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const handleLang = (lang) => {
    i18n.changeLanguage(lang)
  }

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <div className="flex h-12 items-center justify-end gap-4 bg-white px-8 shadow-md dark:bg-slate-700">
      <button
        className="rounded-full p-3 shadow dark:bg-slate-800 dark:text-white"
        onClick={toggleTheme}
      >
        {theme === 'dark' ? icons.Famoon : icons.FaSun}
      </button>
      <div className="relative flex flex-col gap-2 dark:text-white ">
        <button
          onClick={() => {
            setOpen(!open)
          }}
        >
          {t('language')}
        </button>
        {open && (
          <div className="absolute top-10 z-10 flex flex-col gap-2 rounded-md bg-white shadow dark:bg-slate-600">
            <button
              className="px-6 pt-2"
              onClick={() => {
                handleLang('tr')
                setOpen(!open)
              }}
            >
              Tr
            </button>
            <Divider />
            <button
              className="px-6 pb-2"
              onClick={() => {
                handleLang('en')
                setOpen(!open)
              }}
            >
              En
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
export default Navbar
