import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge";

type Props = {

} & ComponentProps<"button">

export default function MenuButton({ ...props }: Props) {
    const className = twMerge(props.className, "group grid grid-cols-2 grid-rows-2 gap-1 p-1 hover:bg-color4 hover:gap-2 hover:p-2 hover:-rotate-90 transition-all duration-300");

    return (
        <button className={className}>
            <div className="w-full h-full bg-color4 group-hover:bg-color5 transition duration-300" />
            <div className="w-full h-full bg-color4 group-hover:bg-color5 transition duration-300" />
            <div className="w-full h-full bg-color4 group-hover:bg-color5 transition duration-300" />
            <div className="w-full h-full bg-color4 group-hover:bg-color5 transition duration-300" />
        </button>
    )
}