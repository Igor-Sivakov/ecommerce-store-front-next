import { TfiFaceSad } from 'react-icons/tfi'
import styles from './Error.module.scss'

export const Error = () => {
  return (
    <div className={styles.error_title}>
      <p>Ups, something went wrong :(</p>
      <TfiFaceSad />
    </div>
  )
}
