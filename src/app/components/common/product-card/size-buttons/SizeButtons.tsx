import { FC } from 'react'
import cn from 'classnames'

import styles from './SizeButtons.module.scss'

type PropsType = {
  sizes: string[]
  selectedSize: string
  setSelectedSize: (value: string) => void
}

export const SizeButtons: FC<PropsType> = ({
  sizes,
  selectedSize,
  setSelectedSize,
}) => {
  return (
    <div className={styles.root}>
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => setSelectedSize(size)}
          className={cn(styles.size_btn, {
            [styles.size_btn__chosen]: selectedSize === size,
          })}
        >
          {size}
        </button>
      ))}
    </div>
  )
}
