"use client"
import { useState } from "react"

const Hero = () => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [hovered1, setHovered1] = useState<boolean>(false)

    return (
        <div className="relative max-w-[1280px] lg:pt-32 md:px-10 mx-auto pt-16">
            <div>
                <img
                    src="https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp"
                    alt="Drone"
                    width="500"
                    height="326"
                    className="absolute hero-drone top-28 w-1/4 h-auto right-0 xl:right-0"
                />
            </div>
            <div className="flex">
                <div className="relative ">
                    <div>
                        <img
                            aria-hidden="true"
                            src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg"
                            alt="Lines"
                            width="437"
                            height="637"
                        />
                    </div>
                    <div className="mx-auto my-3">
                        <div className="relative z-[11]">
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                version="1.1"
                                width="24"
                                height="24"
                                fill="currentColor"
                                data-view-component="true"
                                className=" text-white"
                            >
                                <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z" />
                            </svg>
                            <span
                                className="absolute left-0 top-0 w-6 h-full home-campaign-glowing-icon-glow"
                                style={{ backgroundColor: "var(--mktg-accent-primary)", filter: "blur(17px)" }}
                            />
                        </div>
                    </div>
                    <div
                        style={{ background: "linear-gradient(#d2A8FF, #A371F7 10%, #196C2E 70%, #2EA043 80%, #56D364)", marginLeft:"11px" }}
                        className="max-md:w-[2px] w-[3px] h-[650px] max-sm:h-[750px] lg:h-[480px] line rounded-md"
                    />
                </div>
                <div className="absolute pt-32 mt-28 max-md:px-4 ml-4 md:ml-12">
                    <div className="relative md:top-20 mb-[24px]">
                        <a
                            href=""
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            className="border-[1px] border-neutral-600 copilot rounded-full inline-block outline-none"
                        >
                            <div className="flex items-center p-3 px-5">
                                <div>
                                    <img
                                        aria-hidden="true"
                                        src="https://github.githubassets.com/images/modules/site/universe/eyebrow-23@2x.png"
                                        alt="GitHub Universe"
                                        width="44"
                                        height="44"
                                        loading="lazy"
                                        decoding="async"
                                        className="d-block w-[44px] h-[44px] flex-grow-0 flex-shrink-0 mr-6 max-md:mr-3 scale-110"
                                    />
                                </div>
                                <div className="md:pr-5 pr-3 md:mr-2 flex-1">
                                    <div className="font-medium text-white text-[16px] max-md:text-[14px] leading-5">
                                        GitHub Universe: Dive in to AI, security, and DevEx
                                    </div>
                                    <div className="text-neutral-500 max-md:text-[14px] text-[16px]">
                                        Get your tickets now to join us on Nov. 8-9.
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`text-white transition ease-in duration-150 ${hovered ? "translate-x-0 ": "-translate-x-1"}`}
                                        width="16"
                                        height="16"
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
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <h1 className="md:mt-24 lg:mt-28 sm:mt-10 relative z-2 max-md:mb-5 text-[48px] md:text-[72px] max-sm:leading-[60px] md:leading-[80px] lg:text-[80px] font-semibold text-white">
                            Let&apos;s build from&nbsp;here
                        </h1>
                        <p className="relative z-1 text-[24px] md:text-[28px]  lg:text-[32px] leading-[30px] md:leading-[36px] lg:leading-[44px] mb-5 md:mb-12 md:10/12  lg:w-9/12 text-[#7d8590]">
                            The AI-powered developer platform to build, scale, and deliver secure software.
                        </p>
                    </div>
                    <div className="flex lg:w-11/12 max-lg:flex-col">
                        <form action="">
                            <div className="grid lg:grid-rows-2 lg:grid-cols-2">
                            <dl>
                                <dd>
                                    <input
                                        type="email"
                                        name="user_email"
                                        id="user_email"
                                        autoComplete="off"
                                        spellCheck="false"
                                        className="h-12 focus:outline-none max-md:rounded-md md:rounded-s-md right-0 w-full placeholder:text-[16px] pl-3"
                                        placeholder="Email address"
                                    />
                                </dd>
                            </dl>
                            <button type="button" className="mb-10 md:mb-0 py-3 w-full home-campaign-signup-button text-[16px] max-md:rounded-md md:rounded-e-md text-white font-semibold">
                                Sign up for GitHub
                            </button>
                            </div>
                        </form>
                        <span className="hidden lg:block border-t-[1px] md:border-l-[1px] border-neutral-700 md:mx-10 mb-3 md:mb-0 lg:h-[50px]" />
                        <a
                            href=""
                            onMouseEnter={() => setHovered1(true)}
                            onMouseLeave={() => setHovered1(false)}
                            className="flex items-center w-full md:w-auto lg:h-[50px] justify-center text-[16px] py-3 px-5 md:mt-8 lg:mt-0 rounded-md border-[#ae88f9] border-[1.5px] text-white outline-none"
                        >
                            Start a free enterprise trial
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`arrow-symbol-mktg text-white ml-3 transition ease-in duration-150 ${hovered1 ? "translate-x-0 ": "-translate-x-1"}`}
                                width="20"
                                height="20"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    fill="currentColor"
                                    d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 ${hovered1 ? "opacity-100" : "opacity-0"}`}
                                    stroke="currentColor"
                                    d="M1.75 8H11"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="md:my-32 my-24">
                        <p className="text-[16px] leading-[24px] text-[#7d8590]">
                            Trusted by the world&apos;s leading&nbsp;organizations&nbsp;↘︎
                        </p>
                        <div className="flex flex-wrap justify-between items-center">
                            <img
                                src="https://github.githubassets.com/images/modules/site/home-campaign/logos/stripe.svg"
                                alt="Stripe logo"
                                height="44"
                                className="my-3 scale-90"
                            />
                            <img
                                src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pinterest.svg"
                                alt="Pinterest logo"
                                height="44"
                                className="my-3 scale-90"
                            />
                            <img
                                src="https://github.githubassets.com/images/modules/site/home-campaign/logos/kpmg.svg"
                                alt="KPMG logo"
                                height="44"
                                className="my-3 scale-90"
                            />
                            <img
                                src="https://github.githubassets.com/images/modules/site/home-campaign/logos/mercedes.svg"
                                alt="Mercedes-Benz logo"
                                height="44"
                                className="my-3 w-[200px]"
                            />
                            <img
                                src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pg.svg"
                                alt="P&amp;G logo"
                                height="32"
                                className="my-3 scale-90"
                            />
                            <img
                                src="https://github.githubassets.com/images/modules/site/home-campaign/logos/telus.svg"
                                alt="Telus logo"
                                height="32"
                                className="my-3 scale-90"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero