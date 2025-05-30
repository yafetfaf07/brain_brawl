import React, { useState } from 'react'

const Login = () => {
     const [usersname, setusername] = useState<string>("");
      const [email, setemail] = useState<string>("");
      const [password, setpassword] = useState<string>("");
  return (
    <div className=" w-[600px] ">
    <div className="flex flex-col mt-4 ml-4 mr-4">
      <span className="pb-2 font-bold">Username</span>
      <input className="border-1 rounded-sm border-gray-300 p-2"
        type="text"
        placeholder="Nate123"
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />
    </div>
    {/* <div className="flex flex-col mt-4 ml-4 mr-4">
      <span className="pb-2 font-bold">Email</span>
      <input
      className="border-1 rounded-sm border-gray-300 p-2"
      type="email" placeholder="Natyy@example.com" />
    </div> */}
    <div className="flex flex-col mt-4 ml-4 mr-4">
      <span className="pb-2 font-bold">Password</span>
      <input
      className="border-1 rounded-sm border-gray-300 p-2"
      type="password" placeholder="Nate123" />
    </div>
    <div className="flex justify-center items-center">
    <button
    className="bg-gradient-to-r from-blue-500 to-purple-400 text-white p-2 w-[100%] mt-4 font-bold ml-4 mr-4 mb-4 rounded-lg "
      onClick={() => {
        console.log("User name", usersname);
      }}
    >Login</button>
    </div>

  </div>
  )
}

export default Login