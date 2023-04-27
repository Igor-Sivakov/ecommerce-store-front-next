import { FC, PropsWithChildren } from 'react'
import styles from './Grid.module.scss'

export const Column: FC<PropsWithChildren<{ size: number }>> = ({
  size,
  children,
}) => {
  return (
    <div
      style={{ gridColumn: `span ${size} / span ${size}` }}
      className={styles.column}
    >
      {children}
    </div>
  )
}
