"use client"

import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

export default function Rig({ v = new Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.pointer.x / 2, state.pointer.y / 2, 0), 0.05)
  })
};