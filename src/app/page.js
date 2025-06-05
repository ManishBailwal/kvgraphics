import Image from "next/image";
import Hero from "./components/Hero";
import WhyChooseUs from './components/WhyChooseUs';
import About from "./components/About";
import Services from "./components/Services";
import ProcessSection from "./components/ProcessSection";


export default function Home() {
  return (

    <div>
      <Hero/>
      <About/>
      <Services/>
     
      <WhyChooseUs/>
      <ProcessSection/>
      
    </div>
    
    
  );
}
