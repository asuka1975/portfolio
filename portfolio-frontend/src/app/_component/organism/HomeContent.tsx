import Heading from "../atom/Heading"
import PageUnit from "../atom/PageUnit"
import ScrollIndicator from "../atom/ScrollIndicator"
import TimelineTick from "../atom/TimelineTick"

type Props = {

}

export default function HomeContent({}: Props) {
    return (
        <div className="flex flex-col gap-12">
            <PageUnit className="flex flex-col gap-12 pt-[10%] px-[20%]">
                <div className="flex flex-col gap-4 text-8xl">
                    <span>OVER  </span>
                    <span> THE </span>
                    <span> TECHNOLOGY </span>
                </div>
                <div className="text-2xl pl-[0.19em]">
                    <span>技術の限界の、その先へ</span>
                </div>
                <div className="pb-0">
                    <div className="relative top-10">
                        <ScrollIndicator />
                    </div>
                </div>
            </PageUnit>
            <PageUnit className="flex flex-col gap-12 pt-[5%] px-[20%]">
                <div className="grid grid-cols-2">
                    <div>
                        <Heading title="ABOUT" />
                    </div>
                    <div>
                        <TimelineTick />
                    </div>
                </div>
            </PageUnit>
        </div>
    )
}