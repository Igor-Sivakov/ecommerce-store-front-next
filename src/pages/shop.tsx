import { GetStaticProps, NextPage } from 'next'

import { productAPI } from '@/app/api/productAPI'

import { IProductsShopPage } from '@/app/types/product.interface'

import { Shop } from '@/app/components/screens/shop/Shop'

const ShopPage: NextPage<IProductsShopPage> = ({ products }) => {
  return <Shop />
}

/* export const getStaticProps: GetStaticProps<IProductsShopPage> = async () => {
  const products = (await productAPI.getProducts()).items

  return {
    props: {
      products,
    },
  }
}
 */
export default ShopPage
