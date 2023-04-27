import { FC, PropsWithChildren } from 'react'
import cn from 'classnames'

import styles from './Grid.module.scss'

export const Row: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return <div className={cn(styles.row, className)}>{children}</div>
}
