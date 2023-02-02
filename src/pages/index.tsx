import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import  Input  from '../components/ui/Input'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <> 
    <div className="bg-black h-[100vh] p-5">
    <Input  name='something' value='something' inputLabel='something' onChange />
    </div>
      </>
  )
}
