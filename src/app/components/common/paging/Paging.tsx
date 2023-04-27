import { Dispatch, FC, SetStateAction } from 'react'
import { Pagination } from 'pagination-react-js'
import cn from 'classnames'

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import { RxDotsHorizontal } from 'react-icons/rx'

import styles from './Paging.module.scss'

type PropsType = {
  entriesPerPage: {
    readonly get: number
    readonly set: Dispatch<SetStateAction<number>>
  }
  currentPage: {
    readonly get: number
    readonly set: Dispatch<SetStateAction<number>>
  }
  totalEntries: number
}

export const Paging: FC<PropsType> = ({
  entriesPerPage,
  currentPage,
  totalEntries,
}) => {
  return (
    <div>
      <Pagination
        entriesPerPage={entriesPerPage.get}
        totalEntries={totalEntries}
        currentPage={{ get: currentPage.get, set: currentPage.set }}
        offset={1}
        classNames={{
          wrapper: styles['pagination'],
          item: styles['pagination-item'],
          itemActive: styles['pagination-item-active'],
          navPrev: cn(styles['pagination-item'], styles['nav-item']),
          navNext: cn(styles['pagination-item'], styles['nav-item']),
          navPrevCustom: styles['pagination-item'],
          navNextCustom: styles['pagination-item'],
        }}
        navPrev={<AiOutlineLeft />}
        navNext={<AiOutlineRight />}
        navNextCustom={{ steps: 2, content: <RxDotsHorizontal /> }}
        navPrevCustom={{ steps: 2, content: <RxDotsHorizontal /> }}
        showFirstNumberAlways={true}
        showLastNumberAlways={true}
      />
    </div>
  )
}
