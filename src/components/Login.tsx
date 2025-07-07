import { useState } from 'react'
import { Button } from './ui/button';
import { useNavigate } from 'react-router';
const Login = () => {
  const navigate = useNavigate();
     const [email, setemail] = useState<string>("");
      const [password, setpassword] = useState<string>("");
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
        type="password" placeholder="Nate123" />
      </div>
      <div className="flex justify-center items-center">
     
      <Button className='bg-gradient-to-r from-blue-500 to-purple-400 w-40' onClick={() => {
        navigate('/dashboard');
      }}>Login</Button>
      </div>
           <div className='flex mt-5 items-center justify-center'>
        <div className='w-30 h-[1px] bg-gray-400'>
        </div>
        <span className='text-gray-400 text-[15px]'>or sign with</span>
          <div className='w-30 h-[1px] bg-gray-400'>
        </div>
      </div>
        <div className='flex justify-around mt-5'>
        <div className='text-red-600  w-10 h-10 bg-amber-300 rounded-full flex justify-center items-center'></div>
        <div className='text-red-600  w-10 h-10 bg-amber-300 rounded-full flex justify-center items-center'>G</div>
        <div className='text-red-600  w-10 h-10 bg-amber-300 rounded-full flex justify-center items-center'>G</div>

        </div>
    </div>
  )
}

export default Login