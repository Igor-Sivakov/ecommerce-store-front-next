import { ForwardedRef, forwardRef } from 'react'
import cn from 'classnames'

import { INotification } from './notifications.data'

import { useAuth } from '@/app/hooks/useAuth'

import { Notification } from './notification/Notification'

import styles from './NotificationsPopUp.module.scss'

type PropsType = {
  notifications: INotification[]
  isOpen: boolean | null
  handleClose: () => void
}

export const NotificationsPopUp = forwardRef(function PopUp(
  { notifications, isOpen, handleClose }: PropsType,
  ref: ForwardedRef<HTMLDivElement> | null
) {
  const { user } = useAuth()
  return (
    <div
      className={cn(styles.root, {
        [styles.root__open]: isOpen,
        [styles.root__close]: isOpen === false,
      })}
      ref={ref}
      tabIndex={1}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setTimeout(handleClose, 100)
        }
      }}
    >
      <div className={styles.wrapper}>
        {user ? (
          notifications.map((obj) => <Notification key={obj.id} {...obj} />)
        ) : (
          <div className={styles.no_notifications}>
            You don`t have notifications
          </div>
        )}
      </div>
    </div>
  )
})
