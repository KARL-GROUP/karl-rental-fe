const GeneralInfo = () => {
    const recentOrders = [
        {
            plate: "RAC00DA",
            status: "Pending",
            from: "01/01/2022",
            to: "01/01/2022"
        },
        {
            plate: "RAC00DA",
            status: "Pending",
            from: "01/01/2022",
            to: "01/01/2022"
        },
        {
            plate: "RAC00DA",
            status: "Pending",
            from: "01/01/2022",
            to: "01/01/2022"
        },
        {
            plate: "RAC00DA",
            status: "Pending",
            from: "01/01/2022",
            to: "01/01/2022"
        },
        {
            plate: "RAC00DA",
            status: "Pending",
            from: "01/01/2022",
            to: "01/01/2022"
        },
        {
            plate: "RAC00DA",
            status: "Pending",
            from: "01/01/2022",
            to: "01/01/2022"
        },
    ]
    return (
        <>
            <section>
                <p>Recent Orders</p>
                <div className="flex overflow-x-scroll gap-10 py-10">
                    {recentOrders.map((order, index) => {
                        return (
                            <div className="bg-white shadow py-5 px-5 min-w-[15rem]">
                                <h1 className="font-bold">Car name</h1>
                                <p className="font-bold">Plate: <span className="font-normal">{order.plate}</span> </p>
                                <p className="font-bold">Status: <span className="text-[#E78A00]">{order.status}</span> </p>
                                <p className="font-bold">From: <span className="font-normal">{order.from}</span></p>
                                <p className="font-bold">To: <span className="font-normal">{order.to}</span></p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    );
}

export default GeneralInfo;