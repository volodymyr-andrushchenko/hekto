'use client'

import Link from 'next/link'
import cl from './CartLink.module.scss'
import names from 'classnames'
import { routes } from '@/app/modules/core/routes'
import useFetchCart from '@/app/services/react-query/hooks/useFetchCart'
import { UnauthorizedError } from '../../auth/errors'

const CartLink = () => {
  const cart = useFetchCart()

  const href =
    cart.error instanceof UnauthorizedError ? routes.login : routes.cart

  return (
    <Link className={names(cl.topLink, cl.cart)} href={href} aria-label="cart">
      {cart.data?.docs?.length}
    </Link>
  )
}

export default CartLink
