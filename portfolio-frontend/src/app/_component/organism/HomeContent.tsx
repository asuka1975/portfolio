import PageUnit from "../atom/PageUnit"
import ScrollIndicator from "../atom/ScrollIndicator"

type Props = {

}

export default function HomeContent({}: Props) {
    return (
        <div>
            <PageUnit className="flex flex-col gap-12 pt-[10%] px-[20%]">
                <div className="flex flex-col gap-4 text-8xl">
                    <span>OVER  </span>
                    <span> THE </span>
                    <span> TECHNOLOGY </span>
                </div>
                <div className="text-2xl pl-[0.19em]">
                    <span>技術の限界の、その先へ</span>
                </div>
                <div className="pt-20">
                    <ScrollIndicator />
                </div>
            </PageUnit>
            <PageUnit className="flex flex-col gap-12 pt-[10%] px-[20%]">
                <div className="grid grid-cols-2">
                    <div>

                    </div>
                    <div>
                        
                    </div>
                </div>
            </PageUnit>
        </div>
    )
}