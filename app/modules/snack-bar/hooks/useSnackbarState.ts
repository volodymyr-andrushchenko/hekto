import { useState } from 'react'
import { SnackBarState } from '../Snackbar.interface'

export const useSnackbarState = () =>
  useState<SnackBarState>({ severity: undefined })
