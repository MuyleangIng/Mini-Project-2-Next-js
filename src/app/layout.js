"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import NavbarComponent from "@/components/NavbarComponent";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import FooterComponent from "@/components/FooterComponent";
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

const metadata = {
    title: {
        template: '%s - FigureShop '
    },
    description: " Hello my name Ing muyleang ",
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavbarComponent/>

      {children}
      <FooterComponent/>
      </body>
    </html>
  )
}
