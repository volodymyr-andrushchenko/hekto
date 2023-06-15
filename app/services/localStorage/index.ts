'use client'

import { LOCAL_STORAGE_USER_ID_KEY } from '@/app/modules/auth/constants'

export const LocalStorageService = {
  getUserId: () => localStorage.getItem(LOCAL_STORAGE_USER_ID_KEY),
  setUserId: (userId: string) =>
    localStorage.setItem(LOCAL_STORAGE_USER_ID_KEY, userId),
} as const
