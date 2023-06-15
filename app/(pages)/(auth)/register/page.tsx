'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import names from 'classnames'

import SnackBar from '@/app/modules/snack-bar/Snackbar'
import { loginResolver as resolver } from '@/app/modules/auth/form-validators/login'
import { useAuth } from '@/app/modules/auth/hooks/useAuth'
import type { LoginInputs } from '@/app/modules/auth/types/auth.types'
import cl from '../Auth.module.scss'
import { useSnackbarState } from '@/app/modules/snack-bar/hooks/useSnackbarState'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({ resolver })

  const [snackBar, setSnackBar] = useSnackbarState()

  const onSubmitHandler: SubmitHandler<LoginInputs> = useAuth(
    'register',
    (message) => {
      setSnackBar({ action: 'auth/error', message })
    }
  )

  return (
    <>
      <form
        className={names('flex', 'column', 'space-between')}
        onSubmit={handleSubmit(onSubmitHandler)}
        noValidate
      >
        <input
          type="email"
          {...register('email', { required: true })}
          placeholder="email"
          className={names({ [cl.inputError]: errors.email })}
        />
        <p>{errors.email?.message}</p>
        <input
          type="password"
          {...register('password', { required: true })}
          placeholder="password"
          className={names({ [cl.inputError]: errors.password })}
        />
        <p>{errors.password?.message}</p>
        <input type="submit" value="register" />
      </form>
      <SnackBar
        action={snackBar.action}
        onClose={() => setSnackBar({ action: 'closed' })}
        message={snackBar.message}
      />
    </>
  )
}

export default Login
