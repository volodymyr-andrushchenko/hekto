'use client'

import { Snackbar as SnackbarMui, Alert } from '@mui/material'
import { FC } from 'react'
import type { Action, Props, SnackBarState } from './Snackbar.interface'

function SnackBarReducer(action: Action): SnackBarState | undefined {
  if (action === 'auth/success')
    return { severity: 'success', message: 'Auth successful' }

  if (action === 'auth/error')
    return { severity: 'error', message: 'Auth fail' }

  if (action === 'cart/success')
    return { severity: 'success', message: 'Added item successfully' }

  if (action === 'cart/error')
    return { severity: 'error', message: 'Failed to add to the cart' }

  return undefined
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
