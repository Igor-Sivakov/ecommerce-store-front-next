import { FC } from 'react'

import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { ICard } from '@/app/types/card.interface'
import { IErrorsCard, IRegisterCard } from '../card-form.interface'

import styles from './GoodThru.module.scss'

type PropsType = {
  card: ICard | undefined
  errors: FieldErrors<IErrorsCard>
  register: UseFormRegister<IRegisterCard>
}

export const GoodThru: FC<PropsType> = ({ register, errors, card }) => {
  return (
    <div className={styles.root}>
      <div className={styles.date_inner}>
        <div className={styles.date_inputs}>
          <label htmlFor='month'>mm:</label>
          <input
            defaultValue={card ? card.month : ''}
            {...register('month', { maxLength: 2 })}
          />
        </div>

        <span>/</span>

        <div className={styles.date_inputs}>
          <label htmlFor='year'>yy:</label>
          <input defaultValue={card ? card.year : ''} {...register('year')} />
        </div>
      </div>

      {(errors.month || errors.year) && (
        <div className={styles.error}>
          {errors.month?.message || errors.year?.message}
        </div>
      )}
    </div>
  )
}
