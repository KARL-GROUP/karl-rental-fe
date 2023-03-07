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
    const fetchCars = async () => {
      let res = await axios.get('https://karla-rental-be-development.up.railway.app/api/cars')
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
                <div className="flex justify-between">


                  <div>
                    <p className="font-bold">{car.carName}</p>
                    <p className="text-gray-500">{car.category}</p>
                  </div>

                  <div className="flex flex-col gap-2">

              
                  <div className="flex items-center gap-1">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#3F3CD4" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 18.75C6.17 18.75 3.43 12.56 3.31 12.3C3.27039 12.2049 3.25 12.103 3.25 12C3.25 11.897 3.27039 11.7951 3.31 11.7C3.43 11.44 6.17 5.25 12 5.25C17.83 5.25 20.57 11.44 20.69 11.7C20.7296 11.7951 20.75 11.897 20.75 12C20.75 12.103 20.7296 12.2049 20.69 12.3C20.57 12.56 17.83 18.75 12 18.75ZM4.83 12C5.42 13.15 7.83 17.25 12 17.25C16.17 17.25 18.58 13.15 19.17 12C18.58 10.85 16.17 6.75 12 6.75C7.83 6.75 5.42 10.85 4.83 12Z" fill="#3F3CD4" />
                      <path d="M12 15.25C11.3572 15.25 10.7289 15.0594 10.1944 14.7023C9.65994 14.3452 9.24338 13.8376 8.99739 13.2437C8.75141 12.6499 8.68705 11.9964 8.81245 11.366C8.93785 10.7355 9.24738 10.1564 9.7019 9.7019C10.1564 9.24738 10.7355 8.93785 11.366 8.81245C11.9964 8.68705 12.6499 8.75141 13.2437 8.99739C13.8376 9.24338 14.3452 9.65994 14.7023 10.1944C15.0594 10.7289 15.25 11.3572 15.25 12C15.2474 12.8611 14.9041 13.6863 14.2952 14.2952C13.6863 14.9041 12.8611 15.2474 12 15.25ZM12 10.25C11.6539 10.25 11.3155 10.3526 11.0278 10.5449C10.74 10.7372 10.5157 11.0105 10.3832 11.3303C10.2508 11.6501 10.2161 12.0019 10.2836 12.3414C10.3512 12.6809 10.5178 12.9927 10.7626 13.2374C11.0073 13.4822 11.3191 13.6489 11.6586 13.7164C11.9981 13.7839 12.3499 13.7492 12.6697 13.6168C12.9895 13.4843 13.2628 13.26 13.4551 12.9722C13.6474 12.6845 13.75 12.3461 13.75 12C13.7474 11.5367 13.5622 11.0931 13.2345 10.7655C12.9069 10.4378 12.4633 10.2526 12 10.25Z" fill="#3F3CD4" />
                    </svg>

                    <p>View</p>
                  </div>
                </div>
                </div>




                <Image className="w-full object-cover" src={car.image} alt="Car image" width={100} height={100} />
                <div className="flex justify-between">

                  <div className="flex flex-col gap-2">
                  <div className="flex  gap-2">
                  <div className="flex gap-1 items-center">
                      <svg className="w-5 h-5" width="800px" height="800px" viewBox="0 0 24 24" fill="#3F3CD4" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z" fill="#3F3CD4" /></svg>
                      <p className="text-gray-500 font-semibold">Manual</p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <svg className="w-5 h-5" width="800px" height="800px" viewBox="0 0 24 24" fill="#808080" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z" fill="#808080" /></svg>
                      <p className="text-gray-500 font-semibold">{car.seats}</p>
                    </div>

                    
                   
                  </div>
                  <div className="flex gap-1 items-center">
                    <svg className="w-5 h-5" width="800px" height="800px" viewBox="0 0 24 24" fill="#3F3CD4" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z" fill="#3F3CD4" /></svg>
                    <p className="text-gray-500 font-semibold">{car.price}</p>
                  </div>
                  </div>

                  {/* <div className="w-1/2"> */}
                  <button className="bg-black px-5 py-2 h-10 text-white font-semibold rounded">Book now</button>
                {/* <Button styles="bg-white"  text="Book now"/> */}


                {/* </div> */}



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