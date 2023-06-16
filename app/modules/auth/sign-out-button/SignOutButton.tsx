'use client'
import { FirebaseAuthApi } from '@/app/services/firebase/auth'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const SignOutButton = () => {
  const user = useContext(AuthContext)

  return !!user && <button onClick={FirebaseAuthApi.signOut}>SignOut</button>
}

export default SignOutButton
