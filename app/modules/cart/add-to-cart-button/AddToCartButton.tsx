'use client'

import SnackBar from '@/app/modules/snack-bar/Snackbar'

import type { Props } from './AddToCartButton.interface'
import useAddToCart from '@/app/services/react-query/hooks/useAddToCart'
import { useSnackbarState } from '../../snack-bar/hooks/useSnackbarState'

const AddToCartButton = ({ quantity, product, className, text }: Props) => {
  const [snackBar, setSnackBar] = useSnackbarState()

  const addToCartMutation = useAddToCart()

  const handleAddToCart = () =>
    addToCartMutation.mutate(
      { product, quantity: quantity ?? 1 },
      {
        onSuccess: () => setSnackBar({ action: 'cart/success' }),
        onError: (error) =>
          setSnackBar({
            action: 'auth/error',
            message: error instanceof Error ? error.message : '',
          }),
      }
    )

  return (
    <>
      <button
        className={className}
        onClick={handleAddToCart}
        disabled={addToCartMutation.status === 'loading'}
      >
        {text}
      </button>
      <SnackBar
        action={snackBar.action}
        onClose={() => setSnackBar({ action: 'closed' })}
      />
    </>
  )
}

export default AddToCartButton
