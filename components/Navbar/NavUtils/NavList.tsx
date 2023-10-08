"use client"
import { useState } from "react"
import Link from "next/link"

type Props = {
    main: string
    submain: string
    path: string
    path2: string
}

const Navlist = ({ main, submain, path, path2 }: Props) => {
    const [focus, setFocus] = useState<boolean>(false)

    return (
        <Link
            href=""
            onMouseEnter={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
            className="flex items-center space-x-3 py-3 cursor-pointer"
        >
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                version="1.1"
                data-view-component="true"
                className={`mr-3 transition ease-in duration-100 ${focus ? "text-blue-600": "text-neutral-500"}`}
            >
              <path d={path} />
              <path d={path2} />
            </svg>
            <div className={`${focus ? "text-blue-600": "text-neutral-500"} transition ease-in duration-100 text-[14px]`}>
                <div className={`font-semibold transition ease-in duration-100 ${focus ? "text-blue-600": "text-neutral-800"} text-base leading-5`}>
                    {main}
                </div>
                {submain}
            </div>
        </Link>
    )
}

export default Navlist