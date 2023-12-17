type Props = {

}

export default function ScrollIndicator({}: Props) {
    return (
        <div>
            <section>
                <p className="[writing-mode:vertical-rl] text-xs">SCROLL</p>
            </section>
            <div className="p-[0.5em]">
                <div className="w-[1px] h-24 overflow-hidden">
                    <div className="relative w-1 h-24 top-[-6rem] bg-color5 animate-scroll-indicator"></div>
                </div>
            </div>
        </div>
    )
}