import { FC, useState } from 'react'

import { useQuery } from 'react-query'
import { useAppSelector } from '@/app/hooks/useTypedDispatch&Selector'

import { getSearchTermSelect } from '@/redux/selectors/selectors'

import { productAPI } from '@/app/api/productAPI'

import { IProduct } from '@/app/types/product.interface'

import { Layout } from '../../layout/Layout'
import { Error } from '../../common/error/Error'
import { ProductCard } from '../../common/product-card/ProductCard'
import { Spinner } from '../../common/spinner/Spinner'

import styles from './ProductsBySearch.module.scss'

export const ProductsBySearch: FC = () => {
  const searchTerm = useAppSelector(getSearchTermSelect)

  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  )

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', searchTerm],
    queryFn: () => productAPI.bySearchTerm(searchTerm),
  })

  return (
    <Layout title='Search' description='Some description for SEO optimization.'>
      <div className={styles.root}>
        <div className={styles.heading}>
          <h2>products by search</h2>
        </div>

        <div className={styles.items_container}>
          {isError ? (
            <Error />
          ) : isLoading ? (
            <Spinner isInTheCenter={true} />
          ) : data?.length ? (
            data.map((product: IProduct, i: number) => (
              <div key={product.id} onClick={() => setSelectedItemIndex(i)}>
                <ProductCard
                  product={product}
                  isActive={selectedItemIndex === i}
                  setIsActive={setSelectedItemIndex}
                />
              </div>
            ))
          ) : (
            <div className={styles.not_found}>0 Results For {searchTerm}</div>
          )}
        </div>
      </div>
    </Layout>
  )
}
