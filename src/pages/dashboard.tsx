import Sidebar from "@/components/layout/admin/Sidebar";
import SideBarWrapper from "@/components/Wrappers/SideBarWrapper";
import ContentWrapper from "@/components/Wrappers/ContentWrapper";
import { useState } from "react";
import DashboardAdmin from "@/components/sections/DashboardAdmin";
const Dashboard = () => {
    const [show, setShow] = useState(true)
    return ( 
        <>
        <SideBarWrapper>
            <Sidebar show={show} handleShow={()=>setShow(!show)}/>
            <ContentWrapper>
                <DashboardAdmin />
            </ContentWrapper>
        </SideBarWrapper>

       
        </>
     );
}
 
export default Dashboard;