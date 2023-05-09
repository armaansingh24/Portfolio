import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import TypeWritter from "typewriter-effect";
import Armaan_Resume from "./../assets/Armaan_Resume.pdf";

const Hero = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(Armaan_Resume).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Armaan Singh";
        alink.click();
      });
    });
  };
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute z-10 inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 h-fit`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="animate-text text-[#915eff] bg-clip-text  font-black">
              Armaan
            </span>
          </h1>

          <div className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a{" "}
            <TypeWritter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: [
                  "Full Stack Developer",
                  "Web Developer",
                  "UI-UX Designer",
                  "Backend Developer",
                  "Coder",
                ],
              }}
            />
          </div>
          
            <button onClick={onButtonClick} className="text-[#915eff] text-2xl">
              Resume
            </button>
              
        </div>
      </div>

      <div className="w-full h-full translate-y-4 hidden md:flex">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
