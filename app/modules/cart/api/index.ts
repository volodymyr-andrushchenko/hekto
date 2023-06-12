import {
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  setDoc,
} from 'firebase/firestore'

import { db } from '@/app/services/firebase'
import { Product } from '@/app/modules/product/types/product.type'

export const CartApi = {
  addToCart: async (
    userId: string,
    item: Product,
    quantity: number,
    color: string
  ) => {
    throw new Error('implement this correctly')

    try {
      const docRef = doc(db, 'cart', userId)

      return setDoc(docRef, { items: arrayUnion(item) }, { merge: true })
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  },
} as const
