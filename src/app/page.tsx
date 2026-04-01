// app/page.js
import Hero from "@/components/Hero";
import LogoSlider from "@/components/LogoSlider" ;
import ExplorePrograms from "@/components/ExplorePrograms" ;
import Lerner from "@/components/Lerner";

export default function Home() {
  return (
    <>
      <Hero />
     <LogoSlider />
      <ExplorePrograms />
      <Lerner />
    </>
  );
}