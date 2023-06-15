import { useQuery } from '@tanstack/react-query'
import { CartApi } from '@/app/modules/cart/api'
import { CART_QUERY_KEY } from '@/app/services/react-query/constants'

const useFetchCart = () =>
  useQuery([CART_QUERY_KEY], CartApi.fetchCart, {
    retry: 0,
  })

export default useFetchCart
