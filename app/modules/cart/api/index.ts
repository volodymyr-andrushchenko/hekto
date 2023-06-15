'use client'

import { FirebaseCartApi } from '@/app/services/firebase/cart'
import { Order } from '@/app/modules/cart/types/order.type'
import { auth } from '@/app/services/firebase'

export const CartApi = {
  fetchCart: () => {
    const user = auth.currentUser

    if (!user) {
      throw new Error('Assert guard in Cart Api, this should not been thrown')
    }

    return FirebaseCartApi.getCart(user.uid)
  },
  addToCart(order: Order) {
    const user = auth.currentUser

    if (!user) {
      throw new Error('Assert guard in Cart Api, this should not been thrown')
    }

    return FirebaseCartApi.addToCart(user.uid, order)
  },
} as const
