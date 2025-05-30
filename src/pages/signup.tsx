import React, { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import starLogo from "../assets/Pasted image.png";
const SignUpPage = () => {
  const [isSign, setisSign] = useState<boolean>(true);

  return (
    <div className=" bg-[#edefff]">
      <div className="w-[600px] flex justify-center  flex-col mt-[200px] shadow-md ">
        <div>
          <div className="flex items-center justify-between pl-2 pr-2">
            {isSign ? (
              <h2 className="text-2xl font-bold">Join the Adventure</h2>
            ) : (
              <h2 className="text-2xl font-bold">Welcome Back!</h2>
            )}

            <img src={starLogo} alt="" className="w-[40px]" />
          </div>
          <div></div>
        </div>
        <div className="flex  w-[100%] pl-4 pr-4 pt-2">
          {isSign ? (
            <div className="flex">
              <button
                className="bg-gray-200 p-2 w-[100%] rounded-l-sm"
                onClick={() => {
                  setisSign(false);
                }}
              >
                Login
              </button>
              <button
                className="bg-blue-200 p-2 w-[50%] rounded-r-sm text-black"
                onClick={() => {
                  setisSign(true);
                }}
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div className="flex">
              <button
                className="bg-gray-200 p-2 w-[50%] rounded-l-sm"
                onClick={() => {
                  setisSign(false);
                }}
              >
                Login
              </button>
              <button
                className="bg-blue-200 p-2 w-[50%] rounded-r-sm text-black"
                onClick={() => {
                  setisSign(true);
                }}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
        {isSign ? <SignUp /> : <Login />}
      </div>
    </div>
  );
};

export default SignUpPage;
