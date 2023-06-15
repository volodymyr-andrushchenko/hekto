import Link from 'next/link'
import names from 'classnames'
import cl from './Header.module.scss'

import { josefin } from '@/app/styles/fonts'
import Search from '@/app/modules/search/Search'
import { routes } from '@/app/modules/core/routes'
import CartLink from '@/app/modules/cart/cart-link/CartLink'
import SignOutButton from '../../auth/sign-out-button/SignOutButton'
import { AuthContext, AuthProvider } from '../../auth/context/AuthProvider'

const Header = () => {
  return (
    <header>
      <div className={cl.topWrapper}>
        <div
          className={names(
            'container',
            'flex',
            'space-between',
            'align-center'
          )}
        >
          <div className="links">
            <a
              className={names(cl.contactLink, cl.emailLink)}
              href="mailto:mhhasanul@gmail.com"
            >
              mhhasanul@gmail.com
            </a>
            <a
              className={names(cl.contactLink, cl.telLink)}
              href="tel:+123456890"
            >
              (12345)67890
            </a>
          </div>
          <div className={names('flex', 'grow', 'space-between', cl.controls)}>
            <select
              className={names('select-reset', cl.select, josefin.className)}
            >
              <option value="eng">English</option>
              <option value="ua">Ukrainian</option>
            </select>
            <select
              className={names('select-reset', cl.select, josefin.className)}
            >
              <option value="usd">USD</option>
              <option value="uan">UAN</option>
            </select>
            <Link className={names(cl.topLink, cl.login)} href={routes.login}>
              Login
            </Link>
            <Link className={names(cl.topLink, cl.wishlist)} href={routes.cart}>
              Wishlist
            </Link>
            <AuthProvider>
              <CartLink />
              <SignOutButton />
            </AuthProvider>
          </div>
        </div>
      </div>
      <div
        className={names(
          'container',
          'flex',
          'space-between',
          cl.bottomWrapper
        )}
      >
        <Link href={routes.home} className={cl.logo}>
          Hekto
        </Link>
        <nav className={names('flex', 'align-center')}>
          <ul className="flex">
            <li className={cl.navLink}>
              <Link href={routes.home}>Home</Link>
            </li>
            <li className={cl.navLink}>
              <Link href={routes.pages}>Pages</Link>
            </li>
            <li className={cl.navLink}>
              <Link href={routes.shop}>Products</Link>
            </li>
            <li className={cl.navLink}>
              <Link href={routes.blog}>Blog</Link>
            </li>
            <li className={cl.navLink}>
              <Link href={routes.shop}>Shop</Link>
            </li>
            <li className={cl.navLink}>
              <Link href={routes.contact}>Contact</Link>
            </li>
          </ul>
        </nav>
        <Search />
      </div>
    </header>
  )
}

export default Header
