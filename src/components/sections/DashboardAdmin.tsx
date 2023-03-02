import CarCard from "../cards/CarCard";
import { cars } from "@/data/cars";
import Button from "../ui/Button";
const DashboardAdmin = () => {
    return ( 
        <>
        <div className="flex justify-between">
            <p>All Cars</p>
            <div className="flex justify-between  gap-5">
                <div className="flex justify-between shadow bg-white py-4 px-5 rounded-md">
                <input className="outline-none w-full" placeholder="Search for a car"/>
                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.7225 14.6764L14.7352 14.6598L14.3909 14.3165C15.6396 12.9122 16.4081 11.0749 16.4419 9.06267C16.5172 4.5758 12.9413 0.877751 8.45442 0.802416C3.96755 0.727081 0.269501 4.303 0.194166 8.78987C0.118831 13.2767 3.69475 16.9748 8.18162 17.0501C10.1938 17.0839 12.056 16.3776 13.5013 15.1767L13.8329 15.5323L13.8163 16.5196L19.9607 22.8612L21.8542 21.0302L15.7225 14.6764ZM8.22359 14.5505C5.11153 14.4982 2.64156 11.9439 2.69381 8.83184C2.74607 5.71978 5.30039 3.24981 8.41245 3.30206C11.5245 3.35432 13.9945 5.90864 13.9422 9.0207C13.89 12.1328 11.3357 14.6027 8.22359 14.5505Z" fill="black"/>
</svg>


                </div>
                <Button svg={<svg width="20" height="20" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.506 17.6466L17.006 17.6466L17.006 30.1466L12.8394 30.1466L12.8394 17.6466L0.339355 17.6466L0.339355 13.48L12.8394 13.48L12.8394 0.97998L17.006 0.97998L17.006 13.48L29.506 13.48L29.506 17.6466Z" fill="white"/>
</svg>} text="Add new Car" 
 />
            </div>
        </div>
        <div className="grid grid-cols-2 gap-10 w-4/5 mt-10">

       
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