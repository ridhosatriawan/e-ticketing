import { Navigate, createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import MasterTicket from "../pages/master/ticket";
import PrintTicket from "../pages/print-ticket";
import Report from "../pages/report";
import { GuardAuth, GuardLogin } from "./guard";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/dashboard" />,
    },
    {
      path: "/Login",
      element: (
        <GuardLogin>
          <Login />
        </GuardLogin>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <GuardAuth>
          <Dashboard />
        </GuardAuth>
      ),
    },
    {
      path: "/print-ticket",
      element: (
        <GuardAuth>
          <PrintTicket />
        </GuardAuth>
      ),
    },
    {
      path: "/report",
      element: (
        <GuardAuth>
          <Report />
        </GuardAuth>
      ),
    },
    {
      path: "/master-ticket",
      element: (
        <GuardAuth>
          <MasterTicket />
        </GuardAuth>
      ),
    },
  ]);

  return router;
};

export default Router;
