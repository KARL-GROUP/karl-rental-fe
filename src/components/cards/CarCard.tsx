import { Car } from "../../data/cars";
import { cars } from "../../data/cars";
import Image from "next/image";
import { Key } from "react";
import Button from "../ui/Button";
import SectionWrapper from "../Wrappers/sectionWrapper";

interface Props {
  image: "string",
  carName: "string",
  price: String
}
const CarCard = ({ image, carName, price }: Props) => {
  return (
    <>


      <div className="drop-shadow-3xl w-[20rem] rounded-[16px]">
        <Image className="w-full object-fill rounded-t-[16px] " src={image} alt="car" width={100} height={100} />
        <div className="text-white px-5 py-5 flex flex-col gap-2">
          <p className="text-xl">{carName}</p>
          <p className="text-xl">{price}</p>
          <Button text="Book" styles="w-full" />

        </div>

      </div>


    </>
  );
}

export default CarCard;