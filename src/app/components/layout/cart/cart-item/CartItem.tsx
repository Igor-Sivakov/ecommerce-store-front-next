import { FC } from 'react'
import Image from 'next/image'

import { ImBin } from 'react-icons/im'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

import plugImg from '@/app/assets/img/plug.jpeg'

import { formatToCurrency } from '@/app/utils/format-to-currency'

import { useActions } from '@/app/hooks/useActions'

import { ICartItem } from '@/app/types/cart.interface'

import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'

import styles from './CartItem.module.scss'
type PropsType = {
  item: ICartItem
  cartItems: ICartItem[]
}

export const CartItem: FC<PropsType> = ({ item, cartItems }) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 10,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  const { removeFromCart, incrementQuantity, decrementQuantity } = useActions()

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <Image
          src={item.product.images[0] ? item.product.images[0] : plugImg}
          width={70}
          height={95}
          alt={item.product.name}
        />
      </div>

      <div className={styles.info_inner}>
        <div className={styles.info}>
          <div className={styles.name}>{item.product.name}</div>
          <div className={styles.price}>
            {formatToCurrency(item.product.price)} / {item.size}
          </div>
        </div>

        <HStack width={'145px'} className={styles.actions}>
          <Button {...dec} onClick={() => decrementQuantity(item.id)}>
            <AiFillMinusCircle />
          </Button>

          <Input
            {...input}
            readOnly
            _hover={{ cursor: 'default' }}
            value={
              cartItems.find((cartItem) => cartItem.id === item.id)?.quantity
            }
          />

          <Button {...inc} onClick={() => incrementQuantity(item.id)}>
            <AiFillPlusCircle />
          </Button>
        </HStack>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className={styles.delete_btn}
      >
        <ImBin />
      </button>
    </div>
  )
}
