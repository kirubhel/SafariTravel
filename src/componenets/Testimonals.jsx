import React from "react";
import Slider from "react-slick";
function Testimonals() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="pt-[80px] pb-[50px]">
      <div className="max-w-[1140px] w-[100%] px-[15px] m-auto">
        <h2 className="text-center mb-[3rem] uppercase text-[60px] font-black text-[#242424]">
          Testimonials
        </h2>
        <Slider {...settings}>
          <div className=" outline-none min-h-[1px] h-[100%] float-left ">
            <div>
              <div className="w-[70%] flex flex-col items-center justify-center my-0 mx-auto ">
                <p className="mt-0 mb-[1rem] leading-8 text-[20px] font-medium text-center ">
                  "I love there customer service and time management. I am happy
                  with where I am today and I would always want to thank safari
                  education consultancy."
                </p>

                <p className="mb-[3rem] text-[22px] font-bold pt-[1rem] uppercase">
                  Abrham Meshesha
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className=" outline-none min-h-[1px] h-[100%] float-left">
              <div>
                <div className="w-[70%] flex flex-col items-center justify-center my-0 mx-auto ">
                  <p className="mt-0 mb-[1rem] leading-8 text-[20px] font-medium text-center ">
                    "The one thing that impressed me about Safari Education
                    Consultancy were their employees. They were really friendly
                    and answered every question I asked. They are very
                    informative and were by my side through the entire process."
                  </p>

                  <p className="mb-[3rem] text-[22px] font-bold pt-[1rem] uppercase">
                    Kirubel Gizaw
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" outline-none min-h-[1px] h-[100%] float-left">
              <div>
                <div className="w-[70%] flex flex-col items-center justify-center my-0 mx-auto ">
                  <p className="mt-0 mb-[1rem] leading-8 text-[20px] font-medium text-center ">
                    "My entire life changed the day I walked into safari’s
                    office. I am in a new place in my life because of them and
                    they helped me tremendously with anything I wanted. Very
                    honest and understanding employees."
                  </p>

                  <p className="mb-[3rem] text-[22px] font-bold pt-[1rem] uppercase">
                    Mikiyas Debebe
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" outline-none min-h-[1px] h-[100%] float-left">
              <div>
                <div className="w-[70%] flex flex-col items-center justify-center my-0 mx-auto ">
                  <p className="mt-0 mb-[1rem] leading-8 text-[20px] font-medium text-center ">
                    "I had always wanted to come to America because I wanted the
                    best education possible. I had big dreams and they made my
                    dreams come true. Great customer service and easy process."
                  </p>

                  <p className="mb-[3rem] text-[22px] font-bold pt-[1rem] uppercase">
                    Addisu Mossisa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Testimonals;
