import Image from 'next/image'
import { Inter } from 'next/font/google'
import Dashboard1 from '@/components/Dashboard1'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen h-full p-4 flex-col items-center justify-between bg-slate-50 ${inter.className}`}
    >
      <Dashboard1 />
    </main>
  )
}
