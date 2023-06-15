'use client'

import SnackBar from '@/app/modules/snack-bar/Snackbar'

import type { Props } from './AddToCartButton.interface'
import useAddToCart from '@/app/services/react-query/hooks/useAddToCart'
import { useSnackbarState } from '../../snack-bar/hooks/useSnackbarState'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { routes } from '../../core/routes'
import { AuthContext } from '../../auth/context/AuthProvider'

const AddToCartButton = ({ quantity, product, className, text }: Props) => {
  const [snackBar, setSnackBar] = useSnackbarState()

  const user = useContext(AuthContext)

  const router = useRouter()

  const addToCartMutation = useAddToCart()

  const handleAddToCart = () => {
    if (!!user) {
      return addToCartMutation.mutate(
        { product, quantity: quantity ?? 1 },
        {
          onSuccess: () => setSnackBar({ severity: 'success' }),
          onError: (error) =>
            setSnackBar({
              severity: 'error',
              message: error instanceof Error ? error.message : '',
            }),
        }
      )
    }

    router.push(routes.login)
  }
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
        severity={snackBar.severity}
        onClose={() => setSnackBar({ severity: undefined })}
      />
    </>
  )
}

export default AddToCartButton
