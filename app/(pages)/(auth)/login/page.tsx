'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import names from 'classnames'

import SnackBar from '@/app/modules/snack-bar/Snackbar'
import { loginResolver as resolver } from '@/app/modules/auth/form-validators/login'
import type { LoginInputs } from '@/app/modules/auth/types/auth.types'

import cl from '../Auth.module.scss'
import { useSnackbarState } from '@/app/modules/snack-bar/hooks/useSnackbarState'
import { FirebaseAuthApi } from '@/app/services/firebase/auth'
import { useRouter } from 'next/navigation'
import { routes } from '@/app/modules/core/routes'
import { useMutation } from '@tanstack/react-query'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({ resolver })

  const [snackBar, setSnackBar] = useSnackbarState()

  const router = useRouter()

  const loginMutation = useMutation({
    mutationFn: FirebaseAuthApi.login,
    onMutate: () => setSnackBar({ severity: 'info', message: 'Logging in...' }),
    onSuccess: () => {
      setSnackBar({ severity: 'success', message: 'Success' })
      router.push(routes.home)
    },
    onError: (error) => {
      if (error instanceof Error)
        setSnackBar({ severity: 'error', message: error.message })
    },
  })

  const submitHandler: SubmitHandler<LoginInputs> = (data) =>
    loginMutation.mutate(data)

  return (
    <>
      <form
        className={names('flex', 'column', 'space-between')}
        onSubmit={handleSubmit(submitHandler)}
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
        <input type="submit" value="login" />
        {loginMutation.isLoading && 'Loading'}
      </form>
      <SnackBar
        severity={snackBar.severity}
        onClose={() => setSnackBar({ severity: undefined })}
        message={snackBar.message}
      />
    </>
  )
}

export default Login
