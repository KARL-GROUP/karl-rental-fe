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
// import Cars from '@/components/sections/Cars'
import Testimonies from '@/components/sections/Testimonies'
import { useAdminRegisterMutation } from '@/services/authApiSlice'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const initialData = {
    email: "",
    password: ""
  }

  const [adminInfo, setAdminInfo] = useState(initialData)
  const inputHandler = (e: any) => {
    setAdminInfo({...adminInfo, [e.target.name] : e.target.value})
  }

  const [registerAdmin, {isLoading, isError}] = useAdminRegisterMutation()
console.log("test", registerAdmin)
const register = async (e: any) => {
  e.preventDefault()
  await registerAdmin(adminInfo).unwrap().then((payload) => {
    console.log("payload", payload)
  })
  .catch((err) => {
    console.log(err)
  })
}
  return (
    <>
    <Head>
    <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className=' font-mont bg-[#F4F3FF]'>
        {/* <Hero />
        <HowItWorks />
        <CarSection />
        <Testimonies />
        <Footer /> */}

        <form>
        <input name="userName" placeholder='username' onChange={inputHandler}/>
          <input name="email" placeholder='email' onChange={inputHandler}/>
          <input name="password" placeholder='password' onChange={inputHandler}/>
          <input name="passwordConfirm" placeholder='confirm password' onChange={inputHandler}/>
          <button onClick={register}>Submit</button>
        </form>
        {/* <Cars /> */}
      </section>
    </>

  )
}




// api/categories