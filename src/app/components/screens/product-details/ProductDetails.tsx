import { FC } from 'react'

import { useQuery } from 'react-query'
import { useRouter } from 'next/router'

import { productAPI } from '@/app/api/productAPI'

import { IProduct, IProductDetails } from '@/app/types/product.interface'
import { CategoryType } from '@/app/types/sorting.interface'

import { Layout } from '../../layout/Layout'
import { Carousel } from '../../common/carousel/Carousel'
import { ImagesBlock } from '../../layout/main/images-block/ImagesBlock'
import { InfoBlock } from '../../layout/main/info-block/InfoBlock'
import { Spinner } from '../../common/spinner/Spinner'

import styles from './ProductDetails.module.scss'

import mockData from '../../../../mock/mock.data.json'

const ProductDetails: FC = () => {
  const carouselTitle = 'similar goods' as CategoryType

  const products = useQuery({
    queryKey: ['products'],
    queryFn: async () => (await productAPI.getProducts()).items,
    initialData: mockData.items,
  })

  const router = useRouter()
  const { slug } = router.query

  const product: IProduct = products.data?.find(
    (product) => product.slug === slug
  ) as IProduct

  const category = product.category || null

  const { data, isLoading } = useQuery({
    queryKey: ['category', category],
    queryFn: async () => (await productAPI.getProducts(category)).items,
  })

  return (
    <Layout title='Product details' description={product?.description}>
      <section className={styles.root}>
        <div className={styles.product__container}>
          <ImagesBlock images={product?.images as string[]} />
          <InfoBlock product={product as IProduct} />
        </div>

        {isLoading ? (
          <Spinner />
        ) : data?.length ? (
          <div className={styles.carousel}>
            <Carousel
              maxW={1310}
              itemsCount={7}
              products={data}
              category={carouselTitle}
            />
          </div>
        ) : (
          <></>
        )}
      </section>
    </Layout>
  )
}

export default ProductDetails
