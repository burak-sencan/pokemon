import { useTranslation } from 'react-i18next'

const Error = () => {
  const { t } = useTranslation()
  return (
    <p className="flex items-center  justify-center text-lg text-slate-900 dark:text-slate-50">
      {t('error')}
    </p>
  )
}
export default Error
