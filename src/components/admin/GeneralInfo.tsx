const GeneralInfo = () => {
    const recentOrders =[
        {
            plate: "RAC00DA",
            status: "Pending",
            from : "01/01/2022",
            to: "01/01/2022"
        },
        {
            plate: "RAC00DA",
            status: "Pending",
            from : "01/01/2022",
            to: "01/01/2022"
        },
        {
            plate: "RAC00DA",
            status: "Pending",
            from : "01/01/2022",
            to: "01/01/2022"
        },
        {
            plate: "RAC00DA",
            status: "Pending",
            from : "01/01/2022",
            to: "01/01/2022"
        },
        {
            plate: "RAC00DA",
            status: "Pending",
            from : "01/01/2022",
            to: "01/01/2022"
        },
        {
            plate: "RAC00DA",
            status: "Pending",
            from : "01/01/2022",
            to: "01/01/2022"
        },
    ]
    return ( 
        <>
        <section>
            <p>Recent Orders</p>
            <div>
                {recentOrders.map((order, index) => {
                    return(
                        <div className="bg-white py-5 px-5">
                            <h1>Car name</h1>
                            <p>Plate: {order.plate}</p>
                            <p>Status: {order.status}</p>
                            <p>From: {order.from}</p>
                            <p>To: {order.to}</p>
                            </div>
                    )
                })}
            </div>
        </section>
        </>
     );
}
 
export default GeneralInfo;