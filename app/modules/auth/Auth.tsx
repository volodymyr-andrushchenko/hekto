'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import names from 'classnames'
import cl from './Auth.module.scss'
import { AuthInputs } from './types/auth.types'
import { User } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { LOCAL_STORAGE_USER_ID_KEY } from './constants'

type Props = {
  onSubmit: ({ email, password }: AuthInputs) => Promise<undefined | User>
}

const Auth = ({ onSubmit }: Props) => {
  const router = useRouter()

  const { register, handleSubmit } = useForm<AuthInputs>()

  const onSubmitHandler: SubmitHandler<AuthInputs> = async (data) => {
    const user = await onSubmit(data)

    if (user) {
      localStorage.setItem(LOCAL_STORAGE_USER_ID_KEY, user.uid)
      router.push('/')
    } else {
      console.error('wrong credentials')
    }
  }

  return (
    <form
      className={names(cl.form, 'flex', 'column', 'space-between')}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <input
        type="text"
        {...register('email', { required: true })}
        placeholder="email"
      />
      <input
        type="text"
        {...register('password', { required: true })}
        placeholder="password"
      />
      <input type="submit" />
    </form>
  )
}

export default Auth
