import Image from "next/image"
import MenuButton from "../atom/MenuButton"
import Subtext from "../atom/Subtext"

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
                <MenuButton className="w-8 h-8" />
            </div>
        </header>
    )
}