import { ICartItem } from '@/app/types/cart.interface'


export const calcTotalCount = (items: ICartItem[]) => {
  return items.reduce((sum, obj) => {
    return obj.quantity + sum
  }, 0)
}