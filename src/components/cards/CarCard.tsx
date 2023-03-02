import { Car } from "../../data/cars";
import { cars } from "../../data/cars";
import Image from "next/image";
import { Key } from "react";
import Button from "../ui/Button";
import SectionWrapper from "../Wrappers/sectionWrapper";
import Profile from "../svgs/Profile";
import CategoryIcon from "../svgs/CategoryIcon";
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


      <div className=" rounded-[16px] bg-white py-5 px-[30px] flex flex-col gap-5">
      <p className="text-lg">{carName}</p>
<p>Category category category</p>
        <Image className="w-full object-fill rounded-t-[16px] " src={image} alt="car" width={100} height={100} />
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
        <Button text="Book" styles="w-full" />


      </div>


    </>
  );
}

export default CarCard;