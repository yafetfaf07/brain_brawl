import { supabase } from "@/utils/supabase";
import  { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const SignUp = () => {
  const navigate = useNavigate();
  const [name, setname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");
  useEffect(() => {
    if(accessToken && refreshToken) {
      navigate('/dashboard');
    }
  },[navigate, accessToken, refreshToken])

const signup = async() => {
  const {data, error} = await supabase.auth.signUp({
    email:email,
    password:password
  })
  if(data.user) {
    console.log(data.user.id);
    const uid=data.user.id
    const{data:datas}=await supabase.from('user').insert({name,email,uid})
    if(datas) {
      console.log("Data saved successfully inside");
      navigate('/dashboard');

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
