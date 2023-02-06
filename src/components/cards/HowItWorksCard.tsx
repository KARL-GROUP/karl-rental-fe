import { Car } from "../../data/cars";
import { cars } from "../../data/cars";
import Image from "next/image";
import { Key } from "react";
import Button from "../ui/Button";
import SectionWrapper from "../Wrappers/sectionWrapper";

interface Props {
  image: "string",
  title: "string",
  description: String
}
const HowItWorksCard = ({ image, title, description }: Props) => {
  return (
    <>


      <div className=" rounded-[16px] flex flex-col gap-5 items-center bg-white">
        <div className="bg-[#3F3CD4] rounded-t-[16px] h-2 w-full"></div>

        <div className=" px-[26px] p-10 flex flex-col gap-5 items-center">
        <Image className="w-[50px] h-[50px]" src={image} alt="car" width={100} height={100} />
  <p className="font-bold text-[18px] ">{title}</p>
  <p className="text-center w-full text-[18px]">{description}</p>

        </div>
      

      </div>


    </>
  );
}

export default HowItWorksCard;