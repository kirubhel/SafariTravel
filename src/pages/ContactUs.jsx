import React from "react";
import ContactUs from "../componenets/ContactUs";
import { GrMail } from "react-icons/gr";
import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function ContactUss() {
  return (
    <div className="m-0 p-0 ">
      <div className="contactu px-[15px] mx-auto flex items-center h-[30vh]">
        <div className="flex flex-wrap mx-[15px]">
          <div className="grid grid-cols-1">
            <div>
              <h2 className="uppercase text-[70px] font-black m-0 pl-[100px] text-twhite">
                contact
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[80px] my-[80px]">
        <div className="w-[100%]">
          <div className="flex justify-center">
            <p className=" font-normal text-[24px] text-[#555] shadow-[#555]">
              Feel free to drop an inqury by filling out the contact form below
            </p>
          </div>
          <ContactUs />
        </div>
      </div>

      <div className="conhot py-[80px] px-[20px] mt-[70px]">
        <div>
          <div className="flex justify-around">
            <div>
              <div className="flex justify-center">
                <GrMail className="w-8 h-8 " />
              </div>

              <p className="text-back mt-[30px] text-center text-[24px] font-semibold  uppercase  ">
                Email
              </p>

              <ul className="list-none  decoration-none text-[#17171b] text-[18px] font-semibold text-center leading-8 shadow-[#000]">
                <li>
                  <a href="mailto:Horizoneducationinfo@gmail.com">
                    safarieducationinfo@gmail.com
                  </a>
                </li>
                <li>
                  <a href="mailto:Applyhorizons@gmail.com">
                    Applysafaris@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex justify-center">
                <BsTelephoneFill className="w-8 h-8" />
              </div>
              <p className="text-back mt-[30px] text-center text-[24px] font-semibold  uppercase  ">
                hotline
              </p>

              <ul className="list-none  decoration-none text-[#17171b] text-[12px] font-semibold text-center leading-8 shadow-[#000]">
                <li>
                  <a href="mailto:Horizoneducationinfo@gmail.com">
                    +8613260619181(China )telegram/WhatsApp)
                  </a>
                </li>
                <li>
                  <a href="mailto:Applyhorizons@gmail.com">
                    📲+251967552099 (Addis Abeba ) 📲+251940199064(Addis Abeba )
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex justify-center">
                <MdLocationOn className="w-8 h-8 flex justify-center" />
              </div>
              <p className="text-back mt-[30px] text-center text-[24px] font-semibold  uppercase  ">
                adress
              </p>

              <ul className="list-none  decoration-none text-[#17171b] text-[15px] font-semibold text-center leading-8 shadow-[#000]">
                <li>
                  <a href="mailto:Horizoneducationinfo@gmail.com">
                    Office 1: Bole berhane adera building, 1st floor.
                  </a>
                </li>
                <li>
                  <a href="mailto:Applyhorizons@gmail.com">
                    Office 2: 1543 lilburn road Atlanta Georgia
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-[80px]">
        <MapContainer
          center={[9.0113403, 38.7664455]}
          zoom={20}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[9.0113403, 38.7664455]}>
            <Popup>
              Safari Educational <br />
              Concultancy.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default ContactUss;
