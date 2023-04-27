import { FC } from 'react'

import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { ICard } from '@/app/types/card.interface'
import { IErrorsCard, IRegisterCard } from '../card-form.interface'

import styles from './CardNumber.module.scss'

type PropsType = {
  card: ICard | undefined
  errors: FieldErrors<IErrorsCard>
  register: UseFormRegister<IRegisterCard>
}

export const CardNumber: FC<PropsType> = ({ register, errors, card }) => {
  const numberInput =
    errors.first_input ||
    errors.second_input ||
    errors.third_input ||
    errors.fourth_input

  const numberError =
    errors.first_input?.message ||
    errors.second_input?.message ||
    errors.third_input?.message ||
    errors.fourth_input?.message

  return (
    <div className={styles.root}>
      <div className={styles.number_inputs}>
        <input
          defaultValue={card ? card.cardNumber.slice(0, 4) : ''}
          {...register('first_input')}
        />
        <input
          defaultValue={card ? card.cardNumber.slice(4, 8) : ''}
          {...register('second_input')}
        />
        <input
          defaultValue={card ? card.cardNumber.slice(8, 12) : ''}
          {...register('third_input')}
        />
        <input
          defaultValue={card ? card.cardNumber.slice(12, 16) : ''}
          {...register('fourth_input')}
        />
      </div>
      {numberInput && <div className={styles.error}>{numberError}</div>}
    </div>
  )
}
