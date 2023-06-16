'use client'

import { auth } from '@/app/services/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth'
import { LoginInputs } from '@/app/modules/auth/types/auth.types'

export const FirebaseAuthApi = {
  register: ({ email, password }: LoginInputs) =>
    createUserWithEmailAndPassword(auth, email, password).then(
      ({ user }) => user
    ),
  login: ({ email, password }: LoginInputs) =>
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => user),
  getUser: () => auth.currentUser,
  signOut: () => signOut(auth),
  onAuthChanged: (callback: (user: User | null) => void) =>
    onAuthStateChanged(auth, callback),
} as const
