import Sidebar from "@/components/layout/admin/Sidebar";
import CarSection from "@/components/admin/CarSection";


const admin = () => {
    return (
        <>

            <section className="flex gap-20">
                <Sidebar />
                <div className="w-2/3">
                    <h1>Dashboard</h1>
                    <CarSection />
                </div>
            </section>

        </>

    );
}

export default admin;