import AllFlavors from "@/components/AllFlavors";
import { Bounded } from "@/components/Bounded";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div className="grid">
        <Hero />
        <AllFlavors />
      </div>
    </>
  );
}
