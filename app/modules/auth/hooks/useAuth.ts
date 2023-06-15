import { useRouter } from 'next/navigation'
import { FirebaseError } from 'firebase/app'
import { routes } from '@/app/modules/core/routes'
import { AuthApi } from '@/app/modules/auth/api'
import { SubmitHandler } from 'react-hook-form'
import { LoginInputs } from '@/app/modules/auth/types/auth.types'

/**
 * hook registeres or logins user and redirects to home page
 */
// Todo replace this with react-query
export const useAuth = (
  variant: 'login' | 'register',
  onError: (message?: string) => void
): SubmitHandler<LoginInputs> => {
  const router = useRouter()

  return async (data) => {
    try {
      if (variant === 'login') await AuthApi.login(data)
      else await AuthApi.register(data)

      router.push(routes.home)
    } catch (err) {
      if (err instanceof FirebaseError) {
        onError(err.message)
        return
      }

      onError()
    }
  }
}
