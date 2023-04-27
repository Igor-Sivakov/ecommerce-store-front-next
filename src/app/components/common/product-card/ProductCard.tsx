import { FC, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import { formatToCurrency } from '@/app/utils/format-to-currency'
import { useActions } from '@/app/hooks/useActions'

import { IProduct } from '@/app/types/product.interface'

import { ProductImage } from './product-image/ProductImage'
import { SizeButtons } from './size-buttons/SizeButtons'

import styles from './ProductCard.module.scss'

type PropsType = {
  product: IProduct
  isActive: boolean
  setIsActive: (value: number | null) => void
}

export const ProductCard: FC<PropsType> = ({
  product,
  isActive,
  setIsActive,
}) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  const { addToCart } = useActions()

  const addToCartHandler = () => {
    const cartItem = {
      product: product,
      size: selectedSize,
      quantity: 1,
    }

    addToCart(cartItem)
    setTimeout(() => setIsActive(null), 200)
  }

  return (
    <div className={styles.wrapper}>
      <div
        tabIndex={0}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsActive(null)
          }
        }}
        className={cn(styles.root, {
          [styles.active]: isActive,
        })}
      >
        <ProductImage images={product.images} isActive={isActive} />

        <div className={styles.heading}>{product.name}</div>

        {isActive && (
          <>
            <div className={styles.description}>{product.description}</div>
            <SizeButtons
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              sizes={product.sizes}
            />
          </>
        )}

        <div className={styles.price}>
          <span>{formatToCurrency(product.price)}</span>
        </div>

        {isActive && (
          <>
            <button onClick={addToCartHandler} className={styles.add_btn}>
              Add to cart
            </button>

            <Link href={`/product/${product.slug}`} className={styles.details}>
              more information
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
