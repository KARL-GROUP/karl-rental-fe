import Link from "next/link";
import { useRouter } from "next/router";
import SectionWrapper from "../Wrappers/sectionWrapper";
import { cars } from '../../data/cars'
import Image from "next/image";
import Select from 'react-select'
import Button from "../ui/Button";

const Landing = () => {
    const router = useRouter()

    const navLinks = [
        { href: '/landing', label: 'Home' },
        { href: '/about', label: 'About us' },
        { href: '/', label: 'Support' },
        { href: '/', label: 'Terms & Conditions' },
    ];

    const options = [
        { value: 'Car one', label: 'Car one' },
        { value: 'Car one', label: 'Car one' },
        { value: 'Car one', label: 'Car one' },
        { value: 'Car one', label: 'Car one' },
    ]


    const samples = cars.slice(0, 5)

    return (
        <>
            <SectionWrapper className="bg-[#F3F2EF]">
                <header className="flex gap-20 py-5">
                    <h1 className="text-3xl">Karl</h1>
                    <ul className="flex gap-10 items-center">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={router.pathname === link.href ? 'text-blue-500 font-bold border-b border-blue-500 pb-3' : ''}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </header>
                {/* <section className="flex justify-between py-10">
                    <div>
                        <p>Pick-Up Date</p>
                        <input placeholder="19th June" className="bg-white border rounded-md py-2 px-10" />

                    </div>
                    <div>
                        <p>Drop-Off Date</p>
                        <input placeholder="19th June" className="bg-white border rounded-md py-2 px-10" />


                    </div>
                    <div>
                        <p>Pick-Up Time</p>
                        <input placeholder="19th June" className="bg-white border rounded-md py-2 px-10" />


                    </div>
                    <div>
                        <p>Drop-Off Time</p>
                        <input placeholder="19th June" className="bg-white border rounded-md py-2 px-10" />


                    </div>
                    <button className="bg-primary-purple rounded-lg py-2 px-6"><svg className="w-8 h-8" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="6" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 14.5L19 19" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
                </section> */}

                <div className="bg-white/50 py-10 rounded-lg w-full xl:flex xl:flex-row  md:block justify-between items-center px-5 xl:h-12">
                    <div className="border-r border-black px-10">
                        <Select options={options} placeholder="Type of car you looking for" className="outline-none border-0" />
                    </div>
                    <div className="border-l">
                        <Select options={options} placeholder="Type of car you looking for" className="outline-none border-0" />
                    </div>
                    <div className="flex gap-3 items-center border-l border-black px-4 h-12">
                        <p>From</p>
                        <svg className="h-6" width="43" height="46" viewBox="0 0 43 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.3333 4.25016H36.25V0.0834961H32.0833V4.25016H11.25V0.0834961H7.08334V4.25016H5.00001C2.70834 4.25016 0.833344 6.12516 0.833344 8.41683V41.7502C0.833344 44.0418 2.70834 45.9168 5.00001 45.9168H38.3333C40.625 45.9168 42.5 44.0418 42.5 41.7502V8.41683C42.5 6.12516 40.625 4.25016 38.3333 4.25016ZM38.3333 41.7502H5.00001V14.6668H38.3333V41.7502Z" fill="#3F3CD4" />
                        </svg>

                    </div>
                    <div className="flex gap-3 items-center border-l border-black px-4 h-12">
                        <p>To</p>
                        <svg className="h-6" width="43" height="46" viewBox="0 0 43 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.3333 4.25016H36.25V0.0834961H32.0833V4.25016H11.25V0.0834961H7.08334V4.25016H5.00001C2.70834 4.25016 0.833344 6.12516 0.833344 8.41683V41.7502C0.833344 44.0418 2.70834 45.9168 5.00001 45.9168H38.3333C40.625 45.9168 42.5 44.0418 42.5 41.7502V8.41683C42.5 6.12516 40.625 4.25016 38.3333 4.25016ZM38.3333 41.7502H5.00001V14.6668H38.3333V41.7502Z" fill="black" />
                        </svg>

                    </div>

                    <div className="border-l border-black px-4 h-12">
                        <Button styles="bg-[#3F3CD4] -mt-0 shadow-xl" text="Search" />

                    </div>
                </div>

                {/* <section className="flex justify-between gap-3">
                    {cars.map((car, index) => {
                        return ( */}
                {/* <div key={index} className="flex gap-4 py-2 px-2 bg-white rounded-lg w-[50rem] h-auto"> */}
                {/* <Image className=" w-full" src={car.image} width={100} height={20} alt="image" /> */}
                {/* <p>{car.carName}</p> */}
                {/* </div>
                        )
                    })}
                </section> */}

                <section className="grid grid-cols-4 gap-y-5 gap-x-10 bg-[#F3F2EF] py-10">
                    {samples.map((car, index)=> {
                        return (
                            <div key={index} className="bg-white shadown rounded-xl py-5 px-5 border flex flex-col gap-5">
                                <div>
                                    <p className="font-bold">{car.carName}</p>
                                    <p className="text-gray-500">{car.category}</p>
                                </div>


                                <Image className="w-full object-cover" src={car.image} alt="Car image" width={100} height={100} />
                                <div className="flex justify-between">
                                    <div className="flex gap-2">
                                        <div className="flex gap-1 items-center">
                                            <svg className="w-5 h-5" width="800px" height="800px" viewBox="0 0 24 24" fill="#3F3CD4" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z" fill="#3F3CD4" /></svg>
                                            <p className="text-gray-500 font-semibold">{car.seats}</p>
                                        </div>

                                        <div className="flex gap-1 items-center">
                                            <svg className="w-5 h-5" width="800px" height="800px" viewBox="0 0 24 24" fill="#3F3CD4" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z" fill="#3F3CD4" /></svg>
                                            <p className="text-gray-500 font-semibold">Manual</p>
                                        </div>

                                    </div>


                                    <div className="flex gap-1 items-center">
                                        <svg className="w-5 h-5" width="800px" height="800px" viewBox="0 0 24 24" fill="#3F3CD4" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z" fill="#3F3CD4" /></svg>
                                        <p className="text-gray-500 font-semibold">{car.price}</p>
                                    </div>


                                    {/* <Link className="underline text-primary-purple" href="/">View</Link> */}
                                    {/* <p>{car.price}</p> */}
                                </div>

                            </div>
                        )
                    })}

                </section>

            </SectionWrapper>
        </>
    );
}

export default Landing;