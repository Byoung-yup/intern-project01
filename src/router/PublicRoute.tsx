import { Outlet, useNavigate } from "react-router";
import useAuthStore from "../stores/authStore";

const PublicRoute = () => {
  const accessToken = useAuthStore((state) => state.accessToken);

  let navigate = useNavigate();

  if (accessToken) {
    alert("로그인한 사용자는 접근할 수 없습니다.");
    navigate("/");
  }

  return <Outlet />;
};

export default PublicRoute;
