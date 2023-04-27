import { FC } from 'react'
import styles from './HotSale.module.scss'

export const HotSale: FC = () => {
  return (
    <section className={styles.root}>
      <div className={styles.hot_sale}>HOT SALE</div>

      <h1>A RED DRESS WILL BRIGHTEN UP YOUR EVENING</h1>

      <div className={styles.bottom_inner}>
        <div>
          <span className={styles.actual_price}>$195.00</span>
          <span className={styles.old_price}>$295.00</span>
        </div>

        <button className={styles.button}>BUY NOW</button>
      </div>
    </section>
  )
}
