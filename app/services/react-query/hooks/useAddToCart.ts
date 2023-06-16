import { CartApi } from '@/app/modules/cart/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CART_QUERY_KEY } from '@/app/services/react-query/constants'

const useAddToCart = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: CartApi.addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries([CART_QUERY_KEY])
    },
  })
}

export default useAddToCart
