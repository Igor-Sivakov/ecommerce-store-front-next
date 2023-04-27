import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import arrivalImg from '../../../../assets/img/arrival.jpg'
import { FaCartPlus } from 'react-icons/fa'

import { useActions } from '@/app/hooks/useActions'

import { Column } from '@/app/components/common/grid/Column'
import { SquareButton } from '@/app/components/common/square-button/SquareButton'

import styles from './NewArrival.module.scss'

type PropsType = {
  columnSize: number
}

export const NewArrival: FC<PropsType> = ({ columnSize }) => {
  const { addCategory } = useActions()

  return (
    <Column size={columnSize}>
      <section className={styles.root}>
        <div className={styles.text_container}>
          <span>NEW ARRIVAL</span>
          <h1>NEW LORIAN EVENING DRESS DESIGN</h1>
          <p>
            We are discovering a new fashion style, buy from the Lorian Store
            and become one of us
          </p>
        </div>

        <div className={styles.image_button_container}>
          <div className={styles.image}>
            <Image src={arrivalImg} alt='new arrival photo' />
          </div>

          <Link
            href='/category'
            onClick={() => addCategory('dresses')}
            className={styles.button}
          >
            <SquareButton Icon={FaCartPlus} />
          </Link>
        </div>
      </section>
    </Column>
  )
}
