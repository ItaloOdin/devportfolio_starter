import About from "@/components/Home/About/About";
import Hero from "@/components/Home/Hero/Hero";
import Services from "@/components/services/Services";
import React from "react";

const HomePage = () => {
  return <div className="h-[10000px]">
<Hero />
<About/>  
<Services/>
  </div>;
};

export default HomePage;
