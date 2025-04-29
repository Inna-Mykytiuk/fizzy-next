import React from "react";

import { FizziLogo } from "./UI/FizziLogo";

export default function Header() {
  return (
    <header className="-mb-20 flex justify-center py-4">
      <FizziLogo className="relative z-[100] h-20 cursor-pointer text-[#fea9cb]" />
    </header>
  );
}
