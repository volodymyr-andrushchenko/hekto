import {
  collection,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  getDocs,
} from 'firebase/firestore'

import { db } from '@/app/services/firebase'
import { Order } from '@/app/modules/cart/types/order.type'

/* on firebase shape of object
  users {
    [userId] : {
      cart: {
        [product.id]: {
          product,
          quantity: product.quantity,
          colors: {
            [color]: quantity
          }
        }
      }
    }
  }
  
  so a user has a cart that has products with data about how many products of certain product
  */

export const FirebaseCartApi = {
  addToCart: async (userId: string, order: Order) => {
    const usersCartPath = `users/${userId}/cart`
    // order of specific product in cart
    const orderRef = doc(db, usersCartPath, order.product.id)

    const orderSnap = await getDoc(orderRef)

    // update in doc exists
    if (orderSnap.exists()) {
      const orderOnServer = orderSnap.data()

      await updateDoc(orderRef, {
        quantity: orderOnServer.quantity + order.quantity,
      })

      if (order.color) {
        const colorOnServer = orderOnServer.colors[order.color]

        await updateDoc(orderRef, {
          [`colors.${order.color}`]: (colorOnServer ?? 0) + order.quantity,
        })
      }

      return
    }

    // add new
    setDoc(doc(db, usersCartPath, order.product.id), {
      product: order.product,
      quantity: order.quantity,
      colors: order.color
        ? {
            [order.color]: order.quantity,
          }
        : {},
    })
  },
  getCart: (userId: string) => {
    const usersCartPath = `users/${userId}/cart`

    return getDocs(collection(db, usersCartPath))
  },
} as const
