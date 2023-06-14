import { User } from 'firebase/auth'
import { AuthInputs } from './types/auth.types'

export type Props = {
  onSubmit: ({ email, password }: AuthInputs) => Promise<undefined | User>
}
