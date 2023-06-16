'use client'

import { FirebaseAuthApi } from '@/app/services/firebase/auth'
import { User } from 'firebase/auth'
import { FC, ReactNode, createContext, useEffect, useState } from 'react'

type AuthContextType = User | null

export const AuthContext = createContext<AuthContextType>(null)

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthContextType>(null)

  useEffect(() => {
    FirebaseAuthApi.onAuthChanged((user) => {
      setAuth(user)
    })
  }, [])

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
