import { Car } from "../../data/cars";
import { cars } from "../../data/cars";
import Image from "next/image";
import { Key } from "react";
import Button from "../ui/Button";
import SectionWrapper from "../Wrappers/sectionWrapper";
import Profile from "../svgs/Profile";
import GearBox from '../../../public/assets/GearBox.png'

interface Props {
  image: string,
  carName: string,
  price: string,
  category: string,
  seats: number,

}
const CarCard = ({ image, carName, price, category, seats }: Props) => {
  return (
    <>


      <div className="shadow rounded-[16px] bg-white py-5 px-[30px] flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <p className="text-lg">{carName}</p>
         <div className="flex justify-between items-center rounded-full border-2 w-8 h-8">
         <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12H8.01" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 12H12.01" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16 12H16.01" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
         </div>
          
        </div>
        <p>Category category category</p>
        <div className="relative w-full h-[20vh]">
          <Image className=" absolute object-fill rounded-t-[16px] " src={image} alt="car" layout="fill" />


        </div>
        <div className="flex justify-between gap-2">
          <div className="flex items-center gap-2">
            <Profile />
            <p className="mt-1">{seats}</p>
          </div>
          <div className="flex items-center gap-2">

            <Image src={GearBox} width={18} height={18} alt="Category" />
            <p>{category}</p>
          </div>

          <p className="">{price}</p>


        </div>
        {/* <Button text="Book" styles="w-full" /> */}


      </div>


    </>
  );
}

export default CarCard;