import { FC } from 'react'

import { useQuery } from 'react-query'
import { useAppSelector } from '@/app/hooks/useTypedDispatch&Selector'

import { getCategoriesSelect } from '@/redux/selectors/selectors'

import { productAPI } from '@/app/api/productAPI'

import { IProduct, IProductsShopPage } from '@/app/types/product.interface'

import { Layout } from '../../layout/Layout'
import { Carousel } from '../../common/carousel/Carousel'
import { Error } from '../../common/error/Error'
import { Spinner } from '../../common/spinner/Spinner'

import styles from './Shop.module.scss'

import mockData from '../../../../mock/mock.data.json'

export const Shop: FC = () => {
  const categories = useAppSelector(getCategoriesSelect)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: async () => (await productAPI.getProducts()).items,
    initialData: mockData.items,
  })

  const categoriesData = categories.map((item) => {
    return {
      name: item.category,
      data: data?.filter((obj) => obj.category === item.category),
    }
  })

  return (
    <Layout title='Shop' description='Some description for SEO optimization.'>
      <section className={styles.root}>
        {isError ? (
          <Error />
        ) : isLoading ? (
          <Spinner isInTheCenter={true} />
        ) : (
          categoriesData.map((category) => (
            <Carousel
              key={category.name}
              maxW={1120}
              itemsCount={6}
              category={category.name}
              products={category.data as IProduct[]}
            />
          ))
        )}
      </section>
    </Layout>
  )
}
