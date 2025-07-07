import DashBoardCard from "@/components/DashBoardCard";
import DashboardNotify from "@/components/DashboardNotify";
import InvitedDashboardCard from "@/components/InvitedDashboardCard";
import { Button } from "@/components/ui/button";

const dashboard = () => {
  return (
    <div>
      <h2 className="pl-2 pt-1 text-3xl font-bold md:pt-3 pl-3">Dashboard</h2>
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

      <div className="flex flex-col items-center justify-center md:flex-row">
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

export default dashboard;
