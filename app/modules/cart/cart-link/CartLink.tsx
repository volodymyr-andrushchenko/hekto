'use client'

import Link from 'next/link'
import cl from './CartLink.module.scss'
import names from 'classnames'
import { routes } from '@/app/modules/core/routes'
import { useContext } from 'react'
import { AuthContext } from '../../auth/context/AuthProvider'
import useFetchCart from '@/app/services/react-query/hooks/useFetchCart'

const CartLink = () => {
  const user = useContext(AuthContext)

  const href = user ? routes.cart : routes.login

  const cart = useFetchCart(!!user)

  return (
    <Link className={names(cl.topLink, cl.cart)} href={href} aria-label="cart">
      {user && cart.data?.docs?.length}
    </Link>
  )
}

export default CartLink
