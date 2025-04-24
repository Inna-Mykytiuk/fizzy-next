import { TextSplitter } from "@/utils/TextSplitter";
import React from "react";

import Button from "./Button";

const Hero = () => {
  return (
    <section className="hero flex h-screen flex-col items-center justify-center text-center">
      <h1 className="hero-header text-7xl leading-[.8] font-black text-orange-500 uppercase md:text-[9rem] lg:text-[13rem]">
        <TextSplitter
          text="Live Gutsy"
          wordDisplayStyle="block"
          className="hero-header-word"
        />
      </h1>
      <p className="hero-subheading mt-12 mb-4 text-5xl font-semibold text-[#129ac8] lg:text-6xl">
        Soda perfect
      </p>
      <span className="hero-body text-2xl font-normal text-sky-950">
        3-5g sugar. 9g fiber. 5 delicious flavors
      </span>
      <Button href="/" buttonText="Shop now" className="hero-button mt-12" />
    </section>
  );
};

export default Hero;
