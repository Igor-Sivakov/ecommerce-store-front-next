import { FC, useState } from 'react'
import cn from 'classnames'

import { formatToCurrency } from '@/app/utils/format-to-currency'

import { useActions } from '@/app/hooks/useActions'

import { IProduct } from '@/app/types/product.interface'
import { DeliveryAccordion } from '../delivery-accordion/DeliveryAccordion'

import styles from './InfoBlock.module.scss'

export const InfoBlock: FC<{ product: IProduct }> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  const { addToCart } = useActions()

  const addToCartHandler = () => {
    const cartItem = {
      product: product,
      size: selectedSize,
      quantity: 1,
    }
    addToCart(cartItem)
  }

  return (
    <section className={styles.root}>
      <h2 className={styles.product_name}>{product.name}</h2>

      <div className={styles.description}>
        <h5>Description</h5>
        <p>{product.description}</p>
      </div>

      <div className={styles.sizes}>
        <h5>Size</h5>
        {product.sizes.map((size) => (
          <button
            className={cn(styles.size_btn, {
              [styles.size_btn__selected]: selectedSize === size,
            })}
            onClick={() => setSelectedSize(size)}
            key={size}
          >
            {size}
          </button>
        ))}
      </div>

      <div className={styles.price}>
        {formatToCurrency(product.price as number)}
      </div>
      <button onClick={addToCartHandler} className={styles.add_btn}>
        Add to cart
      </button>

      <DeliveryAccordion />
    </section>
  )
}
