import { FC, useEffect, useState } from 'react'
import cn from 'classnames'

import { useAppSelector } from '@/app/hooks/useTypedDispatch&Selector'
import { useActions } from '@/app/hooks/useActions'

import { getErrorSelect } from '@/redux/selectors/selectors'

import styles from './Error.module.scss'

export const ErrorBanner: FC = () => {
  const error = useAppSelector(getErrorSelect)

  const [isShowed, setIsShowed] = useState<boolean | null>(null)

  const { removeError } = useActions()

  useEffect(() => {
    const closeBanner = () => {
      setIsShowed(false)
      setTimeout(() => removeError(), 1000)
    }

    if (error) {
      setIsShowed(true)
      setTimeout(closeBanner, 10000)
    }
  }, [error])

  return (
    <div
      className={cn(styles.error_banner, {
        [styles.error_banner__showed]: isShowed,
        [styles.error_banner__hidden]: isShowed === false,
      })}
    >
      <h4>{error}</h4>
    </div>
  )
}
