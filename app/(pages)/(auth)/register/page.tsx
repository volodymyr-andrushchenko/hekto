'use client'

import { AuthApi } from '@/app/modules/auth/api'
import Auth from '@/app/modules/auth/Auth'

const Register = () => (
  <>
    <p>Register</p>
    <Auth onSubmit={AuthApi.register} />
  </>
)

export default Register
