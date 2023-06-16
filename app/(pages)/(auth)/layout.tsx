import names from 'classnames'
import Header from '@/app/modules/layout/header/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className={'container'}>{children}</main>
}
