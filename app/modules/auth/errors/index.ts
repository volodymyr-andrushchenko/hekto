export class UnauthorizedError extends Error {
  readonly status = 401
  readonly message = 'Unauthorized'
}
