import { FC, useEffect } from 'react'
import Link from 'next/link'

import { AiFillStepBackward } from 'react-icons/ai'
import { BsFillEmojiSunglassesFill } from 'react-icons/bs'

import { useActions } from '@/app/hooks/useActions'

import { Layout } from '../../layout/Layout'

import styles from './Thanks.module.scss'

export const Thanks: FC = () => {
  const { clearCart } = useActions()

  useEffect(() => {
    clearCart()
  }, [])

  return (
    <Layout title='Thanks' description='Some description for SEO optimization.'>
      <div className={styles.root}>
        <div className={styles.container}>
          <BsFillEmojiSunglassesFill />

          <h4>Thank you!</h4>

          <p>
            Your payment was received successfully, enjoy the shopping and have
            a nice day.
          </p>

          <Link className={styles.back_link} href='/'>
            <AiFillStepBackward />
            <span>|</span>
            <p>back to the store</p>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
