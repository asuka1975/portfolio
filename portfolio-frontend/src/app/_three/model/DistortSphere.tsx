"use client"

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { MeshDistortMaterial } from '@react-three/drei';

type Props = {
    position: [x: number, y: number, z: number];
    scale: number
};

export default function DistortSphere(props: Props) {
    const mesh = useRef<Mesh>(null!);
    useFrame(() => (mesh.current.rotation.y -= 0.003));

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={props.scale}
        >
            <sphereGeometry args={[1, 12, 12]} />
            <MeshDistortMaterial 
                color={"0xBcB7AD"}
                roughness={0.1}
                metalness={0}
                bumpScale={0.005}
                clearcoat={1}
                clearcoatRoughness={1}
                radius={1}
                distort={0.9}
                wireframe={true}
            />
        </mesh>
    );
};