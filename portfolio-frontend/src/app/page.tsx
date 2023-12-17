"use client"

import { useCallback, useRef, useState } from "react";
import Header from "./_component/molecule/Header";
import BackgroundAnimation from "./_component/organism/BackgroundAnimation";

export default function Home() {
    const [mainNode, setMainNode] = useState<HTMLElement>();
    const refChanged = useCallback((node: HTMLElement) => {
        setMainNode(node);
    }, []);

    return (
        <main className="h-screen" ref={refChanged}>
            <BackgroundAnimation className="z-10" parent={mainNode} />
            <Header className="z-20" />
            <div className="absolute hidden-scrollbar z-10 w-screen top-[calc(30px+6em)] h-[calc(100vh-30px-6em)] overflow-scroll">
                <div className="w-10">
                    {[...new Array(100)].map((_, i) => <div key={i}>sample</div>)}
                </div>
            </div>
        </main>
    )
}
