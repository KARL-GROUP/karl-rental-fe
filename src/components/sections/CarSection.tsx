import { Car } from "../../data/cars";
import { cars } from "../../data/cars";
import Image from "next/image";
import { Key } from "react";
import Button from "../ui/Button";
import SectionWrapper from "../Wrappers/sectionWrapper";
import { useEffect, useState } from "react";
import axios from "axios";
const CarSection = () => {

  const [allCars, setAllCars] = useState()

  const samples = cars.slice(0, 6)
  useEffect(() => {
    const fetchCars = async() => {
      let res = await axios.get('https://karla-rental-be-development.up.railway.app/api/cars' )
      console.log("response, res", res.data)
    }
    fetchCars()

  }, [])
  return (
    <>

<SectionWrapper>
      <h1 className="text-center mt-16 font-bold text-2xl">Customer Favorites</h1>
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:flex xl:flex-row gap-10 xl:px-20 overflow-x-scroll">
        {samples.map((car: Car, index: number) => {
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
    <SectionWrapper>
      <h1 className="text-center mt-16 font-bold text-2xl">All available Cars</h1>
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:px-20">
        {samples.map((car: Car, index: number) => {
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
      <div className="flex w-full justify-center mt-16">
        <Button text="See all cars" />
      </div>


    </SectionWrapper>

    <section>
      <h1>What Our customer says about us </h1>
    </section>
    </>

  );
}

export default CarSection;