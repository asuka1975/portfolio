import MultipleDistortSphereScene from "@/app/_three/scene/MultipleDistortSphereScene"

export default function BackgroundAnimation() {
    return (
        <div className="fixed w-screen h-screen left-0 top-0 -z-10">
            <MultipleDistortSphereScene />
        </div>
    )
}
