import { useTranslation } from 'react-i18next'

const Loading = () => {
  const { t } = useTranslation()
  return (
    <p className="flex items-center  justify-center text-lg text-slate-900 dark:text-slate-50">
      {t('loading')}
    </p>
  )
}
export default Loading
