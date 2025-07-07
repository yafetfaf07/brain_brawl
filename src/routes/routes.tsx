import { createBrowserRouter } from "react-router";
import SignUpPage from "../pages/signup";
import Dashboard from "../pages/dashboard";
import Groups from "@/pages/groups";
const routes = createBrowserRouter([
  {
    path: "/",
    element:<SignUpPage />
  },
 
  {
    path: "/dashboard",
    element:<Dashboard /> 
  },
  {
    path:"/groups",
    element:<Groups />
  }
]);
export default routes;