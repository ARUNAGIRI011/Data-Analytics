import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anaayasaas — Explore India Better',
  description: 'AI-assisted travel planning, curated Indian destinations and tourism marketplace.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
