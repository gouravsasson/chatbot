import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import StickySection from "./component/StickySection";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      direction: "vertical",
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="bg-black min-h-screen flex flex-col px-20 gap-20">
        <Navbar />
        <HeroSection />
      </div>
      <div className="min-h-screen">
        <StickySection />
      </div>
    </>
  );
}

export default App;
