import React from "react";
import Slider from "react-slick";
import slider1 from "../assets/slider-image1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";

function Hero2() {
  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="banner2  ">
      <div className="pt-[65px] pb-[55px]">
        <h2 className="text-center uppercase text-twhite text-[60px] font-black">
          eligibility / Who Can Apply
        </h2>
        <div className="w-[20%] max-w-[100%] mt-[20px] mb-[50px] mx-auto text-[0] rounded-[100px] border-back border-[3px] border-solid"></div>
      </div>

      <Slider className="" {...settings}>
        <div className="px-52 -mx[15px]">
          <div className="grid grid-cols-2 ">
            <div className=" ">
              <h3 className="text-[46px] text-twhite mb-2 font-medium ">
                High School <br /> Program
              </h3>
              <p className="text-[20px] mt-6 mb-[1rem] text-twhite">
                Students starting from 9th grade can be eligible for this
                program.
              </p>
            </div>
            <div className="">
              <img src={slider1} className=" border-none align-middle" alt="" />
            </div>
          </div>
        </div>

        <div className="px-52 -mx[15px]">
          <div className="grid grid-cols-2 ">
            <div className=" ">
              <h3 className="text-[46px] text-twhite mb-2 font-medium ">
                Bachelor or Degree <br /> Program
              </h3>
              <p className="text-[20px] mt-6 mb-[1rem] text-twhite">
                Grade 12 students who are currently learning, graduated grade 12
                students 1st and 2nd year college or university students and
                students who have graduated grade 12 but have not continued
                class can be eligible for this program..
              </p>
            </div>
            <div className="">
              <img src={slider2} className=" border-none align-middle" alt="" />
            </div>
          </div>
        </div>

        
            
       
          <div className="px-52 -mx[15px]" >
          <div className="grid grid-cols-2 ">
            <div className="block m-auto">
              <h3 className="text-[46px] text-twhite mb-2 font-medium ">
                Transfer <br /> Program
              </h3>
              <p className="text-[20px] mt-6 mb-[1rem] text-twhite">
              Students who are currently taking university courses can be eligible for this program. 3rd year, 2nd year, 4th year university students can apply.
              </p>
            </div>
            <div className="">
              <img src={slider3} className=" border-none align-middle" alt="" />
            </div>
          </div>
         
          </div>
        <div className="px-52 -mx[15px]">
          <div className="grid grid-cols-2 ">
            <div className="block m-auto">
              <h3 className="text-[46px] text-twhite mb-2 font-medium ">
                Master’s <br /> Program
              </h3>
              <p className="text-[20px] mt-6 mb-[1rem] text-twhite">
                Anyone who have graduated in degree  program can apply for
                masters program or second degree.
              </p>
            </div>
            <div className="">
              <img src={slider4} className=" border-none align-middle" alt="" />
            </div>
          </div>
          </div>
      </Slider>
    </div>
  );
}

export default Hero2;
