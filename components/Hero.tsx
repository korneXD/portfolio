import React from "react";
import Image from "next/image";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";

export const Hero = () => {
  const words = ["NextJS", "ReactJS", "TailwindCSS", "HTML", "CSS"];

  return (
    <BackgroundLines className="h-screen flex flex-col items-center justify-center w-full px-4 bg-black">
      <div className="pb-20 pt-36 flex flex-col">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-500 to-neutral-50 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Halmosi Kornel&apos;s <br /> Portfolio Sitee
        </h2>
        <Image
          src="./memoji.jpg"
          alt="Memoji"
          className="relative h-64 w-64 mx-auto z-20"
        />
        <div className="relative z-20 max-w-xl mx-auto text-sm md:text-lg text-white text-center">
          Learning
          <FlipWords words={words} />
        </div>
      </div>
    </BackgroundLines>
  );
};
