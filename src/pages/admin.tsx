import Sidebar from "@/components/layout/admin/Sidebar";
import CarSection from "@/components/admin/CarSection";


const Admin = () => {
    return (
        <>

            <section className="flex gap-20">
                <Sidebar show={false} handleShow={function (): void {
                    throw new Error("Function not implemented.");
                } } />
                <div className="w-2/3">
                    <h1>Dashboard</h1>
                    <CarSection />
                </div>
            </section>

        </>

    );
}

export default Admin;