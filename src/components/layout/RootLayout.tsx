import { Outlet } from "react-router";
import CommonHeader from "../header/CommonHeader";

const RootLayout = () => {
  return (
    <div>
      <CommonHeader />
      <Outlet />
    </div>
  );
};

export default RootLayout;
