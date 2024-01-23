import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plus_jakarta_sans = Plus_Jakarta_Sans(
  { 
    subsets: ['latin'],
    weight: ["400", "500", "600", "700"] 
  }
)

export const metadata: Metadata = {
  title: 'Kanban App Frontend Mentor Challenge',
  description: 'Your Kanban App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${plus_jakarta_sans.className} dark:bg-dark_grey`}>{children}</body>
    </html>
  )
}
