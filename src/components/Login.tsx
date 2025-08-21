import { useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";
import { supabase } from "@/utils/supabase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error(error);
      return;
    }

    if (data.session) {
console.log("User Info: ",data);

      localStorage.setItem("accessToken", data.session.access_token);
      localStorage.setItem("refreshToken", data.session.refresh_token);

      navigate("/dashboard");
    }
  };

  return (
    <div>
      <div className="flex flex-col mb-5">
        <span className="pb-2 font-bold">Email</span>
        <input
          className="border-1 rounded-sm border-gray-300 p-2"
          type="text"
          placeholder="Nate123"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col mb-5 ">
        <span className="pb-2 font-bold">Password</span>
        <input
          className="border-1 rounded-sm border-gray-300 p-2"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex justify-center items-center">
        <Button
          className="bg-gradient-to-r from-blue-500 to-purple-400 w-40"
          onClick={login}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
