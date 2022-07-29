import React from "react";
import logo from "../assets/LOGO.png";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
function Footer() {
  return (
    <div className="pt-[10px] pb-[20px]">
      <div className="w-[100%] px-[15px] mx-auto max-w-[80%]">
        <div>
          <div className="grid grid-cols-2 gap-8 -mx-[15px]">
            <div className="relative w-[100%] px-15px">
              <span className="flex justify-center items-center">
                <img
                  className="align-middle border-none w-[120px] h-30"
                  src={logo}
                  alt=""
                />
                <p className="ml-[30px] text-[1.2rem] font-semibold text-[#8e8888] mb-[1rem]">
                  We work with our licensed sister company in the USA, Safari
                  Education Consultancy
                </p>
              </span>
            </div>
            <div className="relative w-[100%] px-15px">
              <div className="">
                <p className="text-[1.2rem] font-semibold text-[#8e8888] mb-[1rem] text-right">
                  አድራሻ: 22 ከአክሱም ሆቴል ጎን ትጋት ህንፃ, 3ተኛ ፎቅ ሱ.ቁ F2-08-02, addis
                  ababa, Ethiopia
                  <br />
                  1543 lilburn rd Atlanta Georgia <br />
                </p>
              </div>

              <div>
                <ul className="mb-[1rem] list-none mt-0 text-[#242424] flex justify-end">
                  <li className="mr-4">
                    <a href="#">
                      {" "}
                      <FaFacebook className="h-6 w-6 hover:text-back" />
                    </a>
                  </li>
                  <li className="mr-4">
                    <a href="#">
                      {" "}
                      <FaTelegram className="h-6 w-6 hover:text-back" />
                    </a>
                  </li>
                  <li className="mr-4">
                    <a href="#">
                      {" "}
                      <FaInstagram className="h-6 w-6 hover:text-back" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-[50px] grid-rows-2 -mx-[15px]">
            <div className="">
              <ul className="list-none flex justify-start">
                <li className="list-none pr-[10px] pl-0 border-r-[#adadad] border-r-[2px]   text-[#8e8888] text-[1.2rem] font-semibold">
                  <a className="grey" href="#">
                    Terms of use
                  </a>
                </li>
                <li className="list-none pr-[10px] ml-[10px] pl-0 border-r-[#adadad] border-r-[2px]  text-[#8e8888] text-[1.2rem] font-semibold">
                  <a className="grey" href="#">
                    Accessiblity
                  </a>
                </li>
                <li className="list-none pr-[10px] ml-[10px] pl-0 border-r-[#adadad] border-r-[2px]  text-[#8e8888] text-[1.2rem] font-semibold">
                  <a className="grey" href="#">
                    Privacy and cookies
                  </a>
                </li>
                <li className="list-none pr-[10px] ml-[10px] pl-0   text-[#8e8888] text-[1.2rem] font-semibold">
                  <a className="grey" href="#">
                    Site map
                  </a>
                </li>
              </ul>

              <div className="copyright mt-10px">
                <p className="text-[#8e8888]  text-[1.2rem] font-semibold ">
                  © Copyright © 2020 Safari Education Consultancy. All Right
                  Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
