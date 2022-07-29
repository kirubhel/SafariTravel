import React from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";
import service6 from "../assets/service6.png";
function Service() {
  return (
    <div id="services" className="py-[50px]">
      <div className="w-[100%] px-[15px] mx-auto max-w-[1140px]">
        <h2 className="text-[#242424] text-center uppercase text-[60px] font-black">
          our services
        </h2>
        <div className="pt-[65px] grid grid-cols-2 gap-2  -mx-[15px]">
          <div className="pt-[20px] relative w-[100%] px-[15px]">
            <div>
              <img
                className="align-middle border-none w-[100%]"
                src={service1}
                alt=""
              />

              <div>
                <h4 className="text-left font-semibold text-[20px] uppercase mt-[36px] mb-[30px] text-[#242424]">
                  FULL AND HALF SCHOLARSHIP{" "}
                </h4>
                <p className="mb-4 text-[#8e8888] shadow-[#8e8888] text-[16px] leading-7 ">
                  We give full and half scholarships for our students in
                  different countries based on their education background and
                  the program they are applying for.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-[20px] mt-[50px] relative w-[100%] px-[15px]">
            <div>
              <img
                className="align-middle border-none w-[100%]"
                src={service2}
                alt=""
              />

              <div>
                <h4 className="text-left font-semibold text-[20px] uppercase mt-[36px] mb-[30px] text-[#242424]">
                FAST AND ORGANZIED CUSTOMER SERVICE
                </h4>
                <p className="mb-4 text-[#8e8888] shadow-[#8e8888] text-[16px] leading-7 ">
                We have an amazing staff that is available to help our clients 6 days a week. We have high customer support for all of the services that we give in our company. Our team organization makes us preferable than anyone else in the Industry.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-[20px] relative w-[100%] px-[15px]">
            <div>
              <img
                className="align-middle border-none w-[100%]"
                src={service3}
                alt=""
              />

              <div>
                <h4 className="text-left font-semibold text-[20px] uppercase mt-[36px] mb-[30px] text-[#242424]">
                FAST APPLICATION PROCESS
                </h4>
                <p className="mb-4 text-[#8e8888] shadow-[#8e8888] text-[16px] leading-7 ">
                We process our application fast based on the time range that we provide. Our application process will be processed fast once we have all the requirements from our students.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-[20px] mt-[50px] relative w-[100%] px-[15px]">
            <div>
              <img
                className="align-middle border-none w-[100%]"
                src={service4}
                alt=""
              />

              <div>
                <h4 className="text-left font-semibold text-[20px] uppercase mt-[36px] mb-[30px] text-[#242424]">
                WE CONSULT AND HELP YOU CHOOSE THE BEST COUNTRY TO STUDY
                </h4>
                <p className="mb-4 text-[#8e8888] shadow-[#8e8888] text-[16px] leading-7 ">
                We have a mentorship program that helps our students choose the best country to study and the best majors to study. Our mentorship program has detailed information about each country and partner schools we work with.  </p>
              </div>
            </div>
          </div>

          <div className="pt-[20px] relative w-[100%] px-[15px]">
            <div>
              <img
                className="align-middle border-none w-[100%]"
                src={service5}
                alt=""
              />

              <div>
                <h4 className="text-left font-semibold text-[20px] uppercase mt-[36px] mb-[30px] text-[#242424]">
                VISA APPOINTMENT AND VISA TRAINING
                </h4>
                <p className="mb-4 text-[#8e8888] shadow-[#8e8888] text-[16px] leading-7 ">
                We have professionals that will help you get ready for the visa interview and guide you about the embassy appointment procedures for each country that you are applying for.  </p>
              </div>
            </div>
          </div>

          <div className="pt-[20px] mt-[50px] relative w-[100%] px-[15px]">
            <div>
              <img
                className="align-middle border-none w-[100%]"
                src={service6}
                alt=""
              />

              <div>
                <h4 className="text-left font-semibold text-[20px] uppercase mt-[36px] mb-[30px] text-[#242424]">
                PRE-DEPARTURE GUIDANCE   </h4>
                <p className="mb-4 text-[#8e8888] shadow-[#8e8888] text-[16px] leading-7 ">
                We give full guidance on the detailed steps you need to have before departure including ticketing and booking services which are vital to the pre departure step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
