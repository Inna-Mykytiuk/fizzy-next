"use client";

import FloatingCan from "@/components/FloatingCan";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useGSAP } from "@gsap/react";
import { Environment, Scroll } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Group } from "three";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AlternatingScene() {
  const canRef = useRef<Group>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  const bgColors = ["#f8bae2", "#E9CFF6", "#b2e1f6"];

  useGSAP(
    () => {
      if (!canRef.current) return;

      const sections = gsap.utils.toArray(".alternating-section");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".alternating-text-view",
          endTrigger: ".alternating-text-container",
          pin: true,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      sections.forEach((_, index) => {
        if (!canRef.current) return;
        if (index === 0) return;

        const isOdd = index % 2 !== 0;

        const xPosition = isDesktop ? (isOdd ? "-0.8" : "0.8") : 0;
        const yRotation = isDesktop ? (isOdd ? "0.4" : "-0.4") : 0;
        scrollTl
          .to(canRef.current.position, {
            x: xPosition,
            ease: "circ.inOut",
            delay: 0.5,
          })
          .to(
            canRef.current.rotation,
            {
              y: yRotation,
              ease: "back.inOut",
            },
            "<",
          )
          .to(".alternating-text-container", {
            backgroundColor: gsap.utils.wrap(bgColors, index),
          });
      });
    },
    { dependencies: [isDesktop] },
  );

  return (
    <group
      ref={canRef}
      position-x={isDesktop ? 0.8 : 0}
      rotation-y={isDesktop ? -0.3 : 0}
    >
      <FloatingCan flavor="strawberryLemonade" />
      <Environment files={"/hdr/lobby.hdr"} environmentIntensity={1.5} />
    </group>
  );
}
