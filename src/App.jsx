import React from "react";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import AboutUs from "./component/AboutUs";
import StickySection from "./component/StickySection";

function App() {
  return (
    <>
      <div className="bg-black h-screen flex flex-col px-20  gap-20">
        <Navbar />
        <HeroSection />
      </div>
      <div className="">
      <StickySection/>
      </div>
      
      
    </>
  );
}

export default App;
