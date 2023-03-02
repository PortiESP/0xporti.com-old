import Footer from '@/components/footer/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics'
import './globals.scss'

export const metadata = {
  title: "0xPorti",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body>
        {children}
        <Footer />
        </body>
    </html>
  )
}
