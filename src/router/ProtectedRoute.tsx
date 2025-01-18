import { Outlet, useNavigate } from "react-router";
import useAuthStore from "../stores/authStore";

const ProtectedRoute = () => {
  const accessToken = useAuthStore((state) => state.accessToken);

  let navigate = useNavigate();

  if (!accessToken) {
    alert("로그인이 필요한 페이지입니다.");
    navigate("/signIn");
  }

  return <Outlet />;
};

export default ProtectedRoute;
