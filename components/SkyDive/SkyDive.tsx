"use client";

import { View } from "@react-three/drei";
import React from "react";

import { Bounded } from "../UI/Bounded";
import SkyDiveScene from "./SkyDiveScene";

export default function SkyDive() {
  return (
    <Bounded className="skydive h-screen">
      <h2 className="sr-only">Dive into better health</h2>
      <View className="h-screen w-screen">
        <SkyDiveScene
          flavor={["blackCherry"]}
          sentence={"Dive into better health"}
        />
      </View>
    </Bounded>
  );
}
