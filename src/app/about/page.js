'use client';

import { FaQuestion } from "react-icons/fa";
import AchievementsSection from "../components/AchievementsSection";
import FAQSection from "../components/FAQSection";
import CallToAction from "../components/CallToAction";
import OurStorySection from "../components/OurStorySection";
import AboutHeroSection from "../components/AboutHeroSection";


export default function About() {
  return (
   <div>
    <AboutHeroSection/>
    <OurStorySection/>
    <AchievementsSection/>
    <CallToAction/>
    <FAQSection/>

   </div>
  );
}
