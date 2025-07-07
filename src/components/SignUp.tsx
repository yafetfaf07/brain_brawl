import React, { useEffect, useState } from "react";

const SignUp = () => {
  const [usersname, setusername] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");

  useEffect(() => {
    console.log("User name", usersname);
  }, [usersname]);
  return (
    <div className=" ">

      <div className="flex flex-col mb-5 ">
        <span className=" font-bold">Email</span>
        <input
        className="border-1 rounded-sm border-gray-300 p-2"
        type="email" placeholder="Natyy@example.com" />
      </div>
      <div className="flex flex-col mb-5 ">
        <span className="pb-2 font-bold">Password</span>
        <input
        className="border-1 rounded-sm border-gray-300 p-2"
        type="password" placeholder="Nate123" />
      </div>
      <div className="flex justify-center items-center">
      <button
      className="bg-gradient-to-r from-blue-500 to-purple-400 text-white rounded-lg p-3 font-bold md:w-[400px] "
        onClick={() => {
          console.log("User name", usersname);
        }}
      >Create Account</button>
      </div>
  
    </div>
  );
};

export default SignUp;
