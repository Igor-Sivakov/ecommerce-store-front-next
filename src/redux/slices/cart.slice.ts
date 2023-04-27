import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { calcTotalCount } from '../../app/utils/calcTotalCount'
import { calcTotalPrice } from '@/app/utils/calcTotalPrice'

import { ICartItem } from '@/app/types/cart.interface'


interface IAddToCartPayload extends Omit<ICartItem, 'id'> { }

interface IInitialStateCart {
  items: ICartItem[]
  totalPrice: number
  totalItemsCount: number
}

const initialState: IInitialStateCart = {
  items: [],
  totalPrice: 0,
  totalItemsCount: 0,
}


const calcTotalCountAndPrice = (state: IInitialStateCart) => {
  state.totalPrice = calcTotalPrice(state.items)
  state.totalItemsCount = calcTotalCount(state.items)
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IAddToCartPayload>) {
      const isSameItem = state.items.find((obj) => obj.product.id === action.payload.product.id)

      if (isSameItem && isSameItem.size === action.payload.size) {
        isSameItem.quantity++
      } else {
        const id = state.items.length
        state.items.push({ ...action.payload, id })
      }

      calcTotalCountAndPrice(state)
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      )

      calcTotalCountAndPrice(state)
    },
    incrementQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find(
        (item) => item.id === action.payload
      )

      if (item && item.quantity <= 9) item.quantity++
      calcTotalCountAndPrice(state)

    },
    decrementQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find(
        (item) => item.id === action.payload
      )

      if (item && item.quantity >= 2) item.quantity--
      calcTotalCountAndPrice(state)
    },
    clearCart(state) {
      state.items = []
      state.totalPrice = 0
      state.totalItemsCount = 0
    }
  }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer