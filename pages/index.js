/* eslint-disable @next/next/no-img-element */
import { Inter } from 'next/font/google'
import Dashboard from '@/components/Dashboard/Dashboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen h-full p-4 flex-col bg-slate-50 ${inter.className}`}
    >
      <Dashboard />
    </main>
  )
}
