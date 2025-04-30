import AlternatingText from "@/components/AlternatingText/AlternatingText";
import Carousel from "@/components/Carousel/Carousel";
import Hero from "@/components/Hero/Hero";
import SkyDive from "@/components/SkyDive/SkyDive";
import TitleSection from "@/components/TitleSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SkyDive />
      <Carousel />
      <AlternatingText />
      <TitleSection />
    </>
  );
}
