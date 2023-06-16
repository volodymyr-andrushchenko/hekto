import type { AlertProps } from '@mui/material'

export type SnackBarState = {
  severity: AlertProps['severity']
  message?: string
}

export type Props = {
  severity: AlertProps['severity']
  onClose: () => void
  message?: string
}
