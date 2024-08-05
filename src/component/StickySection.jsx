import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutUs from './AboutUs';
import OurServices from './OurServices';

gsap.registerPlugin(ScrollTrigger);

const StickySections = () => {
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);

  useEffect(() => {
    gsap.to(sectionRef1.current, {
      scrollTrigger: {
        trigger: sectionRef1.current,
        start: "center top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: false,
      },
      y: -200,
      opacity: 0,
      duration: 1,
    });

    gsap.to(sectionRef2.current, {
      scrollTrigger: {
        trigger: sectionRef2.current,
        start: "top top",
        end: "bottom+=500 top",
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: false,
      },
      y: -200,
      opacity: 0.5,
      duration: 1,
    });

    gsap.to(sectionRef3.current, {
      scrollTrigger: {
        trigger: sectionRef3.current,
        start: "top top",
        end: "bottom+=500 top",
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: false,
      },
      y: -200,
      opacity: 0.5,
      duration: 1,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div
        className="relative  flex flex-col items-center justify-center "
        ref={sectionRef1}
      >
        <AboutUs/>
      </div>
      <div
        className="relative flex flex-col items-center justify-center bg-[#E4E8F5]"
        ref={sectionRef2}
      >
        <OurServices/>
      </div>
      <div
        className="relative flex flex-col items-center justify-center h-screen  bg-gray-300"
        ref={sectionRef3}
      >
        <h1 className="text-4xl font-bold">Sticky Section 3</h1>
        <p className="text-lg mt-4">Content for the third sticky section.</p>
      </div>
    </div>
  );
};

export default StickySections;
