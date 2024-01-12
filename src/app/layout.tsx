import Footer from './components/footer'
import type { Metadata } from 'next'
import './globals.css'
import Loading from './components/loading'


export const metadata: Metadata = {
  title: 'No tea in Paradise',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-apocalypse">
        <div className='min-h-screen flex flex-col'>
          <div className='flex-1 relative'>
              {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
