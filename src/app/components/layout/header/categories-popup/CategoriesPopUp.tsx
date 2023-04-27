import { ForwardedRef, forwardRef } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import { useActions } from '@/app/hooks/useActions'
import { useAppSelector } from '@/app/hooks/useTypedDispatch&Selector'

import { getCategoriesSelect } from '@/redux/selectors/selectors'

import { CategoryType } from '@/app/types/sorting.interface'

import styles from './CategoriesPopUp.module.scss'

type PropsType = {
  handleClose: () => void
  isOpen: boolean | null
}

export const CategoriesPopUp = forwardRef(function PopUp(
  { handleClose, isOpen }: PropsType,
  ref: ForwardedRef<HTMLDivElement> | null
) {
  const categories = useAppSelector(getCategoriesSelect)

  const { addCategory } = useActions()

  const handleSelectCategory = (category: CategoryType) => {
    addCategory(category)
    setTimeout(handleClose, 100)
  }

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
          if (isOpen) setTimeout(handleClose, 100)
        }
      }}
    >
      {categories.map((item) => (
        <div className={styles.category} key={item.name}>
          <Link
            onClick={() => handleSelectCategory(item.category)}
            href={`/category`}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  )
})
