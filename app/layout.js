import Footer from '@/components/footer/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics'
import './globals.scss'

export const metadata = {
  title: "0xPorti",
  description: "Pesonal site of Porti, Full-Stack and Software Developer",
  
  // Color
  themeColor: "#2b2b2b",
  colorScheme: "dark",
  category: "technology",
  
  // Credits
  creator: "Porti",
  authors: [{name:"Porti"}],

  // Twitter
  twitter: {
    card: "summary",
    creator: "@PortiiRM",
    site: "https://www.0xPorti.com",
    images: ["/assets/images/0xPorti_logo_icon.png"],
    title: "0xPorti",
  },
  
  // OpenGraph
  OpenGraph: {
    title: "0xPorti",
    description: "Pentesting, Binary Exploitation, Software, ....",
    type: "article",
    image: "/assets/images/0xPorti_logo_icon.png",
    alt: "0xPorti Icon",
    height: "850",
    width: "850",
    locale: "en_ES"
  },

  // Icons
  icons: {
    icon: "/assets/images/0xPorti_logo_icon.png",
    shortcut: "/assets/images/0xPorti_logo_icon.png",
    apple: "/assets/images/0xPorti_logo_icon.png",
  },

  // Robots
  robots: {
    index: true,
    follow: true
  }

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
