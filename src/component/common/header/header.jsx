import { useState } from "react";
import { Logo, Tyyam } from "../../../assets/images"
import { Link } from "react-router-dom";
import { DropdownIcon, NotificationIcon, SearchIcon } from "../../../assets/icon";

export default function Header({ onMobileToggle }) {
    const [open, setOpen] = useState(false);
    const [DropdownOpen, setDropdown] = useState(false);
    const DROPDWON_LINKS = [
        {
            id: 1, text: "Help", path: "#",
        },
        {
            id: 2, text: "Settings", path: "#",
        },
        {
            id: 3, text: "Sign out", path: "#",
        }
    ]
    return (
        <header className="sticky top-0 bg-white border-b border-[#E0E0E0] py-3 md:py-5 ps-4 md:ps-7 pe-5 z-30 transition-all duration-300 left-64" style={{ right: "0" }}>
            <div className="flex gap-2">
                <button
                    title="Toggle sidebar"
                    aria-label="Toggle sidebar"
                    onClick={onMobileToggle}
                    className="md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                <div className="flex w-full justify-between">
                    <div className="flex gap-20 items-center">
                        <div className="">
                            <img src={Logo} alt="logo" className="" width={140} height={30} />
                        </div>
                        <div className="hidden md:grid">
                            <div className="bg-[#E0E7EE] rounded-xl px-4 py-3  flex items-center gap-5">
                                <SearchIcon />
                                <input type="text" className="text-[#4A6572] text-base font-semibold outline-none" placeholder="search" />
                            </div>

                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="relative inline-block text-left">
                            <button

                                aria-label="Open Operations View"
                                onClick={() => setDropdown(!DropdownOpen)}
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition">
                                <div className="cursor-pointer">
                                    <NotificationIcon />
                                </div>
                            </button>

                            {DropdownOpen && (
                                <div className="absolute cursor-pointer right-0 mt-2 w-44 rounded-lg bg-white shadow-lg border">
                                    <ul className="py-1 text-sm text-gray-700">
                                        {DROPDWON_LINKS.map((card =>
                                            <li key={card.id}>
                                                <Link
                                                    to="#"
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    {card.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="relative inline-block text-left">
                            <div className="flex items-center">
                                <button

                                    aria-label="Open Operations View"
                                    onClick={() => setOpen(!open)}
                                    className="flex items-center cursor-pointer gap-3 hover:bg-gray-100 transition"
                                >
                                    <div className="relative inline-block">
                                        <img src={Tyyam} alt="tyyam" className="" width={51} height={51} loading="lazy" />
                                    </div>
                                    <div className="text-left hidden md:grid">
                                        <span className="text-[#17181A] text-lg font-semibold">
                                            Mahmoud Tayyem
                                        </span>
                                        <p className="text-base text-[#4A6572] font-semibold">admin</p>
                                    </div>
                                    <div className="hidden md:block">
                                        <DropdownIcon />
                                    </div>
                                </button>

                                {open && (
                                    <div aria-label="Toggle sidebar" className="absolute right-0 top-16 mt-2 w-44 rounded-lg bg-white shadow-lg border">
                                        <ul className="py-1 text-sm text-gray-700">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    Help
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-red-600 hover:bg-red-50"
                                                >
                                                    Sign out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}