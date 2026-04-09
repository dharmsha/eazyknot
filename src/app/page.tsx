// app/page.js
import Hero from "@/components/Hero";
import LogoSlider from "@/components/LogoSlider" ;
import ExplorePrograms from "@/components/ExplorePrograms" ;
import Lerner from "@/components/Lerner";
import Course from "@/components/Course";
import Vision  from"@/components/Vision";
import Feq from "@/components/Feq";
export default function Home() {
  return (
    <>
      <Hero />
     <LogoSlider />
      <ExplorePrograms />
      <Course />
      <Lerner />
      <Vision />
      <Feq />
    </>
  );
}