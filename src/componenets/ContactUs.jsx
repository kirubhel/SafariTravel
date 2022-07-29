import React, { useState } from "react";
import contact from "../assets/contact.png";

import axios from "axios";
import Alert from "./modal";


function ContactUs() {

  const [showAlert, setShowAlert] = React.useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [comment, setComment] = useState('');


  const onchangealert =()=>{
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 10000);

  }

  
 
  const onChangecontactName = (e) => {
    setName( e.target.value );
  };
  const onChangecontactEmail = (e) => {
    setEmail( e.target.value );
  };
  const onchangecontactPhoneNumber = (e) => {
    setPhoneNumber(  e.target.value );
  };
  const onchangecontactComment = (e) => {
    setComment( e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const contactObject = {
      name: name,
      email: email,
      comment: comment,
      phoneNumber: phoneNumber,
    };
    axios
      .post("http://localhost:4000/contacts/create", contactObject)
      .then((res) => {
        onchangealert()
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setName("");
    setEmail("");
    setComment("");
    setPhoneNumber("");
  };

  return (
    <div className="py-[80px]">
 <div className={ !showAlert?'hidden':''}>
 <Alert  color='back' message='Successfully send your message !!!'/>
 </div>
 
      <div className="max-w-[80%] w-[100%] px-[15px] mx-auto">
        <div className="grid grid-cols-2 gap-4 -mx-[15px]">
          <div className="align-middle m-auto">
            <div className="w-[100%] m-auto">
              <img
                className="w-[100%] h-auto align-middle border-none"
                src={contact}
                alt=""
              />
            </div>
          </div>

          <div className="pt-[30px] ">
            <div>
              <h2 className="uppercase text-[60px] font-black text-[#242424]">
                contact us
              </h2>
              <div className="max-w-[75%]">
                <form className="mt-30px" id="contact-form" onSubmit={onSubmit}>
                  <div className="relative">
                    <input
                      type="text"
                      value={name}
                      onChange={onChangecontactName}
                      className="mb-[25px] h-[60px] text-[18px] py-[8px] px-[20px] text-[#7f7f7f]  my-[20px] mx-0 formc"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="phonenumber"
                      value={phoneNumber}
                      onChange={onchangecontactPhoneNumber}
                      className="mb-[25px] h-[60px] text-[18px] py-[8px] px-[20px] text-[#7f7f7f]  my-[20px] mx-0 formc"
                      id="number"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={onChangecontactEmail}
                      className="mb-[25px] h-[60px] text-[18px] py-[8px] px-[20px] text-[#7f7f7f]  my-[20px] mx-0 formc"
                      id="email"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                  <div className="relative">
                    <textarea
                      type="text"
                      value={comment}
                      onChange={onchangecontactComment}
                      className="mb-[25px] h-[60px] text-[18px] py-[8px] px-[20px] text-[#7f7f7f]  my-[20px] mx-0 formc"
                      id="comment"
                      rows="3"
                      placeholder="Comment"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-back hover:bg-blue-700 mt-7 text-twhite hover:bg-bdark  py-[8px] px-[30px] mr-[10px] text-[20px] shadow-twhite   rounded-2xl"
                  >
                    SUBMIT NOW!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
