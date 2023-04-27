import { FC } from 'react'
import cn from 'classnames'

import { IconType } from 'react-icons'

import styles from './SquareButton.module.scss'

type PropsType = {
  Icon: IconType
  count?: number
}

export const SquareButton: FC<PropsType> = ({ Icon, count }) => {
  return (
    <div className={styles.root}>
      <Icon className={styles.icon} />
      <span className={cn({ [styles.badge]: count })}>
        {count ? count : ''}
      </span>
    </div>
  )
}
