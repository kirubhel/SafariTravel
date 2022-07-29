import React from "react";
import Slider from "react-slick";
import us from "../assets/countryus.png";
import poland from '../assets/Poland.png'
import canada from '../assets/canada.png'
import italy from '../assets/Italy.png'
import turkey from '../assets/Turkey.png'
import cyprus from '../assets/Cyprus.png'
import china from '../assets/China.png'
import uikrane from '../assets/Ukraine.png'
import france from '../assets/France.png'
import norway from '../assets/Norway.png'

function Countries() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="banner4 pt-[50px] pb-[120px]">
      <div className="px-[15px] mx-auto w-[100%] max-w-[1140px]">
        <h2 className="text-center mt-16 uppercase text-[60px] font-black">
          countries{" "}
          <span className="text-twhite bg-bdark pr-[13px] pl-[9px] rounded-lg">
            we work on
          </span>
        </h2>

        
          <Slider className="mt-[40px] -mx-[15px]   " {...settings}>
            
              <div className="outline-none  min-h-[1px] float-left h-[100%] mr-2 mb-6">
                <img src={us} className="border-none align-middle" alt="" />
                <h4 className=" text-[1.0rem] text-left leading-3 top-0 text-[#242424] font-medium mb-[0.5rem]">
                  United States of America
                </h4>
              </div>
              <div className="outline-none  min-h-[1px] float-left h-[100%] mr-2 mb-6">
                <img src={poland} className="border-none align-middle" alt="" />
                <h4 className=" text-[1.0rem] text-left leading-3 top-0 text-[#242424] font-medium mb-[0.5rem]">
                  Poland
                </h4>
              </div>
              <div className="outline-none  min-h-[1px] float-left h-[100%] mr-2 mb-6">
                <img src={canada} className="border-none align-middle" alt="" />
                <h4 className=" text-[1.0rem] text-left leading-3 top-0 text-[#242424] font-medium mb-[0.5rem]">
                  Canada
                </h4>
              </div>
           
                <div className="outline-none  min-h-[1px] float-left h-[100%] mr-2 mb-6">
                <img src={italy} className="border-none align-middle" alt="" />
                <h4 className=" text-[1.0rem] text-left leading-3 top-0 text-[#242424] font-medium mb-[0.5rem]">
                  Italy
                </h4>
              </div>
                <div className="outline-none  min-h-[1px] float-left h-[100%] mr-2 mb-6">
                <img src={turkey} className="border-none align-middle" alt="" />
                  <h4 className=" text-[1.0rem] text-left leading-3 top-0 text-[#242424] font-medium mb-[0.5rem]">
                  Turkey
                </h4>
              </div>
                <div className="outline-none  min-h-[1px] float-left h-[100%] mr-2 mb-6">
                <img src={cyprus} className="border-none align-middle" alt="" />
                  <h4 className=" text-[1.0rem] text-left leading-3 top-0 text-[#242424] font-medium mb-[0.5rem]">
                  Cyprus
                </h4>
              </div>
            
                <div className="outline-none  min-h-[1px] float-left h-[100%] mr-2 mb-6">
                <img src={china} className="border-none align-middle" alt="" />
                  <h4 className=" text-[1.0rem] text-left leading-3 top-0 text-[#242424] font-medium mb-[0.5rem]">
                  China
                </h4>
              </div>
                <div className="outline-none  min-h-[1px] float-left h-[100%] mr-2 mb-6">
                <img src={uikrane} className="border-none align-middle" alt="" />
                  <h4 className=" text-[1.0rem] text-left leading-3 top-0 text-[#242424] font-medium mb-[0.5rem]">
                  Uikrane
                </h4>
              </div>
                <div className="outline-none  min-h-[1px] float-left h-[100%] mr-2 mb-6">
                <img src={france} className="border-none align-middle" alt="" />
                  <h4 className=" text-[1.0rem] text-left leading-3 top-0 text-[#242424] font-medium mb-[0.5rem]">
                  France
                </h4>
              </div>
           
                <div className="outline-none  min-h-[1px] float-left h-[100%] mr-2 mb-6">
                <img src={norway} className="border-none align-middle" alt="" />
                  <h4 className=" text-[1.0rem] text-left leading-3 top-0 text-[#242424] font-medium mb-[0.5rem]">
                  Norway
                </h4>
              </div>
           
           
          </Slider>
      
      </div>
    </div>
  );
}

export default Countries;
