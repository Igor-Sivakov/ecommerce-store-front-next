import { FC } from 'react'

import { FaOpencart } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'

import { formatToCurrency } from '@/app/utils/format-to-currency'

import { useMutation } from 'react-query'
import { useRouter } from 'next/router'
import { useAppSelector } from '@/app/hooks/useTypedDispatch&Selector'
import { useActions } from '@/app/hooks/useActions'
import { useAuth } from '@/app/hooks/useAuth'

import { paymentAPI } from '@/app/api/paymentAPI'

import { getCartSelect } from '@/redux/selectors/selectors'

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react'

import { EmptyCart } from './empty-cart/EmptyCart'
import { CartItem } from './cart-item/CartItem'

import styles from './Cart.module.scss'

type PropsType = {
  isOpen: boolean
  onClickCloseCart: (value: boolean) => void
  linkToSignUp: (value: boolean) => void
}

export const Cart: FC<PropsType> = ({
  onClickCloseCart,
  isOpen,
  linkToSignUp,
}) => {
  const { totalPrice, items } = useAppSelector(getCartSelect)

  const { user } = useAuth()
  const { addError } = useActions()
  const router = useRouter()

  const { mutate } = useMutation(
    ['create payment'],
    () => paymentAPI.createPayment(totalPrice),
    {
      onSuccess(data) {
        router.push(data.confirmation.confirmation_url)
      },
      onError(error) {
        addError('sorry, but payment service is not available now :(')
        console.warn(error)
      },
    }
  )

  const confirmationHandler = () => {
    if (user) {
      mutate()
    } else {
      linkToSignUp(true)
    }
  }

  return (
    <div className={styles.root}>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={() => onClickCloseCart(false)}
      >
        <DrawerOverlay />
        {/* @ts-ignore */}
        <DrawerContent>
          <DrawerHeader className={styles.heading}>
            <span>
              CART
              <FaOpencart />
            </span>

            <button
              onClick={() => onClickCloseCart(false)}
              className={styles.close_btn}
            >
              <AiFillCloseCircle />
            </button>
          </DrawerHeader>

          <DrawerBody className={styles.body}>
            {items.length ? (
              items.map((item) => (
                <CartItem key={item.id} cartItems={items} item={item} />
              ))
            ) : (
              <EmptyCart />
            )}
          </DrawerBody>

          <DrawerFooter
            justifyContent='space-between'
            className={styles.footer}
          >
            <div className={styles.total}>
              <span>Total:</span>
              <span>{formatToCurrency(totalPrice)}</span>
            </div>

            <Button onClick={confirmationHandler}>
              {user ? 'payment' : 'checkout'}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
