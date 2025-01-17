import { BrowserRouter, Route, Routes } from "react-router";
import App from "../App";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import CommonLayout from "../components/layout/CommonLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import RootLayout from "../components/layout/RootLayout";
import Dashboard from "../pages/dashboard/Dashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<App />} />
          </Route>

          <Route element={<PublicRoute />}>
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
