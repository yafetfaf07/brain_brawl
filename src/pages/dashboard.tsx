import DashBoardCard from "@/components/DashBoardCard";
import DashboardNotify from "@/components/DashboardNotify";
import InvitedDashboardCard from "@/components/InvitedDashboardCard";
import { Button } from "@/components/ui/button";
import { supabase } from "@/utils/supabase";
import { useNavigate } from "react-router";
const Dashboard = () => {
  const navigate = useNavigate();

  const logout = async() => {
    const { error } = await supabase.auth.signOut();
    
    if(error) {
      console.error("Error: ",error);
    }
    else {
      localStorage.clear();
        navigate('/');
      console.log("successfully signed out");
      
    }
  }
  return (
    <div>
      <div className="flex justify-between m-3">
      <h2 className="pl-2 pt-1 text-3xl font-bold md:pt-3 md:pl-3">Dashboard</h2>
        <Button onClick={() => {
          logout();
        }}>Logout</Button>
      </div>
      <div className="flex flex-col md:flex-row justify-between p-2">
        <span className="pb-2 text-2xl font-normal">
          Manage your groups and collaborations
        </span>
        <Button className="bg-gradient-to-r from-violet-500 to-indigo-400 m-2 w-[93%] md:w-30">
          + Create group
        </Button>
      </div>

      <div className="flex flex-col items-center justify-around md:flex-row">
        <DashboardNotify />
        <DashboardNotify />
        <DashboardNotify />
      </div>
      <h2 className="text-center text-2xl font-semibold m-5">My Groups</h2>

      <div className="flex flex-col items-center justify-center md:flex-row flex-wrap md:justify-normal ">
        <DashBoardCard />
        <DashBoardCard />
        <DashBoardCard />
        <DashBoardCard />
        <DashBoardCard />

      </div>
      <h2 className="text-center text-2xl font-semibold m-5">
        Group Invitations
      </h2>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <InvitedDashboardCard />
        <InvitedDashboardCard />
        <InvitedDashboardCard />
      </div>
    </div>
  );
};

export default Dashboard;
