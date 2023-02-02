import Head from 'next/head'
import Image from 'next/image'
import { Butterfly_Kids, Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '@/components/ui/Button'
import CarCard from '@/components/cards/CarCard'
import CarSection from '@/components/sections/CarSection'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const handleClick = () => {
  //   console.log('Button was clicked');
  // };

  return (
    <>
      <section className='px-44 bg-black'>


        <h1 className='text-red-500 '> Init</h1>
        {/* <Button onClick={handleClick} styles="bg-yellow-500" text="hellow"/> */}
        <CarSection />
      </section>
    </>
  )
}
