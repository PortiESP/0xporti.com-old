import Footer from '@/components/footer/Footer'
import './globals.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        {children}
        <Footer />
        </body>
    </html>
  )
}
