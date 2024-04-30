import React, { useState } from "react";

import { MdOutlineDashboard } from "react-icons/md";
import { IoFlagSharp } from "react-icons/io5";
import { FaSailboat } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";
import { FaTools } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { HiMenuAlt1 } from "react-icons/hi";

import { Link } from "react-router-dom";
import Hero from "./Hero";

const Sidebar = () => {
    const menus = [
        { name: "Marketing Pass", link: "/", icon: MdOutlineDashboard },
        { name: "MyBrands", link: "/", icon: IoFlagSharp },
        { name: "LeadStream", link: "/", icon: FaSailboat },
        { name: "MyMarketingCRM", link: "/", icon: SiCoinmarketcap, margin: true },
        { name: "Tools", link: "/", icon: FaTools },
        { name: "Data", link: "/", icon: FaDatabase, margin: true },
        { name: "Settings", link: "/", icon: IoMdSettings },
    ];
    const [open, setOpen] = useState(false);

    return (
        <section className="flex gap-1 ">
            <div
                className={`absolute top-0 left-0 bg-[#0e0e0e] h-[1800px] w-16 duration-500 text-gray-100 px-4 ${open ? "w-72" : ""
                    } z-10`}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <div className="py-3 flex justify-end cursor-pointer">
                    {open ? (
                        <div className="flex justify-center ">

                            <img src="assets/SalesGuy.svg" alt="Sales Guy" className="w-[40px]" />
                        <h2 className="text-white font-bold whitespace-nowrap text-center mt-3 text-[25px] font-serif px-2">MyMarketingApp</h2>

                            
                        </div>
                    ) : (
                        <img src="assets/SalesGuy.svg" alt="Sales Guy" />
                    )}
                </div>
                <div className="mt-4 flex flex-col gap-4 relative">
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu?.link}
                            key={i}
                            className={` ${menu?.margin && "mt-5"} group flex items-center text-sm  gap-3.5 font-bold p-2 hover:bg-gray-800 rounded-md `}
                        >
                            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                            <h2
                                style={{
                                    transitionDelay: `${i + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                    }`}
                            >
                                {menu?.name}
                            </h2>
                            <h2
                                className={`${open && "hidden"
                                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                            >
                                {menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
            <div
                className="text-xl text-gray-900 font-semibold relative ml-[60px]"
                style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('assets/Map.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "",
                    height:"1800px",
                }}
            >
                {/* Content over the background image */}

                <Hero />

            </div>
        </section>
    );
};

export default Sidebar;
