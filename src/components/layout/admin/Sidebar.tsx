import { sidebarItem } from "@/data/sidebarItems";
import Link from "next/link";
import Image from "next/image";
import profile from "../../../../public/assets/profile.png"
import { useState } from "react";
import { motion } from "framer-motion";
import Profile from "@/components/svgs/Profile";
import Dashboard from "@/pages/dashboard";

export default function Sidebar({ show, handleShow }: { show: boolean; handleShow: () => void; }) {

    return (
        <>
            <motion.section className="flex w-full h-screen">
                <section className={`transition-all ease-in duration-300 z-50  ${show ? "w-80 bg-primary-purple flex flex-col gap-5  h-screen text-white py-12 px-4 xl:px-10" : "w-0 opacity-0"}`}>
                    <h1 className="font-bold text-3xl mb-10">Karla Group</h1>
                    <ul className="flex flex-col gap-5">
                        <li>
                            <Link className="flex flex-col xl:flex xl:flex-row xl:items-center gap-2 xl:gap-4" href="/dashboard">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                                    <path stroke="#ffffff" stroke-width="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5ZM14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5ZM4 16a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3ZM14 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6Z" />
                                </svg>
                                <label className="text-lg">Dashboard</label>
                            </Link>
                        </li>
                        <li>
                        <Link className="flex flex-col xl:flex xl:flex-row xl:items-center gap-2 xl:gap-4" href="/dashboard">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13H8M2 9L4 10L5.27064 6.18807C5.53292 5.40125 5.66405 5.00784 5.90729 4.71698C6.12208 4.46013 6.39792 4.26132 6.70951 4.13878C7.06236 4 7.47705 4 8.30643 4H15.6936C16.523 4 16.9376 4 17.2905 4.13878C17.6021 4.26132 17.8779 4.46013 18.0927 4.71698C18.3359 5.00784 18.4671 5.40125 18.7294 6.18807L20 10L22 9M16 13H19M6.8 10H17.2C18.8802 10 19.7202 10 20.362 10.327C20.9265 10.6146 21.3854 11.0735 21.673 11.638C22 12.2798 22 13.1198 22 14.8V17.5C22 17.9647 22 18.197 21.9616 18.3902C21.8038 19.1836 21.1836 19.8038 20.3902 19.9616C20.197 20 19.9647 20 19.5 20H19C17.8954 20 17 19.1046 17 18C17 17.7239 16.7761 17.5 16.5 17.5H7.5C7.22386 17.5 7 17.7239 7 18C7 19.1046 6.10457 20 5 20H4.5C4.03534 20 3.80302 20 3.60982 19.9616C2.81644 19.8038 2.19624 19.1836 2.03843 18.3902C2 18.197 2 17.9647 2 17.5V14.8C2 13.1198 2 12.2798 2.32698 11.638C2.6146 11.0735 3.07354 10.6146 3.63803 10.327C4.27976 10 5.11984 10 6.8 10Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        <label className="text-lg">All Cars</label>
                    </Link>
                        </li>
                        <li>
                        <Link className="flex flex-col xl:flex xl:flex-row xl:items-center gap-2 xl:gap-4" href="/dashboard">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <path stroke="#ffffff" stroke-width="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5ZM14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5ZM4 16a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3ZM14 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6Z" />
                        </svg>
                        <label className="text-lg">Orders</label>
                    </Link>
                        </li>
                        <li>
                        <Link className="flex flex-col xl:flex xl:flex-row xl:items-center gap-2 xl:gap-4" href="/dashboard">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <path stroke="#ffffff" stroke-width="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5ZM14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5ZM4 16a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3ZM14 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6Z" />
                        </svg>
                        <label className="text-lg">Terms & Conditions</label>
                    </Link>
                        </li>
                    </ul>



                </section>
                <section className="w-full flex items-center justify-between px-0 xl:px-44 h-20 py-16 border-b border-gray-300">
                    <button onClick={handleShow}>Close</button>

                    <p>Home</p>
                    <div className="w-1/2">
                        <input className="w-full py-3 px-5 shadow rounded-lg outline-none" placeholder="Search for a car" />
                    </div>

                    <div className="flex gap-4 items-center">
                        <p className="font-semibold">Emile K </p>
                        <Image className="w-12 h-12 rounded-full" src={profile} alt="profile" width={100} height={100} />
                    </div>

                </section>

            </motion.section>


        </>
    );
}
