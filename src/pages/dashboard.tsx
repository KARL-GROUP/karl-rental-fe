import Sidebar from "@/components/layout/admin/Sidebar";
import SideBarWrapper from "@/components/Wrappers/SideBarWrapper";
import ContentWrapper from "@/components/Wrappers/ContentWrapper";
import { useState } from "react";

const dashboard = () => {
    const [show, setShow] = useState(true)
    return ( 
        <>
        <SideBarWrapper>
            <Sidebar show={show} handleShow={()=>setShow(!show)}/>
            <ContentWrapper>
                <div className="border broder-gray-500 w-full px-4 py-10 xl:px-20 rounded-lg">
                <h1 className="text-4xl">Welcome to your dashboard</h1>

                </div>
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-10 py-20">
                <div className="bg-white flex flex-col items-center shadow-3xl rounded-lg py-10 px-5 border">
                        <h1 className="font-bold text-6xl">50</h1>
                        <p>Total Cars</p>
                    </div>
                    <div className="bg-white flex flex-col items-center shadow-3xl rounded-lg py-10 px-5 border">
                        <h1 className="font-bold text-6xl">50</h1>
                        <p>Available cars</p>
                    </div>
                    <div className="bg-white flex flex-col items-center shadow-3xl rounded-lg py-10 px-5 border">
                        <h1 className="font-bold text-6xl">50</h1>
                        <p>Pending Cars requests</p>
                    </div>
                    <div className="bg-white flex flex-col items-center shadow-3xl rounded-lg py-10 px-5 border">
                        <h1 className="font-bold text-6xl">50</h1>
                        <p>Rented Cars</p>
                    </div>
                    
                </div>
            </ContentWrapper>
        </SideBarWrapper>

       
        </>
     );
}
 
export default dashboard;