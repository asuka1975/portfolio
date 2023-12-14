"use client"

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { DepthOfField, Bloom, Noise, Vignette, EffectComposer } from '@react-three/postprocessing';
import { Mesh, Fog, Color } from 'three';
import { MeshDistortMaterial } from '@react-three/drei';


type SphereProps = {
    position: [x: number, y: number, z: number];
    scale: number
};

const Sphere: React.FC<SphereProps> = (props) => {
    const mesh = useRef<Mesh>(null!);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    useFrame(() => (mesh.current.rotation.y -= 0.005));

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={props.scale}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <sphereGeometry args={[1, 12, 12]} />
            <meshBasicMaterial wireframe={true} color={0xEEEEEE} />
        </mesh>
    );
};

export default function BackgroundAnimation() {
    return (
        <div className="fixed w-screen h-screen z-0">
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <color attach={"background"} args={["#F2F2F2"]} />
                <Sphere position={[-2, 0, 0]} scale={4} />
                <Sphere position={[3, 0, -1]} scale={4} />
                <EffectComposer>
                    <DepthOfField  />
                    {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
                    <Noise opacity={0.02} />
                    <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
                </EffectComposer>
            </Canvas>
        </div>
    )
}
