import React from "react";

function Hero() {
  return (
    <div className="banner bg-cover h-[72vh]">
      <div className="flex justify-center items-center h-full">
        <div className="w-[80%]">
          <h2 className="uppercase text-twhite text-[60px]">
            safari education
          </h2>

          <h1 className="text-[98px] w-min text-twhite bg-back pr-2 pl-1 mt-[10px] uppercase">
            consultancy
          </h1>
          <div className="pt-[50px]">
          <button className="bg-back hover:bg-blue-700  text-twhite  py-[8px] px-[30px] mr-[10px] text-[20px] shadow-twhite   rounded-xl">
            APPLY NOW 
          </button>
          <button className="bg-bback hover:bg-blue-700  text-twhite  py-[8px] px-[30px]  text-[20px] shadow-twhite  rounded-xl">
            WORK WITH US
          </button>



          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
