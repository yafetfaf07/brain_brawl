import { createBrowserRouter } from "react-router";
import SignUpPage from "../pages/signup";
import Dashboard from "../pages/dashboard";
import Groups from "@/pages/groups";
import AuthGuard from "@/pages/AuthGuard";

const routes = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <AuthGuard>
        <Dashboard />
      </AuthGuard>
    ),
  },
  {
    path: "/groups",
    element: (
      <AuthGuard>
        <Groups />
      </AuthGuard>
    ),
  },
  {
    path:'/',
    element:(
      <AuthGuard>
        <SignUpPage/>
      </AuthGuard>
    )
  }
]);

export default routes;
