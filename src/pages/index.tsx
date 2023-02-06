import Head from 'next/head'
import Image from 'next/image'
import { Butterfly_Kids, Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '@/components/ui/Button'
import CarCard from '@/components/cards/CarCard'
import CarSection from '@/components/sections/CarSection'
import HowItWorks from '@/components/sections/HowItWorks'
import Hero from '@/components/sections/Hero'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const handleClick = () => {
  //   console.log('Button was clicked');
  // };

  return (
    <>
      <section className=' bg-[#F3F2EF]'>
        <Hero />

        <HowItWorks />
        <CarSection />

       

      </section>
    </>
  )
}
