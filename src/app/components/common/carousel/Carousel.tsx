import { FC, useState } from 'react'
import { useRouter } from 'next/router'

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

import { useActions } from '@/app/hooks/useActions'
import { useAppSelector } from '@/app/hooks/useTypedDispatch&Selector'

import { getCategoriesSelect } from '@/redux/selectors/selectors'

import { IProduct } from '@/app/types/product.interface'
import { CategoryType } from '@/app/types/sorting.interface'

import { ProductCard } from '../product-card/ProductCard'

import styles from './Carousel.module.scss'

type PropsType = {
  products: IProduct[]
  category: CategoryType
  itemsCount: number
  maxW: number
}

export const Carousel: FC<PropsType> = ({
  products,
  category,
  itemsCount,
  maxW,
}) => {
  const categories = useAppSelector(getCategoriesSelect)

  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  )
  const [fromIndex, setFromIndex] = useState(0)
  const [toIndex, setToIndex] = useState(itemsCount)

  const router = useRouter()
  const { addCategory } = useActions()

  const handlePrevItems = () => {
    setFromIndex((prev) => (prev === 0 ? 0 : prev - 5))
    setToIndex((prev) => (prev <= itemsCount ? itemsCount : prev - 5))
  }

  const handleNextItems = () => {
    setFromIndex((prev) => (prev >= products.length - 5 ? prev : prev + 5))
    setToIndex((prev) => (prev >= products.length ? prev : prev + 5))
  }

  const handleLink = () => {
    const categoryName =
      categories.find((item) => item.category === category)?.category || null

    addCategory(categoryName)
    router.push('/category')
  }

  return (
    <section style={{ maxWidth: `${maxW}px` }} className={styles.root}>
      <div className={styles.heading}>
        <h2 onClick={handleLink} className={styles.category_name}>
          {category}
        </h2>

        <div className={styles.buttons}>
          <button onClick={handlePrevItems}>
            <AiOutlineLeft />
          </button>
          <button onClick={handleNextItems}>
            <AiOutlineRight />
          </button>
        </div>
      </div>

      <div className={styles.items_container}>
        {products.slice(fromIndex, toIndex).map((product, i) => (
          <div
            className={styles.item_inner__animated}
            key={product.id}
            onClick={() => {
              setTimeout(() => setSelectedItemIndex(i), 150)
            }}
          >
            <ProductCard
              product={product}
              isActive={selectedItemIndex === i}
              setIsActive={setSelectedItemIndex}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
