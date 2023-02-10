import { sidebarItem } from "@/data/sidebarItems";
import Link from "next/link";
import Image from "next/image";
import profile from "../../../../public/assets/profile.png"
import { useState } from "react";
import { motion } from "framer-motion";

export default function Sidebar({show, handleShow}:{show: boolean; handleShow: () => void;}) {

    return (
        <>
            <motion.section className="flex w-full h-screen">
                <section className={`transition-all ease-in duration-300 z-50  ${show ? "w-80 bg-primary-purple flex flex-col gap-5  h-screen text-white py-12 px-4 xl:px-10" : "w-0 opacity-0"}`}>
                <h1 className="font-bold text-3xl mb-10">Karla Group</h1>
                    {sidebarItem.map((sidebarItem, index) => {
                        return (
                            <ul key={index} className=" xl:pb-4 ">
                                <li>
                                    <Link className="flex flex-col xl:flex xl:flex-row xl:items-center gap-2 xl:gap-4" href={sidebarItem.path}>
                                        <Image className="w-8 h-8" src={sidebarItem.icon} alt="icon" width={100} height={100} />
                                        <label className="text-lg">{sidebarItem.text}</label>
                                    </Link>
                                </li>
                            </ul>

                        )
                    })}
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
