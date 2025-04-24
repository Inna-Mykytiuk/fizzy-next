import React from "react";

import { FizziLogo } from "./FizziLogo";

// type Props = {}

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="-mb-20 flex justify-center py-4">
          <FizziLogo className="z-10 h-20 cursor-pointer text-[#129ac8]" />
        </div>
      </div>
    </header>
  );
}
