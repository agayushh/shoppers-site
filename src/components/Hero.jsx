import React from "react";
import HeroImage from "../assets/hero_image.png";

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-fuchsia-200 to-gray-100 flex justify-between h-[90vh] flex-wrap">
      <div className="text-2xl font-medium flex flex-col justify-center ml-44">
        <h1>New Arrivals Only</h1>
        <h1 className="text-8xl font-medium">collections</h1>
        <h1 className="text-8xl font-medium">new</h1>
        <h1 className="text-8xl font-medium">for everyone</h1>
        <button className="mt-9 bg-orange-500 text-white rounded-full text-xl p-3 w-fit">
          Latest Collection   
        </button>
      </div>
      <img src={HeroImage} alt="" width="550" height="200" className=" " />
    </div>
  );
}
