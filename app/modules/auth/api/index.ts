import { auth } from '@/app/services/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
  User,
} from 'firebase/auth'
import { AuthInputs } from '../types/auth.types'

function errorHandler(promise: Promise<User>) {
  return promise.catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message

    console.error(errorCode, errorMessage)

    return undefined
  })
}

export const AuthApi = {
  register: ({ email, password }: AuthInputs) => {
    return errorHandler(
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user
          return user
        }
      )
    )
  },
  login: ({ email, password }: AuthInputs) => {
    return errorHandler(
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user
          return user
        }
      )
    )
  },
} as const
