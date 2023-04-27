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

export const UserInfo: FC<PropsType> = ({ register, errors, isSignUp }) => {
  const { user } = useAuth()

  return (
    <div className={styles.user_info}>
      <h4 className={styles.heading}>Information</h4>

      <div className={styles.input_container}>
        <label className={styles.label} htmlFor='firstName'>
          FIRST NAME:
        </label>

        <input
          className={styles.input}
          placeholder='eg.Peter'
          defaultValue={isSignUp ? '' : user?.firstName || ''}
          {...register('firstName')}
        />

        {errors.firstName && (
          <span className={styles.error}>{errors.firstName.message}</span>
        )}
      </div>

      <div className={styles.input_container}>
        <label className={styles.label} htmlFor='lastName'>
          LAST NAME:
        </label>

        <input
          className={styles.input}
          placeholder='eg.Smith'
          defaultValue={isSignUp ? '' : user?.lastName || ''}
          {...register('lastName')}
        />

        {errors.lastName && (
          <div className={styles.error}>{errors.lastName.message}</div>
        )}
      </div>

      <div className={styles.input_container}>
        <label className={styles.label} htmlFor='gender'>
          GENDER:
        </label>

        <div className={styles.radio_toggler_box}>
          <div className={styles.radio_btn}>
            <input
              id='male'
              type='radio'
              value={'male'}
              checked={(!isSignUp && user?.gender === 'male') || undefined}
              placeholder={'Male'}
              {...register('gender')}
            />
            <label htmlFor='male'>
              <div></div>
            </label>
            Male
          </div>

          <div className={styles.radio_btn}>
            <input
              id='female'
              type='radio'
              value={'female'}
              checked={(!isSignUp && user?.gender === 'female') || undefined}
              placeholder={'Female'}
              {...register('gender')}
            />
            <label htmlFor='female'>
              <div></div>
            </label>
            Female
          </div>
        </div>

        {errors.gender && (
          <div className={styles.error}>{errors.gender.message}</div>
        )}
      </div>
    </div>
  )
}
