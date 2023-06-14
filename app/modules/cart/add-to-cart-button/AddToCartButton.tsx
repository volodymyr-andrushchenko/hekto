'use client'

import { useState } from 'react'

import SnackBar from '@/app/modules/snack-bar/Snackbar'
import type { Action as SnackBarAction } from '@/app/modules/snack-bar/Snackbar.interface'

import type { Props } from './AddToCartButton.interface'
import useAddToCart from '@/app/services/react-query/hooks/useAddToCart'

const AddToCartButton = ({ quantity, product, className, text }: Props) => {
  const [snackBar, setSnackBar] = useState<SnackBarAction>('closed')

  const addToCartMutation = useAddToCart({
    onSuccess: () => setSnackBar('cart/success'),
    onError: () => setSnackBar('cart/error'),
  })

  return (
    <>
      <button
        className={className}
        onClick={() =>
          addToCartMutation.mutate({ product, quantity: quantity ?? 1 })
        }
        disabled={addToCartMutation.status === 'loading'}
      >
        {text}
      </button>
      <SnackBar action={snackBar} onClose={() => setSnackBar('closed')} />
    </>
  )
}

export default AddToCartButton
