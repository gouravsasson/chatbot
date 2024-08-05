import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
  const containerRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );

    boxesRef.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.3,
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="" ref={containerRef}>
      <div className="mt-[100px] flex flex-col items-center">
        <h1 className="font-Lexend text-center text-[14px] font-bold">
          What is THEFINANSOL?
        </h1>
        <div className="mt-4 w-0 h-[50px] border-[1px] border-black"></div>
      </div>

      <div className="text-center text-[33px] mt-4">
        <p>
          TheFinansol is a team of experienced AI Professionals, having
          expertise in <br /> different domains ranging from Conversational AI
          to false,T and Custom
          <br /> Enterprise-grade AI Projects. Based out of Delhi, we started
          our journey
          <br /> in 2017 and have come a long way in AI with exemplary
          projects.
        </p>
      </div>

      <div className="flex justify-center gap-20 mt-[100px] mb-10">
        <div
          className="w-[600px] h-[650px] bg-[#594BE7] rounded-3xl"
          ref={(el) => (boxesRef.current[0] = el)}
        ></div>
        <div
          className="w-[600px] h-[650px] bg-[#9086EF] rounded-3xl"
          ref={(el) => (boxesRef.current[1] = el)}
        ></div>
      </div>
    </div>
  );
}

export default AboutUs;
