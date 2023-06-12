import names from 'classnames'
import Header from '@/app/modules/layout/header/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div
        className={names(
          'container',
          'flex',
          'center',
          'align-center',
          'column',
          'grow'
        )}
      >
        {children}
      </div>
    </>
  )
}
