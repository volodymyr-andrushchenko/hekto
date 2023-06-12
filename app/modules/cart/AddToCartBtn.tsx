'use client'
import { useRouter } from 'next/navigation'

import { CartApi } from '@/app/modules/cart/api'
import { Product } from '@/app/modules/product/types/product.type'
import { LOCAL_STORAGE_USER_ID_KEY } from '../auth/constants'
import { useState } from 'react'

type Props = {
  item: Product
}

type State = 'available' | 'pending' | 'success'

const AddToCartBtn = ({ item }: Props) => {
  const router = useRouter()
  const [btnState, setBtnState] = useState<State>('available')

  const addToCart = async () => {
    const userId = localStorage.getItem(LOCAL_STORAGE_USER_ID_KEY)

    if (userId) {
      setBtnState('pending')
      await CartApi.addToCart(userId, item)
      setBtnState('success')
      return
    }

    router.push('/login')
  }

  return (
    <button onClick={addToCart} disabled={btnState === 'pending'}>
      {btnState}
    </button>
  )
}

export default AddToCartBtn
