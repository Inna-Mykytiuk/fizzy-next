import { TextSplitter } from "@/utils/TextSplitter";
import Image from "next/image";
import React from "react";

import cans from "../public/all-cans-bunched.png";

const AllFlavors = () => {
  return (
    <section className="text-side relative z-[80] container grid h-screen items-center gap-4 lg:grid-cols-2">
      <Image
        src={cans}
        alt="Cans"
        width={300}
        height={300}
        className="w-full md:hidden"
      />
      <div>
        <TextSplitter
          text="Try All Flavors"
          className="text-side-heading text-6xl font-bold text-balance uppercase lg:text-8xl"
        />
        <p className="text-side-body mt-4 max-w-xl text-xl font-normal text-balance">
          Our soda is made with real fruit juice and a touch of cane sugar. We
          never use artificial sweeteners or high fructose corn syrup. Try all
          five flavors and find your favorite!
        </p>
      </div>
    </section>
  );
};

export default AllFlavors;
