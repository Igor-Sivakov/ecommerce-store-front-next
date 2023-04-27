import { FC, useState } from 'react'
import cn from 'classnames'

import { delivery } from './delivery.data'

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import styles from './DeliveryAccordion.module.scss'

export const DeliveryAccordion: FC = () => {
  const [isOpenAccordion, setIsOpenAccordion] = useState(false)

  return (
    <div className={styles.root}>
      <div className={styles.accordion}>
        <div
          onClick={() => setIsOpenAccordion(!isOpenAccordion)}
          className={styles.heading}
        >
          <h5>Delivery</h5>
          <i>{isOpenAccordion ? <IoIosArrowUp /> : <IoIosArrowDown />}</i>
        </div>

        <div
          className={cn(styles.content, {
            [styles.content__show]: isOpenAccordion,
          })}
        >
          {delivery.map((obj) => (
            <div key={obj.title} className={styles.item}>
              <div className={styles.item_title}>
                {obj.icon}
                <span>{obj.title}</span>
              </div>

              <div className={styles.item_tariff}>{obj.tariffs}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
