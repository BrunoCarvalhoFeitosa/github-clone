import { useEffect, useState } from "react"
import { useSpring, animated } from "@react-spring/web"

type Props = {
    children: React.ReactNode
    backgroundColor: string
    direction: string
    left: string
}

const calc = (x: number, y: number) : [number, number, number] => [
    -(y-window.innerHeight/2)/360,
    (x-window.innerWidth/2)/360,
    1.02
]

const translate = (x: number, y: number, s:number): string => `perspective(900px) rotateX(${-x}deg) rotateY(${-y}deg)`

const HoverCard = ({ children, backgroundColor, direction, left }: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [cursorCoords, setCursorCoords] = useState({ x: 0, y: 0 })

    const [springProps, set] = useSpring(() => ({
        xys: [0,0,1],
        config: {
            mass: 5,
            tension: 6000,
            friction: 1000
        }
    }))

    useEffect(() => {
        const handleMousePosition = (event: MouseEvent) => {
            const { clientX: x, clientY: y } = event
            setCursorCoords({ x, y })
        }

        window.addEventListener("mousemove", handleMousePosition)

        return () => {
            window.removeEventListener("mousemove", handleMousePosition)
        }
    }, [])

    const calcTranslate = (
        coordinate: number,
        containerSize: number,
        itemSize: number
    ) => (
        typeof window !== "undefined"
            ? (coordinate / containerSize) * (containerSize - itemSize)
            : 0
    )
    
    const translateX = calcTranslate(
        cursorCoords.x, typeof window !== "undefined"
            ? window.innerWidth
            : 0, 600
    )
    
    const translateY = calcTranslate(
        cursorCoords.y, typeof window !== "undefined"
        ? window.innerHeight
        : 0, 500
    )
    

    const handleMouseMouve = (event: React.MouseEvent<HTMLDivElement>) => {
        const { clientX: x, clientY: y } = event

        set({ xys: calc(x,y) })
        setHovered(true)
    }

    const handleMouseLeave = () => {
        set({ xys: [0,0,1] })
        setHovered(false)
    }

    return (
        <animated.div
            onMouseMove={handleMouseMouve}
            onMouseLeave={handleMouseLeave}
            className="mb-3 md:mb-8 rounded-xl overflow-hidden"
            style={{
                transform: springProps.xys.to(translate)
            }}
        >
            <div className={`z-[1] relative bg-[#161b22] h-full py-[25px] border-[#30363d] border-[0.5px] rounded-xl shadow-xl lg:flex ${direction} justify-between`}>
                {children}
                <div
                    className={`absolute bottom-[50px] w-[500px] h-[1000px] border-none back z-[-1] ${hovered ? "opacity-95" : "opacity-0"}`}
                    style={{
                        transform: `translateX(${translateX}px) translateY(${2*translateY}px)`,
                        background: backgroundColor,
                        borderRadius: "100%",
                        mixBlendMode: "soft-light",
                        left: left,
                        willChange: "transform",
                        transition: "transform 0.2s cubic-bezier",
                    }}
                />
            </div>
        </animated.div>
    )
}

export default HoverCard