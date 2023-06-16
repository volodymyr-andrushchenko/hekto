'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import names from 'classnames'

import SnackBar from '@/app/modules/snack-bar/Snackbar'
import { loginResolver as resolver } from '@/app/modules/auth/form-validators/login'
import type { LoginInputs } from '@/app/modules/auth/types/auth.types'
import cl from '../Auth.module.scss'
import { useSnackbarState } from '@/app/modules/snack-bar/hooks/useSnackbarState'
import { FirebaseAuthApi } from '@/app/services/firebase/auth'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({ resolver })

  const [snackBar, setSnackBar] = useSnackbarState()

  const onSubmitHandler: SubmitHandler<LoginInputs> = (data) => {
    FirebaseAuthApi.register(data)
  }

  return <p>not implemented</p>
}

export default Login
