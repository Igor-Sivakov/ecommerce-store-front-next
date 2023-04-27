import { GetStaticProps, NextPage } from 'next'

import { productAPI } from '@/app/api/productAPI'

import { IProductsCategoryPage } from '@/app/types/product.interface'

import { Category } from '@/app/components/screens/category/Category'

const CategoryPage: NextPage<IProductsCategoryPage> = ({ products }) => {
  return <Category />
}
/* 
export const getStaticProps: GetStaticProps<
  IProductsCategoryPage
> = async () => {
  const products = await productAPI.getProducts()

  return {
    props: {
      products,
    },
  }
} */

export default CategoryPage
