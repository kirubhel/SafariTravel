import React, { useState } from "react";
import axios from "axios";
import Alert from '../componenets/modal'


function BecomeAnAgent() {
  const [showAlert, setShowAlert] = React.useState(false);
  const [showAlert2, setShowAlert2] = React.useState(false);

  const [name, setName] = useState("");
  const [contact1, setContact1] = useState("");
  const [contact2, setContact2] = useState("");
  const [email, setEmail] = useState("");
  const [wdas, setWdas] = useState("");

  const onchangealert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 10000);
  };
  const onchangealert2 = () => {
    setShowAlert2(true);
    setTimeout(() => {
      setShowAlert2(false);
    }, 10000);
  };

  const onChangeagentName = (e) => {
    setName(e.target.value);
  };
  const onChangeagentEmail = (e) => {
    setEmail(e.target.value);
  };
  const onchangeagentContact = (e) => {
    setContact1(e.target.value);
  };
  const onchangeagentContact2 = (e) => {
    setContact2(e.target.value);
  };
  const onchangeagentWdas = (e) => {
    setWdas(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const agentObject = {
      name: name,
      email: email,
      contact2: contact2,
      contact1: contact1,
      wdas: wdas,
      referalCode:'',
      password:''
    };
    if (name!==''&& email!=='' && contact1!=='' && contact2!=='' && wdas!==''){
    axios
      .post("http://localhost:4000/agents/create", agentObject)
      .then((res) => {
        onchangealert();
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        onchangealert2();
      });
    setName("");
    setEmail("");
    setContact2("");
    setContact1("");
    setWdas("");
    }else {
      onchangealert2();
    }
  };
  return (
    <div className="m-0 p-0 ">
      <div className={!showAlert ? "hidden" : ""}>
        <Alert color={true} message="Successfully Registerd as an agent please check your emial to get your password!!!" />
      </div>
      <div className={!showAlert2 ? "hidden" : ""}>
        <Alert color={false} message="Something got wrong!!! Please try again" />
      </div>
      <div className="bagent px-[15px] mx-auto flex items-center h-[30vh]">
        <div className="flex flex-wrap mx-[15px]">
          <div className="grid grid-cols-1">
            <div>
              <h2 className="uppercase text-[70px] font-black m-0 pl-[100px] text-twhite">
                Safari agent
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[80px] ">
        <div className=" flex-wrap ">
          <div className="w-[100%] ">
            <div>
              <h2 className=" flex justify-center text-[#242424] uppercase text-[47px] font-black ">
                Safari Education Agent Program
              </h2>
              <p className="flex justify-center font-medium text-[#555] text-[24px] mt-[20px] text-center">
                Learn and Earn with us
              </p>
              <p className="flex justify-center font-medium text-center font-[24px] text-[#555] mt-[20px]">
                Refer students online using your personal link and earn from
                anywhere you are. To have your
                <br />
                personal link apply now or visit our office.
              </p>
            </div>
          </div>
        </div>

        <div className=" flex-wrap ">
          <div className="mt-[60px] w-[100%]">
            <div className="text-center px-28px py-0">
              <p className="flex justify-center uppercase mt-[20px] mb-[5px] font-medium">
                Promote a trusted service loved by thousands and make profits
              </p>
            </div>
            <div className="text-center px-28px py-0">
              <p className="flex justify-center uppercase mt-[20px] mb-[5px] font-medium">
                Apply to be our agent or Come to our office to be an agent
              </p>
            </div>
          </div>
        </div>

        <div className=" flex-wrap ">
          <div className=" w-[100%]">
            <div className="text-center px-28px py-0">
              <p className="flex justify-center uppercase mt-[20px] mb-[5px] font-medium">
                ONCE THE PROCESS IS SUCCESSFULLY COMPLETED 4000 BIRR
              </p>
            </div>
            <div className="text-center px-28px py-0">
              <p className="flex justify-center uppercase mt-[20px] mb-[5px] font-medium">
                GET 1000 BIRR IN ADVANCE FOR 1 STUDENT REFERRAL
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#e5e5e5] w-[100%] mx-auto px-[15px]">
        <div className="py-[50px] px-0 flex-wrap -mx-[15px] w-[100%]">
          <h2 className="my-0 mx-auto flex  justify-center uppercase text-[47px] font-black text-[#242424]">
            commission
          </h2>

          <div>
            <div className="flex justify-center items-center mt-[30px] mx-auto ">
              <table className="table-fixed   max-w-[85%] w-[100%]  ">
                <thead className="  h-[7vh] text-twhite font-medium text-lg  bg-gradient-to-r from-back to-bback">
                  <tr>
                    <th>LEVEL</th>
                    <th>No OF REFFERAL</th>
                    <th>BEFORE VISA</th>
                    <th>AFTER VISA</th>
                    <th>TOTAL</th>
                    <th>BONUS</th>
                  </tr>
                </thead>
                <tbody className="text-[#626262] font-medium text-xl text-center ">
                  <tr className="h-[6vh]">
                    <td>Abysinnia</td>
                    <td>1 referral</td>
                    <td>1,000 Birr</td>
                    <td>4,000 Birr</td>
                    <td>Up to 5,000 Birr</td>
                    <td>100 Birr</td>
                  </tr>
                  <tr className="bg-twhite h-[6vh]">
                    <td>Noble</td>
                    <td>5 referrals</td>
                    <td>5,000 Birr</td>
                    <td>20,000 Birr</td>
                    <td>Up to 25,000 Birr</td>
                    <td>350 Birr</td>
                  </tr>
                  <tr className="h-[6vh]">
                    <td>Lord</td>
                    <td>10 referrals</td>
                    <td>10,000 Birr</td>
                    <td>40,000 Birr</td>
                    <td>Up to 50,000 Birr</td>
                    <td>1000 Birr</td>
                  </tr>
                  <tr className="bg-twhite h-[6vh]">
                    <td>Queen</td>
                    <td>20 referrals</td>
                    <td>20,000 Birr</td>
                    <td>80,000 Birr</td>
                    <td>Up to 100,000 Birr</td>
                    <td>2000 Birr</td>
                  </tr>
                  <tr className="h-[6vh]">
                    <td>King</td>
                    <td>40 referrals</td>
                    <td>40,000 Birr</td>
                    <td>160,000 Birr</td>
                    <td>Up to 200,000 Birr</td>
                    <td>3500 Birr</td>
                  </tr>
                  <tr className="bg-twhite h-[6vh]">
                    <td>Saga</td>
                    <td>60 referrals</td>
                    <td>60,000 Birr</td>
                    <td>180,000 Birr</td>
                    <td>Up to 240,000 Birr</td>
                    <td>6000 Birr</td>
                  </tr>
                  <tr className="h-[6vh]">
                    <td>Epic</td>
                    <td>80 referrals</td>
                    <td>80,000 Birr</td>
                    <td>320,000 Birr</td>
                    <td>Up to 400,000 Birr</td>
                    <td>9000 Birr</td>
                  </tr>
                  <tr className="bg-twhite h-[6vh]">
                    <td>Legend</td>
                    <td>100 referrals</td>
                    <td>100,000 Birr</td>
                    <td>400,000 Birr</td>
                    <td>Up to 500,000 Birr</td>
                    <td>15,000 Birr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="flex justify-center text-xl mt-3 text-[#2e2d32]">
              <b>
                For agents under 18 years old we need Parental confirmation.
              </b>
            </p>
          </div>
        </div>
      </div>

      <div className="join mb-[80px] py-[80px] w-[100%]">
        <div className="flex-wrap">
          <div>
            <div>
              <div>
                <h2 className="flex justify-center uppercase text-[47px] font-black text-twhite">
                  JOIN OUR AFILIATE PROGRAMS
                </h2>

                <p className="text-center text-[24px] font-medium  text-twhite">
                  Anyone can be our agent and work with us
                  <br />
                  Contact us for the detailed information
                </p>

                <div className=" my-auto mx-0 mt-6 flex justify-center ">
                  <form className="affiliates-form">
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <div className="flex-grow ">
                        <input
                          type="text"
                          className="text-[18px] py-[8px] px-[20px] font-semibold text-[#7f7f7f] rounded-sm"
                          name="name"
                          placeholder="Name"
                          value={name}
                          onChange={onChangeagentName}
                        />
                      </div>
                      <div className="flex-grow ">
                        <input
                          type="text"
                          className="text-[18px] py-[8px] px-[20px] font-semibold text-[#7f7f7f] rounded-sm"
                          name="phone"
                          placeholder="Contact Number 1"
                          value={contact1}
                          onChange={onchangeagentContact}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <div className="flex-grow">
                        <input
                          type="text"
                          className="text-[18px] py-[8px] px-[20px] font-semibold text-[#7f7f7f] rounded-sm"
                          name="phone_1"
                          placeholder="Contact Number 2"
                          value={contact2}
                          onChange={onchangeagentContact2}
                        />
                      </div>
                      <div className="flex-grow">
                        <input
                          type="email"
                          className="text-[18px] py-[8px] px-[20px] font-semibold text-[#7f7f7f] rounded-sm"
                          name="email"
                          placeholder="Email Address"
                          value={email}
                          onChange={onChangeagentEmail}
                        />
                      </div>
                    </div>
                    <div className="grid grid-rows-2 gap-0">
                      <label className="text-twhite font-medium text-[1.2rem]">
                        Where did u hear about us?
                      </label>
                      <div className="">
                        <select
                          value={wdas}
                          onChange={onchangeagentWdas}
                          className="text-[18px] py-[8px] px-[20px] w-[100%] font-semibold text-[#7f7f7f] rounded-sm"
                        >
                          <option>Select ...</option>
                          <option>Social Media</option>
                          <option>Agent</option>
                          <option>Safari Students</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="flex justify-center mt-12">
                  <button
                    onClick={onSubmit}
                    className=" bg-twhite hover:bg-blue-700 hover:text-twhite hover:bg-back  text-back  py-[8px] px-[30px]  text-[20px] shadow-twhite  rounded-3xl"
                  >
                    BECOME SAFARI AGENT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeAnAgent;
