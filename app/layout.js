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
    url: "https://www.0xPorti.com",
    site: "https://www.0xPorti.com",
    images: ["/assets/images/0xPorti_logo_icon_margin.png"],
    title: "0xPorti",
  },
  
  // OpenGraph
  openGraph: {
    title: "0xPorti",
    url: "https://www.0xporti.com/blog",
    description: "Pentesting, Binary Exploitation, Software, ....",
    type: "website",
    locale: "en_ES",
    images: [
      {
        url: "/assets/images/0xPorti_logo_icon_margin.png",
        height: "850",
        width: "850",
        alt: "0xPorti Icon"
      },
      {
        url: "/assets/images/0xPorti_Logo.svg",
        alt: "0xPorti Logo"
      },
    ],
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/assets/images/0xPorti_logo_icon_margin.png",
    apple: "/assets/images/0xPorti_logo_icon_margin.png",
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
