'use client'

import Link from 'next/link'
import cl from './CartLink.module.scss'
import names from 'classnames'
import { routes } from '@/app/modules/core/routes'
import useFetchCart from '@/app/services/react-query/hooks/useFetchCart'

const CartLink = () => {
  const cart = useFetchCart()

  return (
    cart.data && (
      <Link
        className={names(cl.topLink, cl.cart)}
        href={routes.cart}
        aria-label="cart"
      >
        {cart.data.docs.length}
      </Link>
    )
  )
}

export default CartLink
