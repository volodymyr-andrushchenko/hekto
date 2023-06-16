import { useQuery } from '@tanstack/react-query'
import { CartApi } from '@/app/modules/cart/api'

export const CART_QUERY_KEY = 'cart'

const useFetchCart = (enabled: boolean) =>
  useQuery([CART_QUERY_KEY], CartApi.fetchCart, {
    retry: 0,
    enabled,
  })

export default useFetchCart
