import { FC } from 'react'
import Link from 'next/link'
import * as yup from 'yup'

import { AiFillCaretRight } from 'react-icons/ai'
import { GiCheckMark } from 'react-icons/gi'

import { yupResolver } from '@hookform/resolvers/yup'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch } from '@/app/hooks/useTypedDispatch&Selector'

import { login } from '@/redux/slices/auth/auth.actions'

import styles from './LoginForm.module.scss'

const schema = yup
  .object({
    login_email: yup.string().min(6).max(30).email().required(),
    login_password: yup.string().min(6).max(20).required(),
    remember_me: yup.boolean(),
  })
  .required()
type FormData = yup.InferType<typeof schema>

type PropsType = {
  onClickCloseLogin: (value: boolean) => void
}

export const LoginForm: FC<PropsType> = ({ onClickCloseLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const loginData = {
      email: data.login_email,
      password: data.login_password,
    }

    dispatch(login(loginData))
    onClickCloseLogin(false)
  }

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.root_container}>
        <h4 className={styles.form_heading}>Login to your account</h4>

        <div className={styles.input_wrapper}>
          <label className={styles.label} htmlFor='email'>
            E-MAIL:
          </label>

          <input
            type='email'
            className={styles.input}
            placeholder='Your email address'
            {...register('login_email')}
          />

          {errors.login_email && (
            <span className={styles.error}>{errors.login_email.message}</span>
          )}
        </div>

        <div className={styles.input_wrapper}>
          <label className={styles.label} htmlFor='password'>
            PASSWORD:
          </label>

          <input
            className={styles.input}
            type='password'
            placeholder='Your password'
            {...register('login_password')}
          />

          {errors.login_password && (
            <span className={styles.error}>
              {errors.login_password.message}
            </span>
          )}
        </div>

        <div className={styles.buttons_wrapper}>
          <div className={styles.checkbox}>
            <input id='checkbox' type='checkbox' {...register('remember_me')} />
            <label htmlFor='checkbox'>
              <GiCheckMark />
            </label>
            Remember me
          </div>

          <button className={styles.submit} type='submit'>
            login
          </button>
        </div>

        <div className={styles.forgot_password}>
          <Link href=''>
            <AiFillCaretRight />| forgot my password
          </Link>
        </div>
      </div>
    </form>
  )
}
