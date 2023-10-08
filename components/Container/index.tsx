"use client"

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="w-[95%] px-7 md:px-0 mx-auto">
            {children}
        </div>
    )
}

export default Container