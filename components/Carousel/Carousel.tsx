"use client";

import { Center, Environment, View } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { Group } from "three";

import { ArrowIcon } from "../ArrowIcon";
import FloatingCan from "../FloatingCan";
import { SodaCanProps } from "../UI/SodaCan";

const FLAVORS: {
  flavor: SodaCanProps["flavor"];
  color: string;
  name: string;
}[] = [
  { flavor: "blackCherry", color: "#710523", name: "Black Cherry" },
  { flavor: "grape", color: "#572981", name: "Grape Goodness" },
  { flavor: "lemonLime", color: "#164405", name: "Lemon Lime" },
  {
    flavor: "strawberryLemonade",
    color: "#690B3D",
    name: "Strawberry Lemonade",
  },
  { flavor: "watermelon", color: "#4B7002", name: "Watermelon Crush" },
];

function Carousel() {
  const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);
  const sodaCanRef = useRef<Group>(null);

  function changeFlavor(index: number) {
    const nextIndex = (index + 1) % FLAVORS.length;
    setCurrentFlavorIndex(nextIndex);
  }

  return (
    <section className="carousel grid-rows-[auto, 4fr, auto] relative grid h-screen justify-center overflow-hidden bg-white py-12 text-white">
      <div className="background pointer-events-none absolute inset-0 bg-[#ffa2b6] opacity-50" />
      <h2 className="relative text-center text-5xl font-bold">
        {" "}
        Choose Your Flavor
      </h2>

      <div className="grid-cols-[auto, auto, auto] grid items-center">
        {/* Left */}
        <button
          onClick={() => changeFlavor(currentFlavorIndex + 1)}
          className="z-20"
        >
          Left
        </button>
        {/* Can */}
        <View className="aspect-square h-[70vmin] min-h-40">
          <Center position={[0, 0, 1.5]}>
            <FloatingCan
              ref={sodaCanRef}
              floatIntensity={0.3}
              rotationIntensity={1}
              flavor={FLAVORS[currentFlavorIndex].flavor}
            />
          </Center>

          <Environment
            files="/hdr/lobby.hdr"
            environmentIntensity={0.6}
            environmentRotation={[0, 3, 0]}
          />
          <directionalLight intensity={6} position={[0, 1, 1]} />
        </View>
        {/* Right */}
      </div>

      <p>12 cans - $35.99</p>
    </section>
  );
}

export default Carousel;
