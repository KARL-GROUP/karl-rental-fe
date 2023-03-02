import { Car } from "../../data/cars";
import { cars } from "../../data/cars";
import Image from "next/image";
import { Key } from "react";
import Button from "../ui/Button";
import SectionWrapper from "../Wrappers/sectionWrapper";

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


      <div className=" w-[20rem] rounded-[16px]">
      <p className="text-lg">{carName}</p>
<p>Category category category</p>
        <Image className="w-full object-fill rounded-t-[16px] " src={image} alt="car" width={100} height={100} />
        <div className=" px-5 py-5 flex justify-between gap-2">
          <p>{seats}</p>
          <p>{category}</p>
          <p className="text-[10px] ">{price}</p>


        </div>
        <Button text="Book" styles="w-full" />


      </div>


    </>
  );
}

export default CarCard;