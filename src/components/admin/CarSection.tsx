import { Car } from "../../data/cars";
import { cars } from "../../data/cars";
import Image from "next/image";
import Button from "../ui/Button";

const CarSection = () => {
    return (
        <>
            <section className="mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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

        </>
    );
}

export default CarSection;