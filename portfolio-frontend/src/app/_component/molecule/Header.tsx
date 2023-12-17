import Image from "next/image"
import MenuButton from "../atom/MenuButton"
import Subtext from "../atom/Subtext"
import Link from "next/link"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type Props = {

} & ComponentProps<"header">

export default function Header({ className, ...props }: Props) {
    const mergedClassName = twMerge("flex justify-between fixed w-screen p-4 bg-color5", className);

    return (
        <header className={mergedClassName}>
            <div className="flex flex-col gap-12">
                <Subtext>asuka1975のエンジニアポートフォリオ</Subtext>

                <Image className="bg-color4 text-color4" width={180} height={30} src="logo.svg" alt="asuka1975's logo" />
            </div>
            <div>
                <MenuButton className="peer w-8 h-8" />
                <div className="fixed overflow-hidden bg-color5 bottom-0 left-0 w-screen h-0 peer-active:h-[calc(100vh-30px-6em)] peer-aria-[checked=true]:h-[calc(100vh-30px-6em)] transition-all duration-500">
                    <div className="flex flex-col gap-12 px-[25%] py-8">
                        <div className="block py-8"><Link href="/" className="absolute text-color4 text-6xl hover:text-7xl transition-all duration-300">HOME</Link></div>
                        <div className="block py-8"><Link href="/" className="absolute text-color4 text-6xl hover:text-7xl transition-all duration-300">ABOUT</Link></div>
                        <div className="block py-8"><Link href="/" className="absolute text-color4 text-6xl hover:text-7xl transition-all duration-300">WORK</Link></div>
                        <div className="block py-8"><Link href="/" className="absolute text-color4 text-6xl hover:text-7xl transition-all duration-300">BLOG</Link></div>
                        <div className="block py-8"><Link href="/" className="absolute text-color4 text-6xl hover:text-7xl transition-all duration-300">CONTACT</Link></div>
                    </div>
                </div>
            </div>
        </header>
    )
}