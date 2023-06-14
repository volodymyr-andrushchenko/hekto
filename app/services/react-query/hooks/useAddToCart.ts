import { routes } from '@/app/modules/core/routes'
import { CartApi } from '@/app/modules/cart/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CART_QUERY_KEY } from '@/app/services/react-query/constants'
import { UnauthorizedError } from '@/app/modules/auth/errors'
import { useRouter } from 'next/navigation'

type Args = {
  onSuccess: () => void
  onError: () => void
}

const useAddToCart = ({ onSuccess, onError }: Args) => {
  const router = useRouter()

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: CartApi.addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries([CART_QUERY_KEY])
      onSuccess()
    },
    onError: (error) => {
      if (error instanceof UnauthorizedError) {
        router.push(routes.login)
        return
      }

      console.log(error)
      onError()
    },
  })
}

export default useAddToCart
