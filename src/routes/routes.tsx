// routes.tsx
import { createBrowserRouter, Navigate } from "react-router";
import SignUpPage from "../pages/signup";
import Dashboard from "../pages/dashboard";
import Groups from "@/pages/groups";
import ProtectedRoute from "./protectedRoute"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />, // default route
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/groups/:id",
    element: (
      <ProtectedRoute>
        <Groups />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <SignUpPage />,
  },
]);

export default routes;
