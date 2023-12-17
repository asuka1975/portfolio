import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge";

type Props = {
} & ComponentProps<"div">

export default function PageUnit({ children, className }: Props) {
    const mergedClassName = twMerge("min-h-[calc(100vh-30px-6em)]", className);
    return (
        <div className={mergedClassName}>
            {children}
        </div>
    )
}
