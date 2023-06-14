'use client'

import { AuthApi } from '@/app/modules/auth/api'
import Auth from '@/app/modules/auth/Auth'

const Login = () => (
  <>
    <p>Login</p>
    <Auth onSubmit={AuthApi.login} />
  </>
)

export default Login
