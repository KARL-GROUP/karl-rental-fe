import CarCard from "../cards/CarCard";
import { cars } from "@/data/cars";
const DashboardAdmin = () => {
    return ( 
        <>
        <div className="grid grid-cols-2 gap-10 w-4/5">

       
        {cars.map((car, index) => {
            return(
                // <h1>hello</h1>
        <CarCard key={index} image={car.image} carName={car.carName} price={car.price} category={car.category} seats={car.seats} />


            )
        })}
         </div>
        </>
     );
}
 
export default DashboardAdmin;