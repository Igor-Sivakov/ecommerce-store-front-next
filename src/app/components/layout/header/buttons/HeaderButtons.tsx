import { FC, useRef, useState } from 'react'

import { notifications } from '@/app/components/layout/header/notifications-popup/notifications.data'

import { BiBasket, BiBell, BiSearch } from 'react-icons/bi'

import { useAuth } from '@/app/hooks/useAuth'
import { useAppSelector } from '@/app/hooks/useTypedDispatch&Selector'

import { getCartSelect } from '@/redux/selectors/selectors'

import { Column } from '@/app/components/common/grid/Column'
import { SquareButton } from '@/app/components/common/square-button/SquareButton'
import { Search } from '../search/Search'
import { NotificationsPopUp } from '../notifications-popup/NotificationsPopUp'

import styles from './HeaderButtons.module.scss'

type PropsType = {
  columnSize: number
  onClickOpenCart: (value: boolean) => void
}

export const HeaderButtons: FC<PropsType> = ({
  columnSize,
  onClickOpenCart,
}) => {
  const { totalItemsCount } = useAppSelector(getCartSelect)
  const refNotifications = useRef<HTMLDivElement>(null)

  const [isOpenNotifications, setIsOpenNotifications] = useState<
    boolean | null
  >(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const { user } = useAuth()

  const notificationsCount = user ? notifications.length : 0

  const handleOpenNotifications = () => {
    if (!isOpenNotifications) {
      setIsOpenNotifications(true)
      refNotifications.current?.focus()
    }
    return
  }

  const handleCloseNotifications = () => {
    setIsOpenNotifications(false)
    refNotifications.current?.blur()
  }

  const handleCloseSearch = () => {
    setIsOpenNotifications(null)
    setIsSearchOpen(false)
  }

  return (
    <Column size={columnSize}>
      {isSearchOpen ? (
        <Search isOpen={isSearchOpen} handleClose={handleCloseSearch} />
      ) : (
        <div className={styles.root}>
          <button onClick={() => setIsSearchOpen(true)}>
            <SquareButton Icon={BiSearch} />
          </button>

          <button onClick={handleOpenNotifications}>
            <SquareButton Icon={BiBell} count={notificationsCount} />
          </button>

          <button onClick={() => onClickOpenCart(true)}>
            <SquareButton Icon={BiBasket} count={totalItemsCount} />
          </button>

          <NotificationsPopUp
            notifications={notifications}
            ref={refNotifications}
            handleClose={handleCloseNotifications}
            isOpen={isOpenNotifications}
          />
        </div>
      )}
    </Column>
  )
}
