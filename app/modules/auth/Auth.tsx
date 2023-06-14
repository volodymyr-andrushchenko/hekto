'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import names from 'classnames'
import cl from './Auth.module.scss'
import { AuthInputs } from './types/auth.types'

import { useRouter } from 'next/navigation'
import { localStorageService } from '@/app/services/localStorage'
import SnackBar from '../snack-bar/Snackbar'
import type { Action as SnackBarAction } from '@/app/modules/snack-bar/Snackbar.interface'
import { FC, useState } from 'react'
import { FirebaseError } from 'firebase/app'
import { Props } from './Auth.interface'
import { routes } from '../core/routes'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const validarionSchema = yup.object().shape({
  email: yup.string().email('Email is not valid').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Min length is 8 symbols')
    .required('Password is required'),
})

const Auth: FC<Props> = ({ onSubmit }) => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>({
    resolver: yupResolver(validarionSchema),
  })

  const [snackBar, setSnackBar] = useState<{
    action: SnackBarAction
    messsage?: string
  }>({ action: 'closed' })

  const onSubmitHandler: SubmitHandler<AuthInputs> = async (data) => {
    try {
      const user = await onSubmit(data)

      if (user) {
        localStorageService.setUserId(user.uid)
        router.push(routes.home)
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        setSnackBar({ action: 'auth/error', messsage: err.message })
        return
      }

      console.error(err)
    }
  }

  return (
    <>
      <form
        className={names(cl.form, 'flex', 'column', 'space-between')}
        onSubmit={handleSubmit(onSubmitHandler)}
        noValidate
      >
        <input
          type="email"
          {...register('email', { required: true })}
          placeholder="email"
        />
        <p>{errors.email?.message}</p>
        <input
          type="password"
          {...register('password', { required: true })}
          placeholder="password"
        />
        <p>{errors.password?.message}</p>
        <input type="submit" />
      </form>
      <SnackBar
        action={snackBar.action}
        onClose={() => setSnackBar({ action: 'closed' })}
        message={snackBar.messsage}
      />
    </>
  )
}

export default Auth
