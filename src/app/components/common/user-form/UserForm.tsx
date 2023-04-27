import { FC } from 'react'
import * as yup from 'yup'
import cn from 'classnames'
import omit from 'lodash.omit'
import { yupResolver } from '@hookform/resolvers/yup'

import { useForm, SubmitHandler } from 'react-hook-form'
import { useAppDispatch } from '@/app/hooks/useTypedDispatch&Selector'
import { useQuery } from 'react-query'

import { profileAPI } from '@/app/api/profileAPI'

import {
  newRegistration,
  updateProfile,
} from '@/redux/slices/auth/auth.actions'

import { UserInfo } from './user-info/UserInfo'
import { LoginInfo } from './login-info/LoginInfo'

import styles from './UserForm.module.scss'

const schema = yup
  .object({
    firstName: yup.string().min(3).max(20).required(),
    lastName: yup.string().min(3).max(20).required(),
    gender: yup.string().required('A gender option is required'),
    email: yup.string().min(6).max(30).email().required(),
    password: yup.string().min(6).max(20).required(),
    repeat_password: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required(),
  })
  .required()
type FormData = yup.InferType<typeof schema>

type PropsType = {
  isSignUp: boolean
  closeForm: (value: boolean) => void
}

export const UserForm: FC<PropsType> = ({ isSignUp, closeForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const dispatch = useAppDispatch()

  const { remove } = useQuery({
    queryKey: 'card',
    queryFn: async () => (await profileAPI.getCard())[0],
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const profileData = omit(data, 'repeat_password')

    if (isSignUp) {
      remove()
      dispatch(newRegistration(profileData))
    } else {
      dispatch(updateProfile(profileData))
    }

    closeForm(false)
  }

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputs_wrapper}>
        <UserInfo errors={errors} register={register} isSignUp={isSignUp} />

        <LoginInfo errors={errors} register={register} isSignUp={isSignUp} />
      </div>

      <div className={cn({ [styles.buttons]: isSignUp })}>
        <button type='submit' className={styles.submit}>
          submit
        </button>

        <button
          className={styles.cancel}
          onClick={(e) => {
            e.preventDefault()
            closeForm(false)
          }}
        >
          cancel
        </button>
      </div>
    </form>
  )
}
