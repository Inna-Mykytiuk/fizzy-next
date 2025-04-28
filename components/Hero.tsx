"use client";

import { TextSplitter } from "@/utils/TextSplitter";
import { useGSAP } from "@gsap/react";
import { View } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";

import cans from "../public/all-cans-bunched.png";
import { Bounded } from "./Bounded";
import { Bubbles } from "./Bubbles";
import Button from "./Button";
import Scene from "./Scene";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    const introTl = gsap.timeline();

    introTl
      .set(".hero", { opacity: 1 })
      .from(".hero-header-word", {
        scale: 3,
        opacity: 0,
        ease: "power4.in",
        delay: 0.3,
        stagger: 0.5,
      })
      .from(
        ".hero-subheading",
        {
          opacity: 0,
          y: 30,
        },
        "+=.8",
      )
      .from(".hero-body", {
        opacity: 0,
        y: 10,
      })
      .from(".hero-button", {
        opacity: 0,
        y: 10,
        duration: 0.6,
      });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        // markers: true,
      },
    });

    scrollTl
      .fromTo(
        "body",
        {
          backgroundColor: "#d2f4fb",
        },
        {
          backgroundColor: "#ffe7fc",
          overwrite: "auto",
        },
        0.6,
      )
      .from(".text-side-heading .split-char", {
        scale: 1.3,
        y: 40,
        rotate: -25,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(3)",
        duration: 0.5,
      })
      .from(".text-side-body", {
        y: 20,
        opacity: 0,
      });
  });

  return (
    <Bounded className="hero opacity-0">
      <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen md:block">
        <Scene />
        <Bubbles count={300} speed={2} repeat={true} />
      </View>
      <div className="grid">
        <section className="hero flex h-screen flex-col items-center justify-center text-center">
          <h1 className="hero-header text-7xl leading-[.8] font-black text-orange-500 uppercase md:text-[9rem] lg:text-[13rem]">
            <TextSplitter
              text="Live Gutsy"
              wordDisplayStyle="block"
              className="hero-header-word"
            />
          </h1>
          <p className="hero-subheading mt-12 mb-4 text-5xl font-semibold text-[#fea9cb] lg:text-6xl">
            Soda perfect
          </p>
          <span className="hero-body text-2xl font-normal text-sky-950">
            3-5g sugar. 9g fiber. 5 delicious flavors
          </span>
          <Button
            href="/"
            buttonText="Shop now"
            className="hero-button mt-12"
          />
        </section>

        <section className="text-side relative z-[80] grid h-screen items-center gap-4 lg:grid-cols-2">
          <Image
            src={cans}
            alt="Cans"
            width={300}
            height={300}
            className="w-full md:hidden"
          />
          <div className="text-side-heading">
            <TextSplitter
              text="Try All Five Flavors"
              className="text-6xl font-bold text-balance uppercase lg:text-8xl"
            />
            <p className="text-side-body mt-4 max-w-xl text-xl font-normal text-balance">
              Our soda is made with real fruit juice and a touch of cane sugar.
              We never use artificial sweeteners or high fructose corn syrup.
              Try all five flavors and find your favorite!
            </p>
          </div>
        </section>
      </div>
    </Bounded>
  );
};

export default Hero;
