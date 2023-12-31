import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Christmas Countdown',
  description: 'Countdown to Christmas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />

<link href="https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@400;700&display=swap" rel="stylesheet"/>
</head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
