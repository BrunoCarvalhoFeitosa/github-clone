"use client"
import { useState } from "react"
import Link from "next/link"
import Container from "@/components/Container"
import ProductNav from "@/components/Navbar/ProductNav"
import SolutionNav from "@/components/Navbar/SolutionNav"
import OpenSourceNav from "@/components/Navbar/OpenSourceNav"
import { BsGithub } from "react-icons/bs"

const Navbar = () => {
    const [showNav, setShowNav] = useState<boolean>(false)

    return (
        <Container>
            <div className="bg-transparent py-5 text-white">
                <div className="flex max-lg:justify-between max-lg:flex-row-reverse items-center">
                    <div className="flex justify-between items-center max-lg:w-full">
                        <div className="lg:hidden">
                            <Link
                                href=""
                                className="px-2 py-[6px] border rounded-md hover:text-neutral-400"
                            >
                                Sign up
                            </Link>
                        </div>
                        <div>
                            <Link href="">
                                <BsGithub className="text-4xl text-white" />
                            </Link>
                        </div>
                        <div>
                            <button
                                type="button"
                                onClick={() => setShowNav(!showNav)}
                                className="lg:hidden cursor-pointer"
                            >
                                <div className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white mb-1 ${showNav ? "rotate-45 translate-y-[1px] mb-0" : "rotate-0 mb-1"}`}></div>     
                                <div className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white mb-1 ${showNav ? "hidden mb-0" : "mb-1"}`}></div>     
                                <div className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white ${showNav ? "-rotate-45 mb-0" : "rotate-0"}`}></div>
                            </button>
                        </div>
                    </div>
                    <div className={`w-full flex max-lg:absolute transition ease-in duration-200 top-20 z-30 ${showNav ? "max-lg:translate-x-0 max-lg:scale-100" : "max-lg:max-h-0 max-lg:scale-y-50 max-lg:translate-y-1/4"}`}>
                        <div className="flex justify-between max-lg:flex-col lg:items-center max-sm:w-10/12 max-sm:mx-auto sm:ml-auto max-lg:w-[320px] lg:w-full max-lg:max-h-[500px] overflow-y-auto lg:mb-0 max-lg:bg-white max-lg:rounded-lg">
                            <nav className="mt-0 px-3 lg:px-6 text-[15.5px] mb-0 max-lg:py-10 max-lg:px-5">
                                <ul className="flex lg:items-center lg:space-x-2 max-lg:space-y-6 max-lg:flex-col max-lg:text-neutral-700 max-lg:text-xl max-lg:font-medium max-lg:h-auto overflow-y-auto">
                                    <ProductNav />
                                    <SolutionNav />
                                    <OpenSourceNav />
                                    <li>
                                        <a className="max-lg:font-semibold flex items-center p-1 hover:text-neutral-300 outline-none cursor-pointer">
                                            Pricing
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="lg:flex items-center lg:space-x-4 max-lg:flex-col py-2 px-3 mb-0 lg:mb-0 lg:px-0 text-left">
                                <div className="lg:flex mb-2 lg:mb-0 relative max-lg:mr-4">
                                    <input
                                        type="text"
                                        placeholder="Search or jump to..."
                                        className="glass max-lg:bg-neutral-50 w-[340px] h-[35px] max-lg:w-full lg:px-2 py-[3.5px] whitespace-nowrap placeholder:text-[14px] max-lg:placeholder:text-[16px] placeholder:pl-2 focus:z-10 focus:outline-none focus:bg-white focus:text-black border lg:border-neutral-500 max-lg:border-neutral-300 rounded-md text-[14px] font-medium"
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22" height="20" 
                                        aria-hidden="true"
                                        className="mr-1 absolute right-0 top-[7px] max-lg:hidden"
                                    >
                                        <path
                                            fill="none"
                                            stroke="#979A9C"
                                            opacity=".4"
                                            d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
                                        />
                                        <path
                                            fill="#979A9C"
                                            d="M11.8 6L8 15.1h-.9L10.8 6h1z"
                                        />
                                    </svg>
                                </div>
                                <div className="max-lg:flex justify-center max-lg:border-[1px] max-lg:mr-4 rounded-md max-lg:bg-neutral-800">
                                    <a
                                        href=""
                                        className="hover:text-neutral-400 max-lg:py-2 max-lg:text-[16px] max-lg:font-semibold outline-none"
                                    >
                                        Sign in
                                    </a>
                                </div>
                                <a
                                    href=""
                                    className="max-lg:hidden px-2 py-[5px] border-[1px] rounded-md hover:text-neutral-400 outline-none"
                                >
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Navbar