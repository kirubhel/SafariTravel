import React from "react";
import banner3 from "../assets/banner3.png";
function Hero3() {
  return (
    <div className="h-[72vh] py-[70px] ">
      <div className="max-w-[1140px] w-full px-[15px]  mx-auto ">
        <div className="grid grid-cols-2 -mx-[15px]">
          <div>
            <p className="mb-[10px] text-[36px] shadow-[#242424] ">
              <span className="text-[40px] uppercase font-extrabold">
                SAFARI EDUCATION CONSULTANCY{" "}
              </span>
              IS AN EDUCATION CONSULTANCY COMPANY THAT CONSULT AND GUIDE
              STUDENTS WHO WANT TO STUDY ABROAD
            </p>
            <p className="text-[20px] leading-7 text-[#555] mb-6 shadow-[#555] min-w-[100%] sha">
              For students who want to study abroad in full and half scholarship
              we process the full college admission process. We have been in
              industry since 2018.
              <br />
              <b>Choose your better future with us.</b>
            </p>
            <button className="bg-back hover:bg-blue-700  text-twhite  py-[8px] px-[30px] mr-[10px] text-[20px] shadow-twhite   rounded-2xl">
              APPLY NOW!
            </button>
          </div>
          <div>
            <div>
              <img src={banner3} className="max-w-[100%]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero3;
