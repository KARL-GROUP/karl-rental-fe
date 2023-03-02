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
        <p className="text-lg">{carName}</p>
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