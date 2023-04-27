import { FC, useRef, useState } from 'react'

import { AiFillCaretDown, AiFillCaretUp, AiOutlineUser } from 'react-icons/ai'

import { useAuth } from '@/app/hooks/useAuth'
import { useActions } from '@/app/hooks/useActions'

import { Column } from '@/app/components/common/grid/Column'
import { SquareButton } from '@/app/components/common/square-button/SquareButton'
import { ProfilePopUp } from '../profile-popup/ProfilePopUp'

import styles from './HeaderProfile.module.scss'

type PropsType = {
  columnSize: number
  onClickOpenCabinet: (value: boolean) => void
  onClickOpenLogin: (value: boolean) => void
  onClickOpenSignUp: (value: boolean) => void
}

export const HeaderProfile: FC<PropsType> = ({
  columnSize,
  onClickOpenCabinet,
  onClickOpenLogin,
  onClickOpenSignUp,
}) => {
  const refAuthMenu = useRef<HTMLDivElement>(null)

  const [isOpenProfilePopUp, setIsOpenProfilePopUp] = useState<boolean | null>(
    null
  )

  const { user } = useAuth()
  const { addError } = useActions()

  const authTitle = user
    ? `${user.firstName} ${user.lastName}`
    : 'authorization'

  const handleOpenAuthMenu = () => {
    if (!isOpenProfilePopUp) {
      setIsOpenProfilePopUp(true)
      refAuthMenu.current?.focus()
    }
    return
  }

  const handleCloseAuthMenu = () => {
    setIsOpenProfilePopUp(false)
    refAuthMenu.current?.blur()
  }

  const cabinetButtonHandler = () => {
    if (user) {
      onClickOpenCabinet(true)
    } else {
      addError('Please register to access your personal account.')
    }
  }

  return (
    <Column size={columnSize}>
      <div className={styles.root}>
        <div className={styles.container}>
          <button onClick={cabinetButtonHandler} className={styles.cabinet_btn}>
            <SquareButton Icon={AiOutlineUser} />
          </button>

          <div className={styles.profile_info}>
            <p
              onClick={() => handleOpenAuthMenu()}
              className={styles.profile_login}
            >
              {authTitle}
              {isOpenProfilePopUp ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </p>

            {user && <p>Balance: 0.00$</p>}
          </div>

          <ProfilePopUp
            ref={refAuthMenu}
            isOpen={isOpenProfilePopUp}
            handleClose={handleCloseAuthMenu}
            onClickOpenLogin={onClickOpenLogin}
            onClickOpenSignUp={onClickOpenSignUp}
          />
        </div>
      </div>
    </Column>
  )
}
