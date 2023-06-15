'use client'

import { LocalStorageService } from '@/app/services/localStorage'
import { UnauthorizedError } from '../../auth/errors'
import { FirebaseCartApi } from '@/app/services/firebase/cart'
import { Order } from '@/app/modules/cart/types/order.type'

export const CartApi = {
  fetchCart: () => {
    const userId = LocalStorageService.getUserId()

    if (userId) {
      return FirebaseCartApi.getCart(userId)
    }

    throw new UnauthorizedError('User in not authenticated')
  },
  addToCart(order: Order) {
    const userId = LocalStorageService.getUserId()

    if (userId) {
      return FirebaseCartApi.addToCart(userId, order)
    }

    throw new UnauthorizedError('User in not authenticated')
  },
} as const
