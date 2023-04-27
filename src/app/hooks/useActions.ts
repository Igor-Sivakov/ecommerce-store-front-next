import { bindActionCreators } from 'redux'

import { useAppDispatch } from './useTypedDispatch&Selector'
import { useMemo } from 'react'

import { cartActions } from '../../redux/slices/cart.slice'
import { authActions } from '@/redux/slices/auth/auth.slice'
import { productsByValueActions } from '@/redux/slices/products-by-value.slice'



const rootActions = {
  ...cartActions,
  ...productsByValueActions,
  ...authActions
}

export const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
