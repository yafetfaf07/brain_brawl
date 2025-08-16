import { supabase } from "@/utils/supabase";
import  { useState } from "react";

const SignUp = () => {
  const [name, setname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");

const signup = async() => {
  const {data, error} = await supabase.auth.signUp({
    email:email,
    password:password
  })
  if(data.user) {
    console.log(data);
    const{data:datas}=await supabase.from('user').insert({name,email})
    if(datas) {
      console.log("Data saved successfully inside");
      
    }
  }
  else if(error) {
    console.log(error);
    
  }
}
  return (
    <div className=" ">
       <div className="flex flex-col mb-5 ">
        <span className=" font-bold">Name</span>
        <input
        className="border-1 rounded-sm border-gray-300 p-2"
        type="email" placeholder="John Doe" onChange={(e) => setname(e.target.value)} />
      </div>
      <div className="flex flex-col mb-5 ">
        <span className=" font-bold">Email</span>
        <input
        className="border-1 rounded-sm border-gray-300 p-2"
        type="email" placeholder="Natyy@example.com" onChange={(e) => setemail(e.target.value)} />
      </div>
      <div className="flex flex-col mb-5 ">
        <span className="pb-2 font-bold">Password</span>
        <input
        className="border-1 rounded-sm border-gray-300 p-2"
        type="password" placeholder="Nate123" onChange={(e) => setpassword(e.target.value)} />
      </div>
      <div className="flex justify-center items-center">
      <button
      className="bg-gradient-to-r from-blue-500 to-purple-400 text-white rounded-lg p-3 font-bold md:w-[400px] "
        onClick={() => {
          signup();
        }}
      >Create Account</button>
      </div>
  
    </div>
  );
};

export default SignUp;
