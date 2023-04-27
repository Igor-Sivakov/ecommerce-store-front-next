import { FC } from 'react'
import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'

import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './SubscribeForm.module.scss'

const schema = yup
  .object({
    subscribe_email: yup.string().min(6).max(30).email().required(),
  })
  .required()
type FormData = yup.InferType<typeof schema>

export const SubscribeForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  return (
    <section className={styles.root}>
      <div className={styles.form_container}>
        <h3>Join us and receive a voucher code</h3>
        <p>
          10% off on your first purchase (SALE items excluded)
          <span>for all new Lorian newsletter subscribers</span>
        </p>

        <form className={styles.email_form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.input_container}>
            <label htmlFor='subscribe_email'>E-mail:</label>
            <input
              type='email'
              placeholder='Enter your e-mail address'
              {...register('subscribe_email')}
            />

            {errors.subscribe_email && (
              <div className={styles.error}>
                {errors.subscribe_email.message}
              </div>
            )}
          </div>

          <button className={styles.submit} type='submit'>
            subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
