'use client'

import { Snackbar as SnackbarMui, Alert } from '@mui/material'
import { FC } from 'react'
import type { Action, Props, SnackBarState } from './Snackbar.interface'
import { assertUnreachable } from '@/app/helpers'

function SnackBarReducer(action: Action): SnackBarState | undefined {
  switch (action) {
    case 'auth/success':
      return { severity: 'success', message: 'Auth successful' }
    case 'auth/error':
      return { severity: 'error', message: 'Auth fail' }
    case 'cart/success':
      return { severity: 'success', message: 'Added item successfully' }
    case 'cart/error':
      return { severity: 'error', message: 'Failed to add to the cart' }
    case 'closed':
      return undefined
    default:
      return assertUnreachable(action)
  }
}

const SnackBar: FC<Props> = ({ action, onClose, message }) => {
  const state = SnackBarReducer(action)

  return (
    state && (
      <SnackbarMui open={true} autoHideDuration={6000} onClose={onClose}>
        <Alert severity={state.severity}>{message || state.message}</Alert>
      </SnackbarMui>
    )
  )
}

export default SnackBar
