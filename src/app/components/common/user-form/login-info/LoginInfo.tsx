import { FC } from 'react'

import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { useAuth } from '@/app/hooks/useAuth'

import { IErrorsUser, IRegisterUser } from '../user-form.interface'

import styles from '../UserForm.module.scss'

type PropsType = {
  errors: FieldErrors<IErrorsUser>
  register: UseFormRegister<IRegisterUser>
  isSignUp: boolean
}

export const LoginInfo: FC<PropsType> = ({ register, errors, isSignUp }) => {
  const { user } = useAuth()

  return (
    <div className={styles.login_info}>
      <h4 className={styles.heading}>Login info</h4>

      <div className={styles.input_container}>
        <label className={styles.label} htmlFor='email'>
          E-MAIL:
        </label>

        <input
          type='email'
          className={styles.input}
          placeholder='Your email address'
          defaultValue={isSignUp ? '' : user?.email || ''}
          {...register('email')}
        />

        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
      </div>

      <div className={styles.input_container}>
        <label className={styles.label} htmlFor='password'>
          PASSWORD:
        </label>

        <input
          className={styles.input}
          type='password'
          placeholder='Your password'
          defaultValue={''}
          {...register('password')}
        />

        {errors.password && (
          <span className={styles.error}>{errors.password.message}</span>
        )}
      </div>

      <div className={styles.input_container}>
        <label className={styles.label} htmlFor='repeat_password'>
          REPEAT PASSWORD:
        </label>

        <input
          className={styles.input}
          type='password'
          placeholder='Repeat your password'
          defaultValue={''}
          {...register('repeat_password')}
        />

        {errors.repeat_password && (
          <span className={styles.error}>{errors.repeat_password.message}</span>
        )}
      </div>
    </div>
  )
}
