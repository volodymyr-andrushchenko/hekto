import '../styles/globals.css'
import { josefin } from '../styles/fonts'
import Header from '@/app/modules/layout/header/Header'
import Providers from '@/app/services/react-query/Providers'

export const metadata = {
  title: 'Hekto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
