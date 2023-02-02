import { Car } from "../../data/cars";
import { cars } from "../../data/cars";
import Image from "next/image";
import { Key } from "react";
import Button from "../ui/Button";
import SectionWrapper from "../Wrappers/sectionWrapper";
const CarSection = () => {
    return (
        // <>
        <SectionWrapper>

            <h1>ello</h1>
            <section className="grid grid-cols-3 gap-y-10">
        {cars.map((car:Car , index: number) => {
          return(
            <div key={index} className="drop-shadow-3xl w-[20rem] rounded-[16px]">
              <Image className="w-full object-fill rounded-t-[16px] " src={car.image} alt="car" width={100} height={100}/>
              <div className="text-white px-5 py-5 flex flex-col gap-2">
              <p className="text-xl">{car.carName}</p>
              <p className="text-xl">{car.price}</p>
              <Button text="Book" styles="w-full" /> 

              </div>
              
            </div>
          )
        })}

      </section>

        </SectionWrapper>

    );
}

export default CarSection;