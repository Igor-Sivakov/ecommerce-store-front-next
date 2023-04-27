import { FC } from 'react'

import { AiOutlineCloseCircle } from 'react-icons/ai'

import { INotification } from '@/app/components/layout/header/notifications-popup/notifications.data'

import styles from './Notification.module.scss'

export const Notification: FC<INotification> = ({
  color,
  Icon,
  title,
  text,
}) => {
  return (
    <div className={styles.root}>
      <Icon style={{ fill: `${color}` }} />

      <div className={styles.text}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>

      <button className={styles.delete_btn}>
        <AiOutlineCloseCircle />
      </button>
    </div>
  )
}
