import { Car, cars } from "@/data/cars";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SideBarWrapper from "@/components/Wrappers/SideBarWrapper";
import Sidebar from "@/components/layout/admin/Sidebar";
import ContentWrapper from "@/components/Wrappers/ContentWrapper";
import { useState } from "react";

const allCars = () => {

    return ( 
        <>

<SideBarWrapper>
            <ContentWrapper>
            <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {cars.map((car: Car, index: number) => {
          return (
            <div key={index} className="bg-white shadow-3xl rounded-[16px]">
              <Image className="w-full shadow-3xl object-fill rounded-t-[16px] " src={car.image} alt="car" width={100} height={100} />
              <div className=" px-5 py-5 flex flex-col gap-2">
                <p className="text-md">{car.carName}</p>
                <p className="text-md">{car.price}</p>
                <Button text="Book" styles="w-full bg-black" />

              </div>

            </div>
          )
        })}

      </section>
            </ContentWrapper>
        </SideBarWrapper>
          
        </>
     );
}
 
export default allCars;