import { auth } from '@/app/services/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
  User,
} from 'firebase/auth'
import { AuthInputs } from '../types/auth.types'

export const AuthApi = {
  register: ({ email, password }: AuthInputs) =>
    createUserWithEmailAndPassword(auth, email, password).then(
      ({ user }) => user
    ),
  login: ({ email, password }: AuthInputs) =>
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => user),
} as const
