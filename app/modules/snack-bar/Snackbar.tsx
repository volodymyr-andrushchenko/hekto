'use client'

import { Snackbar as SnackbarMui, Alert } from '@mui/material'
import { FC } from 'react'
import type { Props } from './Snackbar.interface'

const SnackBar: FC<Props> = ({ severity, onClose, message }) =>
  severity && (
    <SnackbarMui open={true} autoHideDuration={6000} onClose={onClose}>
      <Alert severity={severity}>{message || message}</Alert>
    </SnackbarMui>
  )

export default SnackBar
