import Addform from "@/components/admin/Addform";
import Sidebar from "@/components/layout/admin/Sidebar";
import ContentWrapper from "@/components/Wrappers/ContentWrapper";
import SideBarWrapper from "@/components/Wrappers/SideBarWrapper";
import { useState } from "react";
const addCar = () => {
    const [show, setShow] = useState(true);
    return (
        <>
            <SideBarWrapper>
                <Sidebar show={show} handleShow={() => setShow(!show)} />

                <ContentWrapper className="flex justify-center">
                    <Addform />
                </ContentWrapper>

            </SideBarWrapper>
        </>
    );
}

export default addCar;