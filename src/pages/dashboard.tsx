import DashBoardCard from "@/components/DashBoardCard";
import DashboardNotify from "@/components/DashboardNotify";
import InvitedDashboardCard from "@/components/InvitedDashboardCard";
import { Button } from "@/components/ui/button";
import { supabase } from "@/utils/supabase";
import { useNavigate } from "react-router";
import createGroup from "@/services/groupCreate";
import { jwtDecode } from "jwt-decode";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Define the type for the Supabase JWT payload
type SupabaseToken = {
  sub: string; // The user ID
  exp: number;
  iat: number;
};

// Define the type for the data returned from the Supabase query
type UserGroups = {
  role: string;
  group: {
    id: string;
    name: string;
    description: string;
  };
};

const Dashboard = () => {
  const navigate = useNavigate();
  // State variables for user and group data
  const [uid, setuid] = useState<string>("");
  const [gname, setgname] = useState<string>("");
  const [gdesc, setgdesc] = useState<string>("");
  const [name, setname] = useState<string>("");
  const [gdata,setgdata]=useState<boolean>(true);
  // Correctly initialize the groups state as an empty array
  const [groups, setgroups] = useState<UserGroups[]>([]);

  // Function to handle user logout
  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Error: ", error);
    } else {
      localStorage.clear();
      navigate("/");
      console.log("successfully signed out");
    }
  };

  // useEffect hook to fetch user data and groups on component mount
  useEffect(() => {
    async function getUserId() {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("No token found.");
        return;
      }

      const decoded: SupabaseToken = jwtDecode(token);

      // Step 1: Find the user in the "user" table using the JWT sub (uid)
      const { data: userData, error: userError } = await supabase
        .from("user")
        .select("id, name") // Fetch only the required fields
        .eq("uid", decoded.sub)
        .single(); // Use .single() as we expect only one user

      if (userError || !userData) {
        console.error("User ID fetching failed or user not found:", userError);
        return;
      }

      setuid(userData.id);
      setname(userData.name);

      // Step 2: Fetch the user's groups with roles
      const { data: userGroups, error: groupError } = await supabase
        .from("usergroup")
        .select(
          `
            role,
            group:group!inner(id, name, description)
          `
        )
        .eq("uid", userData.id);
        
      if (groupError) {
        console.error("Error fetching groups with roles:", groupError);
      } else if (userGroups) {
        console.log("Groups with roles for user:", userGroups);
        setgdata(false);
        // Assert the data type to match the state type
        setgroups(userGroups as unknown as UserGroups[]);
      }
    }
    getUserId();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <div className="flex justify-between m-3">
        <h2 className="pl-2 pt-1 text-3xl font-bold md:pt-3 md:pl-3">
          Hello, {name}
        </h2>

        <Button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </Button>
      </div>
      <div className="flex flex-col md:flex-row justify-between p-2">
        <span className="pb-2 text-2xl font-normal">
          Manage your groups and collaborations
        </span>

        <Dialog>
          <DialogTrigger>
            <Button className="bg-gradient-to-r from-violet-500 to-indigo-400 m-2 w-[93%] md:w-30">
              + Create group
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Group Information</DialogTitle>
              <DialogDescription>
                <span className="pt-2">Name</span>
                <Input
                  className=" mb-2"
                  onChange={(e) => setgname(e.target.value)}
                />
                <span className="">Description</span>
                <Input
                  className="mt-2"
                  onChange={(e) => setgdesc(e.target.value)}
                />
                <Button
                  className="bg-gradient-to-r from-violet-500 to-indigo-400 mt-2 w-[93%] md:w-30"
                  onClick={async () => {
                    await createGroup(gname, gdesc, uid);
                  }}
                >
                  Create group
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col items-center justify-around md:flex-row">
        <DashboardNotify />
        <DashboardNotify />
        <DashboardNotify />
      </div>
      <h2 className="text-center text-2xl font-semibold m-5">My Groups</h2>

      <div className="flex flex-col items-center justify-center md:flex-row flex-wrap md:justify-normal ">
        {/* Conditional rendering for groups */}

        {
          gdata ? (<Skeleton className="w-[93%] md:w-[400px] rounded-full bg-red-400"/>) :groups.length > 0 ? (
            groups.map((d) => (
              <DashBoardCard
              id={d.group.id}
                key={d.group.id} // Use the group ID as the key
                names={d.group.name}
                role={d.role}
                description={d.group.description}
              />
            ))
          ) : (
            <p className="text-center text-lg mt-10">No groups found.</p>
          )
        }
      
      </div>
      <h2 className="text-center text-2xl font-semibold m-5">
        Group Invitations
      </h2>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <InvitedDashboardCard />
      </div>
    </div>
  );
};

export default Dashboard;