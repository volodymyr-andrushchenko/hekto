import { useQuery } from '@tanstack/react-query'
import { CartApi } from '@/app/modules/cart/api'
import { CART_QUERY_KEY } from '@/app/services/react-query/constants'
import { UnauthorizedError } from '@/app/modules/auth/errors'

const useFetchCart = () =>
  useQuery([CART_QUERY_KEY], CartApi.fetchCart, {
    retry: 0,
    onError: (err) => {
      if (err instanceof UnauthorizedError) {
        console.log('Unauthorized')
      }
    },
  })

export default useFetchCart
