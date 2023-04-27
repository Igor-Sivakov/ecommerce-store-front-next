import { FC } from 'react'
import styles from './HomeInformation.module.scss'

export const HomeInformation: FC = () => {
  return (
    <section className={styles.root}>
      <div className={styles.left_block}>
        <h1>100K</h1>
        <span>Costomers</span>
      </div>

      <div className={styles.right_block}>
        <div>
          <h5>New collection</h5>
          <p>
            The red dress was inspired by a love of fashion and a fear of
            complacency. Our challenge was to create a dress
          </p>
        </div>
      </div>
    </section>
  )
}
