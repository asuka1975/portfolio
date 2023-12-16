"use client"

import { Canvas } from '@react-three/fiber';
import { DepthOfField, Noise, Vignette, EffectComposer } from '@react-three/postprocessing';
import DistortSphere from '@/app/_three/model/DistortSphere';
import Rig from '@/app/_three/action/Rig';
import { useMemo } from 'react';

export default function BackgroundAnimation() {
    const spheres = useMemo(() => [
        [-2, -1, -5],
        [100, 0, -120],
        [-25, -5, -30],
        [30, 30, -80],
        [20, -8, -20]
    ], [])
    
    return (
        <Canvas>
            <ambientLight />
            <fog attach="fog" color={"#F2F2F2"} near={1} far={220} />
            <pointLight position={[10, 10, 10]} />
            <color attach={"background"} args={["#F2F2F2"]} />
            {spheres.map((pos, i) => <DistortSphere key={i} position={[pos[0], pos[1], pos[2]]} scale={4} />)}
            <Rig />
            <EffectComposer multisampling={0} disableNormalPass={false}>
                <DepthOfField
                focusDistance={-10}
                focalLength={0.02}
                bokehScale={2}
                height={480}
                />
                <Noise opacity={0.02} />
                <Vignette eskil={false} offset={0.1} darkness={0.3} />
            </EffectComposer>
        </Canvas>
    )
}