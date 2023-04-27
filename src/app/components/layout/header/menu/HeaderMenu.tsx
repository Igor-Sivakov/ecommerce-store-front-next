import { FC, useRef, useState } from 'react'
import Link from 'next/link'

import { items } from './menu.data'

import { Column } from '@/app/components/common/grid/Column'
import { CategoriesPopUp } from '../categories-popup/CategoriesPopUp'

import styles from './HeaderMenu.module.scss'

type PropsType = {
  columnSize: number
}

export const HeaderMenu: FC<PropsType> = ({ columnSize }) => {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean | null>(null)

  const refCategoriesPopup = useRef<HTMLDivElement>(null)

  const handleOpenPopup = (title: string) => {
    if (title === 'Categories' && !isOpenPopup) {
      setIsOpenPopup(true)
      refCategoriesPopup.current?.focus()
    }
    return
  }

  const handleClosePopup = () => {
    refCategoriesPopup.current?.blur()
    setIsOpenPopup(false)
  }

  return (
    <Column size={columnSize}>
      <div className={styles.root}>
        {items.map((item) => {
          const havePopup = item.title === 'Categories'

          return (
            <div className={styles.item} key={item.title}>
              <Link
                href={item.link}
                onClick={() => handleOpenPopup(item.title)}
                className={styles.item_link}
              >
                {item.title}
              </Link>

              {havePopup && (
                <CategoriesPopUp
                  ref={refCategoriesPopup}
                  handleClose={handleClosePopup}
                  isOpen={isOpenPopup}
                />
              )}
            </div>
          )
        })}
      </div>
    </Column>
  )
}
