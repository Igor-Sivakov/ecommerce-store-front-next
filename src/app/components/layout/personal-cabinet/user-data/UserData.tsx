import { FC } from 'react'

import { IUser } from '@/app/types/user.interface'

import styles from './UserData.module.scss'

type PropsType = {
  user: IUser | null
}

export const UserData: FC<PropsType> = ({ user }) => {
  return (
    <>
      <div className={styles.user_data}>
        <div className={styles.options}>
          <div>FIRST NAME:</div>
          <div>LAST NAME:</div>
          <div>GENDER:</div>
        </div>

        <div className={styles.information}>
          <div>{user?.firstName || ''}</div>
          <div>{user?.lastName || ''}</div>
          <div>{user?.gender || ''}</div>
        </div>
      </div>

      <div className={styles.login_data}>
        <div className={styles.options}>
          <div>E-MAIL:</div>
          <div>PASSWORD:</div>
        </div>

        <div className={styles.information}>
          <div>{user?.email || ''}</div>

          <div onClick={() => {}} className={styles.send_password_link}>
            {user ? 'send my password to email' : ''}
          </div>
        </div>
      </div>
    </>
  )
}
