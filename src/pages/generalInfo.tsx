import GeneralInfo from "@/components/admin/GeneralInfo";
import Sidebar from "@/components/layout/admin/Sidebar";
import SideBarWrapper from "@/components/Wrappers/SideBarWrapper";
import ContentWrapper from "@/components/Wrappers/ContentWrapper";
import { useState } from "react";
const generalInfo = () => {
    const [show, setShow] = useState(true)

    return (

        <SideBarWrapper>
            <Sidebar show={show} handleShow={() => setShow(!show)} />
            <ContentWrapper>
                <GeneralInfo />

            </ContentWrapper>
        </SideBarWrapper>
    );
}

export default generalInfo;