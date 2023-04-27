import { FC } from 'react'
import * as yup from 'yup'
import cn from 'classnames'

import { AiOutlineCheck } from 'react-icons/ai'
import { FcCancel } from 'react-icons/fc'

import { yupResolver } from '@hookform/resolvers/yup'

import { useForm, SubmitHandler } from 'react-hook-form'

import { ICard, ICardUpdate } from '@/app/types/card.interface'

import { CardNumber } from './number/CardNumber'
import { GoodThru } from './date/GoodThru'

import styles from './CardForm.module.scss'

const reg = new RegExp('^[0-9]+$')

const validation = (name: string, length: number) =>
  yup
    .string()
    .length(length)
    .matches(reg, `${name} must be integer number`)
    .required()

const schema = yup
  .object({
    first_input: validation('first_input', 4),
    second_input: validation('second_input', 4),
    third_input: validation('third_input', 4),
    fourth_input: validation('fourth_input', 4),
    month: yup.number().min(1).max(12).required(),
    year: yup.number().min(23).max(30).required(),
    cvv: validation('cvv', 3),
  })
  .required()

type FormData = yup.InferType<typeof schema>

type PropsType = {
  card: ICard | undefined
  updateCardData: (data: ICardUpdate) => void
  closeForm: (value: boolean) => void
}

export const CardForm: FC<PropsType> = ({
  closeForm,
  card,
  updateCardData,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const cardNumber =
      data.first_input +
      data.second_input +
      data.third_input +
      data.fourth_input

    const cardData = {
      cardNumber,
      month: data.month.toString(),
      year: data.year.toString(),
      cvv: data.cvv,
    }
    updateCardData(cardData)
    closeForm(false)
  }

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <CardNumber errors={errors} card={card} register={register} />

      <GoodThru errors={errors} card={card} register={register} />

      <div className={styles.cvv}>
        <label htmlFor='cvv'>cvv:</label>
        <input defaultValue={card ? card.cvv : ''} {...register('cvv')} />
        {errors.cvv && (
          <div className={cn(styles.error, styles.cvv_error)}>
            {errors.cvv.message}
          </div>
        )}
      </div>

      <div className={styles.buttons}>
        <button className={styles.submit} type='submit'>
          <AiOutlineCheck />
        </button>
        <button className={styles.cancel} onClick={() => closeForm(false)}>
          <FcCancel />
        </button>
      </div>
    </form>
  )
}
