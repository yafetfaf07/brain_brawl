import { useState } from 'react'
import { Button } from './ui/button';
import { useNavigate } from 'react-router';
import { supabase } from "@/utils/supabase";

const Login = () => {
  const navigate = useNavigate();
     const [email, setemail] = useState<string>("");
      const [password, setpassword] = useState<string>("");

      const login = async() => {
        const {data,error} = await supabase.auth.signInWithPassword({
          email:email,
          password:password
        })
        if(data) {
          navigate('/dashboard');
        }
        if(error) {
          console.error(error);
        }
      }

  return (
      <div className=" ">
      <div className="flex flex-col mb-5">
        <span className="pb-2 font-bold">Email</span>
        <input className="border-1 rounded-sm border-gray-300 p-2"
          type="text"
          placeholder="Nate123"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </div>
    
      <div className="flex flex-col mb-5 ">
        <span className="pb-2 font-bold">Password</span>
        <input
        className="border-1 rounded-sm border-gray-300 p-2"
        type="password" onChange={(e) => setpassword(e.target.value)} />
      </div>
      <div className="flex justify-center items-center">
     
      <Button className='bg-gradient-to-r from-blue-500 to-purple-400 w-40' onClick={() => {
        login();
}}>Login</Button>
      </div>
    </div>
  )
}

export default Login