"use client";

// import { Environment } from "@react-three/drei";
// import FloatingCan from "./FloatingCan";
import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

// import { Perf } from "r3f-perf"

const Loader = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Loader),
  { ssr: false },
);

export default function ViewCanvas() {
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 30,
        }}
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{
          fov: 35,
        }}
      >
        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
        {/* <Perf /> */}
      </Canvas>
      <Loader />
    </>
  );
}
