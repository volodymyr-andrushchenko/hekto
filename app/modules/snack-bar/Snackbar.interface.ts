import type { AlertProps } from '@mui/material'

export type SnackBarState = {
  severity: AlertProps['severity']
  message: string
}

type Page = 'auth' | 'cart'

type Severity = 'success' | 'error'

export type Action = `${Page}/${Severity}` | 'closed'

export type Props = {
  action: Action
  onClose: () => void
  message?: string
}
