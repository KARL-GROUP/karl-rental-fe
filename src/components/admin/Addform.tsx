import {Input} from "../ui/Input";
import Button from "../ui/Button";

const Addform = () => {
    return ( 
        <>
            <form className="w-1/2 mt-10 flex flex-col gap-5">
                <Input name="" placeholder="" inputLabel="First Name"/>
                <Input name="" placeholder="" inputLabel="First Name"/>
                <Input name="" placeholder="" inputLabel="First Name"/>
                <Input name="" placeholder="" inputLabel="First Name"/>
                <Input name="" placeholder="" inputLabel="First Name"/>
                <Button text="Add car"/>
            </form>
        </>
     );
}
 
export default Addform;