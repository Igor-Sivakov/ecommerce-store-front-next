import { FC } from 'react'
import Link from 'next/link'

import { HiArrowRight } from 'react-icons/hi'

import { useActions } from '@/app/hooks/useActions'

import { Column } from '@/app/components/common/grid/Column'
import { SquareButton } from '@/app/components/common/square-button/SquareButton'

import styles from './LatestNews.module.scss'

type PropsType = {
  columnSize: number
}

export const LatestNews: FC<PropsType> = ({ columnSize }) => {
  const { addCategory } = useActions()

  return (
    <Column size={columnSize}>
      <section className={styles.root}>
        <div className={styles.text_container}>
          <span>LATEST NEWS</span>
          <h1>OUR NEW DRESS COLLECTION</h1>
          <p>Conquer city tops in comfort with lorian dress collection</p>
        </div>

        <Link
          href='/category'
          onClick={() => addCategory('dresses')}
          className={styles.button}
        >
          <SquareButton Icon={HiArrowRight} />
        </Link>
      </section>
    </Column>
  )
}
