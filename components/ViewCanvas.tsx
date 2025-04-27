"use client";

import { Canvas } from "@react-three/fiber";
import React from "react";

export default function ViewCanvas() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
}
