import { sidebarItem } from "@/data/sidebarItems";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
    return (
        <>
        <section className="bg-primary-purple flex flex-col gap-5 w-80 h-screen text-white py-20 px-10">
            {sidebarItem.map((sidebarItem) => {
                return (
                    <ul className="border">
                        <li>
                            <Link className="flex items-center gap-4" href={sidebarItem.path}>
                                <Image className="w-8 h-8" src={sidebarItem.icon} alt="icon" width={100} height={100} />
                                <label>{sidebarItem.text}</label>
                            </Link>
                        </li>
                    </ul>

                )
            })}
            </section>

        </>
    );
}

export default Sidebar;