import React from "react";
import HeroImage from "../assets/hero_image.png";

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-white to-orange-300 flex justify-between min-h-[50vh] px-4 md:px-8 lg:px-12">
      <div className="text-xl md:text-2xl font-medium flex flex-col flex-wrap justify-center sm:h-[100vh] h-auto mx-auto md:ml-12 lg:ml-44 md:text-left w-full md:w-auto md:space-y-4">
        <h1 className="text-xl text-orange-500 font-bold">NEW ARRIVALS ONLY</h1>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold">NEW</h1>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold">
          COLLECTIONS
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold">
          FOR EVERYONE
        </h1>
        <button className="mt-6 md:mt-9 bg-orange-500 text-white rounded-full text-lg md:text-xl p-4 w-fit mx-auto md:mx-0 ml-[-1px] hover:bg-orange-600 transition-colors">
          Latest Collection
        </button>
      </div>
      <div className="hidden xl2:block mt-8 md:mt-0">
        <img
          src={HeroImage}
          alt="Hero"
          className="xl:w-[650px] xl:h-[900px] lg:w-[10px] lg:h-[20px] h-auto object-contain"
        />
      </div>
    </div>
  );
}
