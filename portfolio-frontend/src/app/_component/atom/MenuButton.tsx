"use client"

import { ComponentProps, useState } from "react"
import { twMerge } from "tailwind-merge";

type Props = {

} & ComponentProps<"button">

export default function MenuButton({ ...props }: Props) {
    const [toggled, setToggled] = useState<boolean>(false);
    const className = twMerge(props.className, "group grid grid-cols-2 grid-rows-2 gap-1 p-1 hover:bg-color4 aria-[checked=true]:bg-color4 hover:gap-2 aria-[checked=true]:gap-2 hover:p-2 aria-[checked=true]:p-2 hover:-rotate-90 aria-[checked=true]:-rotate-90 transition-all duration-300");

    return (
        <button className={className} aria-checked={`${toggled}`} onClick={() => setToggled(v => !v)}>
            <div className="w-full h-full bg-color4 group-hover:bg-color5 group-aria-[checked=true]:bg-color5 transition duration-300" />
            <div className="w-full h-full bg-color4 group-hover:bg-color5 group-aria-[checked=true]:bg-color5 transition duration-300" />
            <div className="w-full h-full bg-color4 group-hover:bg-color5 group-aria-[checked=true]:bg-color5 transition duration-300" />
            <div className="w-full h-full bg-color4 group-hover:bg-color5 group-aria-[checked=true]:bg-color5 transition duration-300" />
        </button>
    )
}