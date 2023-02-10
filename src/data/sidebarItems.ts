export interface Sidebar{
    text: string,
    icon: string,
    path: string
}

import DashboardIcon from "@/components/svgs/DashboardIcon"




export const sidebarItem: Sidebar[] = [
    {
        text: "Dashboard",
        icon: "/assets/search.png",
        path: "/dashboard"
    },
    {
        text: "Add Car",
        icon: "/assets/search.png",
        path: "/addCar"
    },
    {
        text: "View all cars",
        icon: "/assets/search.png",
        path: "/"

    },
    {
        text: "Requests",
        icon: "/assets/search.png",
        path: "/"

    },
    
]