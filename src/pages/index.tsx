import Head from 'next/head'
import Image from 'next/image'
import { Butterfly_Kids, Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '@/components/ui/Button'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const handleClick = () => {
    console.log('Button was clicked');
  };

  return (
    <>
    <section className='px-44'>

    
    <h1 className='text-red-500 '> Init</h1>  
    <Button onClick={handleClick} styles="bg-yellow-500" children="hellow"/>
    </section>
      </>
  )
}
