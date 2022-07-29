import React from "react";

const Alert = ({ color,message }) => {
  const [showAlert, setShowAlert] = React.useState(true);

  
  return (
    <>
      {showAlert ? (
        <div
          className={
            !color?"text-white fixed z-50 right-4 px-6 py-4 border-0 top-7 rounded shadow-bred  mb-4 bg-bred": 
            "text-white fixed z-50 right-4 px-6 py-4 border-0 top-7 rounded shadow-back  mb-4 bg-back"
          }
        >
          <span className="text-xl text-twhite inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block text-twhite align-middle mr-8">
            <b className="capitalize"> {message} </b>
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span className="text-twhite">×</span>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Alert