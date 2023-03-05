import Head from 'next/head'
import Image from 'next/image'
import { Butterfly_Kids, Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '@/components/ui/Button'
import CarCard from '@/components/cards/CarCard'
import CarSection from '@/components/sections/CarSection'
import HowItWorks from '@/components/sections/HowItWorks'
import Hero from '@/components/sections/Hero'
import Footer from '@/components/layout/Footer'
import {Input} from '../components/ui/Input'
import Cars from '@/components/sections/Cars'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const handleClick = () => {
  //   console.log('Button was clicked');
  // };

  return (
    <>
      <section className=' font-mont'>
        {/* <Hero />
        <HowItWorks />
        <CarSection />
        <Footer /> */}
        <Cars />
      </section>
    </>

  )
}




// api/categories