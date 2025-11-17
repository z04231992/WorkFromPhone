import type React from "react"

import type { Metadata } from "next"

import { Nunito, Inter } from "next/font/google"

import "./globals.css"

const nunito = Nunito({

  subsets: ["latin"],

  display: "swap",

  variable: "--font-nunito",

})

const inter = Inter({

  subsets: ["latin"],

  display: "swap",

  variable: "--font-inter",

})

export const metadata: Metadata = {

  title: "Work From Phone - Make Money From Your Phone",

  description: "Stop just using your phone. Start profiting from it. Real strategies. Real results. All from your phone.",

  generator: "v0.app",

}

export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode

}>) {

  return (

    <html lang="en" className={`${nunito.variable} ${inter.variable} dark`}>

      <body className="font-sans antialiased bg-black">{children}</body>

    </html>

  )

}