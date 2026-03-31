// app/page.js
import Hero from "@/components/Hero";
import LogoSlider from "@/components/LogoSlider" ;
import ExplorePrograms from "@/components/ExplorePrograms" ;

export default function Home() {
  return (
    <>
      <Hero />
     <LogoSlider />
      <ExplorePrograms />
    </>
  );
}