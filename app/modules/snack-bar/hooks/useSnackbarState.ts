import { useState } from 'react'
import type { Action as SnackBarAction } from '@/app/modules/snack-bar/Snackbar.interface'

export const useSnackbarState = () =>
  useState<{
    action: SnackBarAction
    message?: string
  }>({ action: 'closed' })
