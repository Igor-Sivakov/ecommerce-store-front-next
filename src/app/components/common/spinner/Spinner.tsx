import { FC } from 'react'
import styles from './Spinner.module.scss'

type PropsType = {
  isInTheCenter?: boolean
}

export const Spinner: FC<PropsType> = ({ isInTheCenter }) => {
  return (
    <div
      style={isInTheCenter ? { height: '65vh' } : {}}
      className={styles.root}
    >
      <div className={styles['lds-roller']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
