import React from "react";
import { useRef,useEffect} from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img from "../assets/img/img2.png"
import img2 from "../assets/img/img3.png"
gsap.registerPlugin(ScrollTrigger);


function OurServices() {
    const containerRef = useRef(null);
    useEffect(() => {
        gsap.fromTo(
          containerRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 3,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
            },
          }
        );
    
       
      }, []);

  return (
    <>
      <div className=" h-full w-full px-20 ">
        <div className="mt-[100px] flex  justify-evenly">
          <div className="" ref={containerRef}>
            <h1 className=" font-Lexend text-[50px] text-[#9086EF]">
              AI Chatbots
            </h1>
            <p className="text-2xl font-Lexend font-normal">Looking for a smarter way to streamline your business processes and <br /> engage with your customers efficiently? Our AI-powered Chatbots,<br /> integrated with ChatGPT and RAG Pattern AI Technology, redefine the<br /> way you connect, communicate, and operate. With seamless Chatbot <br />Development, Integration, and Analytics, our solutions are tailored for <br /> cutting-edge performance and exceptional user experience.</p>
          </div>
          <iframe
            className=" h-[570px]"
            src="https://www.youtube.com/embed/1UkBsmIx2dk?controls=0&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.thefinansol.com&widgetid=3"
            frameborder="0"
          ></iframe>
        </div>
        <div className="mt-[100px] flex  justify-evenly">
          
          <img
            className=" h-[570px]"
            src={img}
            
          ></img>
          <div className="" ref={containerRef}>
            <h1 className=" font-Lexend text-[50px] text-[#9086EF]">
            Text Analytics
            </h1>
            <p className="text-2xl font-Lexend font-normal">Text Analytics is the process of mining the text and discovering insights  from it. Some of the techniques used in Text Analytics are Summarization, Clustering, Categorization and Information Extraction. Text Analytics make possible chatbots, sentiment analysis, knowledge management and so on</p>
          </div>  
        </div>

        <div className="mt-[100px] flex  justify-evenly">
        <div className="" >
            <h1 className=" font-Lexend text-[50px] text-[#9086EF]">
            Image and Video Analytics
            </h1>
            <p className="text-2xl font-Lexend font-normal">Image and Video analysis involves processing an image or a video, into  fundamental components to extract meaningful information and actionable insights. Image and Video analysis can include tasks such as finding shapes, detecting edges, removing noise, counting objects, and calculating statistics for texture analysis or image quality or real-time analysis and alerts, tracking, autonomous driving and so on</p>
          </div>  
          
          <img
            className=" h-[570px]"
            src={img2}
            
          ></img>
          
        </div>
      </div>
    </>
  );
}

export default OurServices;
