import { ICartItem } from '@/app/types/cart.interface'


export const calcTotalPrice = (items: ICartItem[]) => {
  return items.reduce((sum, obj) => {
    return obj.product.price * obj.quantity + sum
  }, 0)
}