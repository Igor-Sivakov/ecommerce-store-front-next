import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { productAPI } from '@/app/api/productAPI'

import { IProduct, IProductDetails } from '@/app/types/product.interface'

import ProductDetails from '@/app/components/screens/product-details/ProductDetails'

const ProductPage: NextPage<IProductDetails> = ({ product }) => {
  return <ProductDetails />
}

/* export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
  const products = (await productAPI.getProducts()).items

  const paths = products.map((product) => {
    return {
      params: { slug: product.slug },
    }
  })

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<IProductDetails> = async ({
  params,
}) => {
  const products = (await productAPI.getProducts()).items

  const product: IProduct = products.find(
    (product) => product.slug === params?.slug
  ) as IProduct

  return {
    props: {
      product,
    },
  }
} */

export default ProductPage
