import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BackToTop from "@/components/BackToTop"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio | Sandia Melani",
  description: "Best Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} flex flex-col min-h-screen bg-gradient-to-r from-dark via-dark to-blue-950`}>
        <main className="flex-grow">
          <Navbar />
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
