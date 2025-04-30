"use client";

import { View } from "@react-three/drei";
import clsx from "clsx";
import React from "react";

import { Bounded } from "../UI/Bounded";
import AlternatingScene from "./AlternatingScene";

const alternatingText = [
  {
    title: "Gut-Friendly Goodness",
    text: "Our soda is packed with prebiotics and 1 billion probiotics, giving your gut the love it deserves. Say goodbye to bloating and hello to a happy, healthy digestive system with every sip.",
  },
  {
    title: "Light Calories, Big Flavor",
    text: "Indulge in bold, refreshing taste without the guilt. At just 20 calories per can, you can enjoy all the flavor you crave with none of the compromise.",
  },
  {
    title: "Naturally Refreshing",
    text: "Made with only the best natural ingredients, our soda is free from artificial sweeteners and flavors. It’s a crisp, clean taste that feels as good as it tastes, giving you a boost of real, natural refreshment.",
  },
];

function AlternatingText() {
  return (
    <Bounded className="alternating-text-container relative bg-[#f8bae2] text-sky-950">
      <div className="relative z-[100] grid">
        <View className="alternating-text-view absolute top-0 left-0 h-screen w-full">
          <AlternatingScene />
        </View>

        {alternatingText.map((item, index) => (
          <div
            key={index + item.title}
            className="alternating-section grid h-screen place-items-center gap-x-12 lg:grid-cols-2"
          >
            <div
              className={clsx(
                index % 2 === 0 ? "col-start-1" : "md:col-start-2",
                "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30",
              )}
            >
              <h2 className="text-6xl font-bold text-balance text-[#e61c59]">
                {item.title}
              </h2>
              <div className="mt-4 text-xl">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
}

export default AlternatingText;
