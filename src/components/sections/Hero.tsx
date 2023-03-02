import Image from "next/image";
import carHero from '../../../public/assets/herocar.png'
import Button from "../ui/Button";
import Select from 'react-select'
import DatePicker from 'react-date-picker';
import { useState } from "react";
import { useRouter } from "next/router";

const Hero = () => {

    const [value, onChange] = useState(new Date());


    const options = [
        { value: 'Car one', label: 'Car one' },
        { value: 'Car one', label: 'Car one' },
        { value: 'Car one', label: 'Car one' },
        { value: 'Car one', label: 'Car one' },
    ]

    const router = useRouter()

    const handleClick = (e: any) => {
        e.preventDefault()
        router.push('/Dashboard')

    }

    return (


        <div className="w-full hero h-full flex flex-col xl:flex xl:flex-row  justify-center bg-green-500
                 bg-gray-900/30 backdrop-brightness-75 xl:pl-20 py-28">
<button onClick={handleClick}>Dashboard</button>
           
            <div className="w-full px-6 xl:w-1/2  flex flex-col gap-5">
                <h1 className="text-5xl w-full xl:text-6xl text-black font-bold leading-[60px] xl:leading-[70px]">Best deals on your next
                    rental. BOOK NOW</h1>
                <p className="font-medium text-xl">Easy Search</p>
                <div className="bg-white py-10 rounded-lg w-full xl:flex xl:flex-row  md:block justify-between items-center px-5 xl:h-12">
                    
                    <Select options={options} placeholder="Type of car you looking for" className="outline-none border-0" />
                    <div className="flex gap-3 items-center border-l border-black px-4 h-12">
                        <p>From</p>
                        <svg className="h-10" width="43" height="46" viewBox="0 0 43 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.3333 4.25016H36.25V0.0834961H32.0833V4.25016H11.25V0.0834961H7.08334V4.25016H5.00001C2.70834 4.25016 0.833344 6.12516 0.833344 8.41683V41.7502C0.833344 44.0418 2.70834 45.9168 5.00001 45.9168H38.3333C40.625 45.9168 42.5 44.0418 42.5 41.7502V8.41683C42.5 6.12516 40.625 4.25016 38.3333 4.25016ZM38.3333 41.7502H5.00001V14.6668H38.3333V41.7502Z" fill="black" />
                        </svg>

                    </div>
                    <div className="flex gap-3 items-center border-l border-black px-4 h-12">
                        <p>To</p>
                        <svg className="h-10" width="43" height="46" viewBox="0 0 43 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.3333 4.25016H36.25V0.0834961H32.0833V4.25016H11.25V0.0834961H7.08334V4.25016H5.00001C2.70834 4.25016 0.833344 6.12516 0.833344 8.41683V41.7502C0.833344 44.0418 2.70834 45.9168 5.00001 45.9168H38.3333C40.625 45.9168 42.5 44.0418 42.5 41.7502V8.41683C42.5 6.12516 40.625 4.25016 38.3333 4.25016ZM38.3333 41.7502H5.00001V14.6668H38.3333V41.7502Z" fill="black" />
                        </svg>

                    </div>

                    <div className="border-l border-black px-4 h-12">
                        <Button styles="bg-[#3F3CD4] -mt-0 shadow-xl" text="Search" />

                    </div>
                </div>
                <div className="flex gap-10 items-center mt-5">
                    <p className="font-bold">Or</p>
                <Button styles="bg-[#a5f3fc] text-black w-44 mt-0 shadow-xl py-4" text="View all cars" />

                </div>
                
            </div>

            <div className="h-[30rem] w-[40rem] mb-0 mr-0 relative">
                <Image src={carHero} className=" absolute object-fit" alt="car" layout="fill" />
            </div>

        </div>



        //         <section className="hero pl-20 bg-blend-multiply w-full h-auto flex justify-between">






        //         </section>
    );
}

export default Hero;