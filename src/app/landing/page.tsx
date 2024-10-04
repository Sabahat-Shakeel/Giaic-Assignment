"use client";
import Image from "next/image";
const HomePage = () => {
  
  return (
    <div className="flex portrait:flex-col portrait:py-1 sm:py-6 flex-row justify-between items-center min-h-screen px-10 text-white bg-gradient-to-r from-[#22333b] via-[#a3b18a] to-[#001219] bg-[length:200%_200%] animate-gradient-bg">
      <div className="flex flex-col items-center text-center justify-center">
        <h1 className="sm:text-6xl text-5xl font-bold mb-4 font-[Poppins] slide-in-left">
          SAMSUNG GALAXY S24+ Ultra
        </h1>
        <p className="text-lg text-neutral-400 dark:text-neutral-300">
          Bigger batteries, brighter screens, and smarter AI.
        </p>
        <div className="mt-4 sm:space-x-4 portrait:space-x-3">
          <button className=" portrait:px-2 portrait:py-1 portrait:text-sm border border-neutral-300 hover:scale-115 px-4 py-2 hover:shadow-none hover:scale-x-125 hover:scale-y-105 transition duration-200 rounded-lg shadow-[0px_2px_0px_0px_#495057_inset]">
            Buy now
          </button>

          <button className="portrait:px-2 portrait:py-1 portrait:text-sm border border-neutral-300 hover:scale-115 px-4 py-2 hover:shadow-none hover:scale-x-125 hover:scale-y-105 transition duration-200 rounded-lg shadow-[0px_2px_0px_0px_#495057_inset]">
            Learn more
          </button>
        </div>
      </div>

      <div className="flex-shrink-0  ">
        <Image
          src="/phone.png"
          alt="Background Image"
          width="500"
          height="500"
          priority
          className="bounce-animation hover:scale-110 transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default HomePage;
