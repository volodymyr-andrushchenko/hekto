import './style/globals.css'
import { josefin } from './style/fonts'

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
      <body className={josefin.className}>{children}</body>
    </html>
  )
}
