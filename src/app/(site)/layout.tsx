import Navbar from '../components/navbar/Navbar'
import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Edasaki Blog',
  description: 'Generated by Next + Sanity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="main">
          {children}
        </div>
      </body>
    </html>
  )
}