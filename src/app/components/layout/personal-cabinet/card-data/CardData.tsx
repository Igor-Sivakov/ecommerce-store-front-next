import { FC } from 'react'

import { CiEdit } from 'react-icons/ci'
import { TbFaceIdError } from 'react-icons/tb'

import { ICard } from '@/app/types/card.interface'

import { Spinner } from '@/app/components/common/spinner/Spinner'
import { Error } from '@/app/components/common/error/Error'

import styles from './CardData.module.scss'

type PropsType = {
  card: ICard | undefined
  editData: (value: boolean) => void
  isLoading: boolean
  isError: boolean
}

export const CardData: FC<PropsType> = ({
  editData,
  card,
  isError,
  isLoading,
}) => {
  return (
    <div className={styles.root}>
      {!isError && !isLoading && (
        <button className={styles.edit_btn} onClick={() => editData(true)}>
          edit
          <CiEdit />
        </button>
      )}
      {isLoading ? (
        <div className='mt-16'>
          <Spinner />
        </div>
      ) : isError ? (
        <div className='-mt-32'>
          <Error />
        </div>
      ) : card ? (
        <>
          <div className={styles.number}>
            <span>{card.cardNumber.slice(0, 4)}</span>
            <span>{card.cardNumber.slice(4, 8)}</span>
            <span>{card.cardNumber.slice(8, 12)}</span>
            <span>{card.cardNumber.slice(12, 16)}</span>
          </div>
          <div className={styles.date}>
            <div className={styles.title}>good thru:</div>
            <div className={styles.value}>
              {card.month}/{card.year}
            </div>
          </div>
          <div className={styles.cvv}>
            <div className={styles.title}>cvv:</div>
            <div className={styles.value}>{card.cvv}</div>
          </div>
        </>
      ) : (
        <div className={styles.no_card}>
          <h6>
            You don`t have card <TbFaceIdError />
          </h6>
          <p>
            *To register a card, fill out the form by clicking on the edit link
            in the upper right corner of the screen.
          </p>
        </div>
      )}
    </div>
  )
}
