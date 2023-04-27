import { FC, useState } from 'react'

import { useQuery } from 'react-query'
import { usePagination } from 'pagination-react-js'
import { useAppSelector } from '@/app/hooks/useTypedDispatch&Selector'

import { getCategorySelect } from '@/redux/selectors/selectors'

import { IQueryResponse, productAPI } from '@/app/api/productAPI'

import { EnumSorting } from '../../../types/sorting.interface'
import { IProductsCategoryPage } from '@/app/types/product.interface'

import { Paging } from '../../common/paging/Paging'
import { Layout } from '../../layout/Layout'
import { Error } from '../../common/error/Error'
import { ProductCard } from '../../common/product-card/ProductCard'
import { Sorting } from './sorting/Sorting'
import { Spinner } from '../../common/spinner/Spinner'

import styles from './Category.module.scss'

import mockData from '../../../../mock/mock.data.json'

export const Category: FC = () => {
  const category = useAppSelector(getCategorySelect)

  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  )
  const [sortType, setSortType] = useState<EnumSorting>(EnumSorting.NEWEST)

  const perPage = 24
  const { currentPage, entriesPerPage } = usePagination(1, perPage)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', category, sortType, currentPage.get, perPage],
    queryFn: () =>
      productAPI.getProducts(category, sortType, perPage, currentPage.get),
    initialData: mockData,
  })

  const { items, totalCount } = data as IQueryResponse

  return (
    <Layout
      title='Category'
      description='Some description for SEO optimization.'
    >
      <section className={styles.root}>
        <div className={styles.heading}>
          <h2>{category || 'all categories'}</h2>
          <Sorting sortType={sortType} setSortType={setSortType} />
        </div>

        <div className={styles.items_container}>
          {isError ? (
            <Error />
          ) : isLoading ? (
            <Spinner isInTheCenter={true} />
          ) : (
            items?.map((product, i) => (
              <div key={product.id} onClick={() => setSelectedItemIndex(i)}>
                <ProductCard
                  product={product}
                  isActive={selectedItemIndex === i}
                  setIsActive={setSelectedItemIndex}
                />
              </div>
            ))
          )}
        </div>

        {items?.length && totalCount > 24 && (
          <Paging
            entriesPerPage={entriesPerPage}
            currentPage={currentPage}
            totalEntries={totalCount}
          />
        )}
      </section>
    </Layout>
  )
}
