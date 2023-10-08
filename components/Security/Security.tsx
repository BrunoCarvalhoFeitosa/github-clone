"use client"
import { useState } from "react"
import {motion} from "framer-motion"
import HoverCard from "@/components/Productivity/HoverCard"
import Projects from "@/components/Security/Projects"

const Security = () => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [hovered1, setHovered1] = useState<boolean>(false)
    const [hovered2, setHovered2] = useState<boolean>(false)

    const container = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4
            }
        }
    }

    const item = {
        hidden: {
            opacity: 0,
            scale: 0.8
        },
        show: {
            opacity: 1,
            scale: 1
        }
    }

    return (
        <div className="max-w-[1280px] mx-auto">
            <div className="flex space-x-3 md:space-x-10 md:pl-7">
                <div className="flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="relative"
                    >
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            version="1.1"
                            width="24"
                            height="24"
                            fill="currentColor"
                            data-view-component="true"
                            className="octicon octicon-lock text-white"
                        >
                            <path d="M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9Zm-1.5 2.5v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Zm3-4.25V9h9V7.25c0-2.67-1.922-4.75-4.5-4.75-2.578 0-4.5 2.08-4.5 4.75Z" />
                        </svg>
                        <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-3 z-3" />
                    </motion.div>
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ delay: 0.8 }}
                        className="h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#abb4ff] via-[#797ef9] to-transparent"
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, type: "tween" }}
                    className="md:w-10/12 mb-24"
                >
                    <div>
                        <h2 className="text-[20px] md:text-2xl mb-7 font-medium text-white">
                            Security
                        </h2>
                        <h3 className="text-[28px] md:text-[40px] lg:text-5xl max-md:leading-8 max-lg:leading-10 mb-7 font-medium text-white">
                            <p className="text-[#939AFF]">
                                Embed security into the developer workflow.
                            </p>
                            With GitHub, developers can secure their code in minutes and organizations can automatically comply with regulations.
                        </h3>
                    </div>
                </motion.div>
            </div>
            <HoverCard backgroundColor="#939AFF" direction="" left="">
                <div className="flex flex-col mx-auto w-10/12">
                    <div className="text-[#7D8590] p-6">
                        <div className="font-medium">
                            cmake.yml
                        </div>
                        <div className="text=[12px]">
                            on: push
                        </div>
                    </div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        className="relative flex flex-1 flex-col md:flex-row justify-between items-center lg:py-10 w-10/12 mx-auto text-[17px]"
                    >
                        <motion.div
                            variants={item}
                            transition={{ type: "tween" }}
                            className="animate w-full"
                        >
                            <div
                                className="p-6 md:mt-8 mb-10 box-shadow-mktg-xl rounded-md"
                                style={{
                                    background: "rgba(235,245,255,0.2)"
                                }}
                            >
                                <ul className="-mb-6">
                                    <li className="mb-6 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <svg
                                                aria-hidden="true"
                                                height="24"
                                                fill="#3fb950"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                                width="24"
                                                data-view-component="true"
                                                className="octicon octicon-check-circle-fill color-fg-success mr-2"
                                            >
                                                <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z" />
                                            </svg>
                                            <span className="font-medium text-white">
                                                Build
                                            </span>
                                        </div>
                                        <span className="text-[14px] text-[#7d8590]">
                                            1m 21s
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={item}
                            transition={{ type: "tween" }}
                            className=" max-md:rotate-90 flex items-center z-[1]"
                        >
                            <div className="inline-block p-1 rounded-full bg-[#6E7681]" style={{ boxShadow: "0 0 0 2px #444D56" }} />
                            <div style={{ width: "37px", height: "2px", background: "#D1D5DA" }} />
                            <div className="inline-block p-1 rounded-full bg-[#6E7681]" style={{ boxShadow: "0 0 0 2px #444D56" }} />
                        </motion.div>
                        <motion.div
                            variants={item}
                            transition={{ type: "tween" }}
                            className="w-full animate"
                        >
                            <div
                                className="inline-block pt-2 pb-1 px-6 text-[15px] font-medium text-white rounded-t-md"
                                style={{ background: "rgba(235,245,255,0.2)" }}
                                >
                                Steps
                            </div>
                            <div
                                className="p-6 mb-10 box-shadow-mktg-xl rounded-tl-none rounded-md"
                                style={{ background: "rgba(235,245,255,0.2)" }}
                            >
                                <ul className="-mb-6">
                                    <li className="mb-6 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <svg
                                                aria-hidden="true"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                                width="24"
                                                height="24"
                                                fill="#3fb950"
                                                data-view-component="true"
                                                className="octicon octicon-check-circle-fill color-fg-success mr-2"
                                            >
                                                <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z" />
                                            </svg>
                                            <span className="font-medium text-white">
                                                Initialize CodeQL
                                            </span>
                                        </div>
                                        <span className="text-[14px] text-[#7d8590]">
                                            1m 42s
                                        </span>
                                    </li>
                                    <li className="mb-6 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <svg
                                                aria-hidden="true"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                                width="24"
                                                height="24"
                                                fill="#3fb950"
                                                data-view-component="true"
                                                className="octicon octicon-check-circle-fill color-fg-success mr-2"
                                            >
                                                <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z" />
                                            </svg>
                                            <span className="font-medium text-white">
                                                Autobuild
                                            </span>
                                        </div>
                                        <span className="text-[14px] text-[#7d8590]">
                                            1m 24s
                                        </span>
                                    </li>
                                    <li className="mb-6 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <svg
                                                aria-hidden="true"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                                width="24"
                                                height="24"
                                                fill="#3fb950"
                                                data-view-component="true"
                                                className="octicon octicon-check-circle-fill color-fg-success mr-2"
                                            >
                                                <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z" />
                                            </svg>
                                            <span className="font-medium text-white">
                                                Perform CodeQL Analyses
                                            </span>
                                        </div>
                                        <span className="text-[14px] text-[#7d8590]">
                                            1m 36s
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </HoverCard>
            <Projects />
            <div className="relative z-[1]">
                <HoverCard
                    backgroundColor="#939aff"
                    direction=""
                    left="0"
                >
                    <div className="overflow-auto md:flex flex-col md:space-y-20 flex-1 py-20 md:p-10 p-5 my-6 justify-between md:min-w-[400px]">
                        <p className="text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
                            <span className="text-white font-medium mr-2">
                                Secret scanning
                            </span>
                            automatically looks for partner patterns and prevents fraudulent use of accidentally committed secrets.
                        </p>
                        <div>
                            <a
                                href=""
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                                className="py-1 inline-block text-xl text-white font-semibold outline-none"
                            >
                                Read about secret scanning 
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`mb-[2px] text-white transition inline-block ml-3 ease-in duration-300 ${hovered ? "translate-x-0 ": "-translate-x-1"}`}
                                    width="20"
                                    height="20"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                                    />
                                    <path
                                        className={`text-white transition ease-in duration-150 ${hovered ? "opacity-100" : "opacity-0"}`}
                                        stroke="currentColor"
                                        d="M1.75 8H11"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className={`${hovered ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`} />
                            </a>
                        </div>
                    </div>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{scale: 1, opacity: 1 }}
                        transition={{ type: "tween"}}
                        className="rounded-r-md overflow-hidden flex items-center"
                    >
                        <img
                            aria-hidden="true"
                            src="/images/github-sponsors.png"
                            alt="Secret scanning"
                            width="1288"
                            height="992"
                            loading="lazy"
                            decoding="async"
                            className="responsive js-build-in-item build-in-scale-fade build-in-animate origin-bottom-right"
                        />
                    </motion.div>
                </HoverCard>
            </div>
            <div className="flex flex-col md:flex-row gap-10 ">
                <HoverCard
                    backgroundColor="#939aff"
                    direction="flex-col"
                    left="0"
                >
                    <div className="md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32">
                        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
                            <span className="text-white font-semibold mr-2">
                                Dependabot
                            </span>
                            makes it easy to find and fix vulnerable dependencies in your supply chain.
                        </p>
                        <div>
                            <a
                                href=""
                                onMouseEnter={() => setHovered1(true)}
                                onMouseLeave={() => setHovered1(false)}
                                className="py-1 inline-block text-xl text-white font-semibold outline-none"
                            >
                                Explore Dependabot
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`mb-[2px] text-white transition inline-block ml-3 ease-in duration-300 ${hovered1 ? "translate-x-0 ": "-translate-x-1"}`}
                                    width="20"
                                    height="20"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                                    />
                                    <path
                                        className={`text-white transition ease-in duration-150 ${hovered1 ? "opacity-100" : "opacity-0"}`}
                                        stroke="currentColor"
                                        d="M1.75 8H11"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className={`${hovered1 ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`} />
                            </a>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-s-lg">
                        <img
                            aria-hidden="true"
                            src="https://github.githubassets.com/images/modules/site/home-campaign/illu-dependabot.png"
                            alt="Dependabot image"
                            width="1209"
                            height="890"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto js-build-in-item build-in-scale-fade build-in-animate"
                        />
                    </div>
                </HoverCard>
                <HoverCard
                    backgroundColor="#939aff"
                    direction="flex-col"
                    left="-400px"
                >
                    <div className="md:flex flex-col  flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 ">
                        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
                            <span className="text-white font-semibold mr-2">
                                Code scanning
                            </span>
                            is GitHub’s static code analysis tool that helps you remediate issues in your code.
                        </p>
                        <div>
                            <a
                                onMouseEnter={() => setHovered2(true)}
                                onMouseLeave={() => setHovered2(false)}
                                href=""
                                className="py-1 inline-block text-xl text-white font-semibold outline-none"
                            >
                                Download the latest SAST ebook
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`mb-[2px] text-white transition inline-block ml-3 ease-in duration-300 ${hovered2 ? "translate-x-0": "-translate-x-1"}`}
                                    width="20"
                                    height="20"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                                    />
                                    <path
                                        className={`text-white transition ease-in duration-150 ${hovered2 ? "opacity-100" : "opacity-0"}`}
                                        stroke="currentColor"
                                        d="M1.75 8H11"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className={`${hovered2 ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left transition ease-in duration-300 h-[2.5px] bg-white rounded-full`} />
                            </a>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-s-lg">
                        <img
                            aria-hidden="true"
                            src="https://github.githubassets.com/images/modules/site/home-campaign/illu-code-scanning.png"
                            alt="Code scanning image"
                            width="1208"
                            height="764"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto"
                        />
                    </div>
                </HoverCard>
            </div>
        </div>
    )
}

export default Security