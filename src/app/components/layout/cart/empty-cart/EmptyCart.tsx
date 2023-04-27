import { FC } from 'react'
import Image from 'next/image'

import cartImg from '../../../../assets/img/empty-cart.png'

import styles from './EmptyCart.module.scss'

export const EmptyCart: FC = () => {
  return (
    <div className={styles.root}>
      <Image src={cartImg} width={200} height={200} alt='empty cart' />

      <h4>Your cart is empty</h4>
      <p>Add something to make me happy :)</p>
    </div>
  )
}
