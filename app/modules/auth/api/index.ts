import { LoginInputs } from '@/app/modules/auth/types/auth.types'
import { FirebaseAuthApi } from '@/app/services/firebase/auth'
import { LocalStorageService } from '@/app/services/localStorage'
import { FirebaseError } from 'firebase/app'
import { User } from 'firebase/auth'

export const AuthApi = {
  /**
   * Register user and save her user.id to localStorage
   *
   * @param credentials
   * @returns {User} user
   * @throws {(FirebaseError | unknown)}
   */
  register: async (credentials: LoginInputs) => {
    // this code is not DRY bc I plan to change it in the future
    const user: User = await FirebaseAuthApi.register(credentials)
    LocalStorageService.setUserId(user.uid)
    return user
  },

  /**
   * Login user and save her user.id to localStorage
   *
   * @param credentials
   * @returns {User} user
   * @throws {(FirebaseError | unknown)}
   */
  login: async (credentials: LoginInputs) => {
    const user: User = await FirebaseAuthApi.login(credentials)
    LocalStorageService.setUserId(user.uid)
    return user
  },
} as const
