import Image from "next/image"
import MenuButton from "../atom/MenuButton"
import Subtext from "../atom/Subtext"
import Link from "next/link"

type Props = {

}

export default function Header({}: Props) {
    return (
        <header className="flex justify-between p-4 bg-color5">
            <div className="flex flex-col gap-12">
                <Subtext>asuka1975のエンジニアポートフォリオ</Subtext>

                <Image className="bg-color4 text-color4" width={180} height={30} src="logo.svg" alt="asuka1975's logo" />
            </div>
            <div>
                <MenuButton className="peer w-8 h-8" />
                <div className="absolute overflow-hidden bg-color5 bottom-0 left-0 w-screen h-0 peer-active:h-[calc(100vh-30px-6em)] peer-aria-[toggled=true]:h-[calc(100vh-30px-6em)] transition-all duration-500">
                    <div className="flex flex-col gap-12 px-[25%] py-8">
                        <Link href="/" className="text-color4 text-6xl">about</Link>
                        <Link href="/" className="text-color4 text-6xl">work</Link>
                        <Link href="/" className="text-color4 text-6xl">blog</Link>
                        <Link href="/" className="text-color4 text-6xl">contact</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}