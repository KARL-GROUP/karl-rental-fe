export interface Sidebar{
    text: string,
    icon: string,
    path: string
}

import DashboardIcon from "@/components/svgs/DashboardIcon"
import Profile from "@/components/svgs/Profile"


export const sidebarItem: Sidebar[] = [
    {
        text: "Dashboard",
        icon: "/assets/car.svg",
        path: "/Dashboard"
    },
    {
        text: "Add Car",
        icon: `<Profile />`,
        path: "/AddCar"
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