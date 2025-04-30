import React from "react";

export default function TitleSection() {
  return (
    <section className="min-h-screen w-screen overflow-hidden bg-[#b2e1f6] text-orange-500">
      <h2 className="grid w-full gap-[3vw] py-10 text-center leading-[.7] font-black uppercase">
        <div className="text-[34vw]">Soda</div>
        <div className="grid gap-[3vw] text-[34vw] md:flex md:text-[11vw]">
          <span className="inline-block">that </span>
          <span className="inline-block max-md:text-[27vw]">makes </span>
          <span className="inline-block max-md:text-[40vw]">you </span>
        </div>
        <div className="text-[32vw]">Smile</div>
      </h2>
    </section>
  );
}
