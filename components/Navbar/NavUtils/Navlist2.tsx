"use client"
import { useState } from "react"
import Link from "next/link"

type Props = {
    main: string
    path: string
}

const Navlist2 = ({ main, path }: Props) => {
    const [focus, setFocus] = useState<boolean>(false)
    
    return (
        <Link
            href="#"
            onMouseEnter={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
            className={`flex  items-center ${focus ? "text-blue-600":"text-neutral-500"}`}
        >
            {main}
            <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="currentColor"
                version="1.1"
                data-view-component="true"
                className={`octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle ml-2 transition ease-in duration-150 ${focus ? " translate-x-0 text-blue-500opacity-100": " -translate-x-3 opacity-0"}`}
            >
                <path d={path} />
            </svg>
        </Link>
    )
}

export default Navlist2