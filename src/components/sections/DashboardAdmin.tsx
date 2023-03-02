import CarCard from "../cards/CarCard";
import { cars } from "@/data/cars";
import Button from "../ui/Button";
const DashboardAdmin = () => {
    return ( 
        <>
        <div>
            <p>All Cars</p>
            <div>
                <div>
                <input placeholder="Search for a car"/>

                </div>
                <Button svg={<svg width="20" height="20" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.506 17.6466L17.006 17.6466L17.006 30.1466L12.8394 30.1466L12.8394 17.6466L0.339355 17.6466L0.339355 13.48L12.8394 13.48L12.8394 0.97998L17.006 0.97998L17.006 13.48L29.506 13.48L29.506 17.6466Z" fill="white"/>
</svg>} text="Add new Car" 
 />
            </div>
        </div>
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