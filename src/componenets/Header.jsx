import React from "react";
import { HiMail } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import logo from "../assets/LOGO.png";
import {Link,useLocation } from 'react-router-dom'


function Header() {
  const location = useLocation();
  return (
    <div className="">
      <div className="bg-bdark h-10 border-bdark ">
        <div className="flex justify-between mx-auto w-[80%] py-3">
          <span className="text-twhite font-semibold text-sm">
            
            Select Language : AMH
          </span>
          <ul className="flex justify-evenly text-twhite">
            <li className="flex justify-center  mr-6">
              
              <HiMail className="w-6 h-6 mr-2 text-twhite" />
              <span className="text-sm"> safarieducationinfo@gmail.com</span>
            </li>
            <li className="flex justify-center">
              <BsTelephoneFill className="w-6 h-5 mr-2 text-twhite" />
              <span className="text-sm"> +251-919870929</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-28 bg-twhite ">
        <div className="py-3  flex justify-between items-center mx-auto w-[80%] ">
         

          <ul className="flex justify-between  text-tblack">
            <li className={location.pathname==="/"?"flex justify-center mr-6 underline underline-offset-8 decoration-back decoration-solid decoration-2 ":" flex justify-center mr-6 hover:underline underline-offset-8 decoration-back decoration-solid decoration-2 "}>
             <Link to="/">
              <span className="text-base font-semibold uppercase"> Home</span> </Link>
            </li>
            <li className=" flex justify-center mr-6 hover:underline underline-offset-8 decoration-back decoration-solid decoration-2 ">
              
              <a href="#services"><span className="text-base font-semibold uppercase">
                
                Service
              </span></a>
            </li>
            <li className={location.pathname==="/apply"?"flex justify-center mr-6 underline underline-offset-8 decoration-back decoration-solid decoration-2 ":" flex justify-center mr-6 hover:underline underline-offset-8 decoration-back decoration-solid decoration-2 "}>
              
              <Link  to="apply">
              <span className="text-base font-semibold uppercase">
                
                Apply Now
              </span>
              </Link>
            </li>
            <li className={location.pathname==="/becomeanagent"?"flex justify-center mr-6 underline underline-offset-8 decoration-back decoration-solid decoration-2 ":" flex justify-center mr-6 hover:underline underline-offset-8 decoration-back decoration-solid decoration-2 "}>
              <Link to="becomeanagent">
              
              <span className="text-base font-semibold uppercase">
                
                Work with us
              </span>
              </Link>
            </li>
            <li className={location.pathname==="/Contact"?"flex justify-center mr-6 underline underline-offset-8 decoration-back decoration-solid decoration-2 ":" flex justify-center mr-6 hover:underline underline-offset-8 decoration-back decoration-solid decoration-2 "}>
               <Link to="Contact">
              
            
              <span className="text-base font-semibold uppercase">
                
                contact us
              </span>
              </Link>
            </li>
          </ul>
          <button className="bg-back hover:bg-blue-700  text-twhite  py-1 h-8 px-5 rounded-xl">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
