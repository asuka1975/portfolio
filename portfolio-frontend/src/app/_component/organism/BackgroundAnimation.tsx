import MultipleDistortSphereScene from "@/app/_three/scene/MultipleDistortSphereScene"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
    parent: any
} & ComponentProps<"div">

export default function BackgroundAnimation({ className, parent, ...props }: Props) {
    const mergedClassName = twMerge("fixed w-screen h-screen left-0 top-0", className)

    return (
        <div className={mergedClassName}>
            <MultipleDistortSphereScene parent={parent} />
        </div>
    )
}
