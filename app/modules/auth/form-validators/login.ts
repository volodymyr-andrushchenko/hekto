import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const loginValidationSchema = yup.object().shape({
  email: yup.string().email('Email is not valid').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Min length is 8 symbols')
    .required('Password is required'),
})

export const loginResolver = yupResolver(loginValidationSchema)
