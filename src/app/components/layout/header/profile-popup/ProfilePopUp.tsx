import { ForwardedRef, forwardRef } from 'react'
import cn from 'classnames'

import { useQuery } from 'react-query'
import { useAuth } from '@/app/hooks/useAuth'
import { useAppDispatch } from '@/app/hooks/useTypedDispatch&Selector'

import { profileAPI } from '@/app/api/profileAPI'

import { logout } from '@/redux/slices/auth/auth.actions'

import styles from './ProfilePopUp.module.scss'

type PropsType = {
  isOpen: boolean | null
  handleClose: () => void
  onClickOpenLogin: (value: boolean) => void
  onClickOpenSignUp: (value: boolean) => void
}

export const ProfilePopUp = forwardRef(function PopUp(
  { handleClose, isOpen, onClickOpenLogin, onClickOpenSignUp }: PropsType,
  ref: ForwardedRef<HTMLDivElement> | null
) {
  const { user } = useAuth()
  const dispatch = useAppDispatch()

  const { remove } = useQuery({
    queryKey: 'card',
    queryFn: async () => (await profileAPI.getCard())[0],
  })

  const handleLoginLogout = () => {
    if (user) {
      dispatch(logout())
      remove()
    } else {
      onClickOpenLogin(true)
    }
    handleClose()
  }

  const handleOpenSignUp = () => {
    onClickOpenSignUp(true)
    handleClose()
  }

  return (
    <div
      ref={ref}
      className={cn(styles.root, {
        [styles.root__open]: isOpen,
        [styles.root__close]: isOpen === false,
      })}
      tabIndex={1}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setTimeout(handleClose, 100)
        }
      }}
    >
      <div onClick={handleLoginLogout} className={styles.auth_link}>
        {user ? 'logout' : 'login'}
      </div>

      <div onClick={handleOpenSignUp} className={styles.auth_link}>
        sign up
      </div>
    </div>
  )
})
