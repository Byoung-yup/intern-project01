import { Link } from "react-router";
import useAuthStore from "../../stores/authStore";

const CommonHeader: React.FC = () => {
  const accessToken = useAuthStore((state) => state.accessToken);

  return (
    <div className="w-full h-[60px] px-6 py-2 flex justify-end items-center bg-white">
      {accessToken ? (
        <div className="flex gap-6">
          <Link to="/myPage" className="border-none rounded-lg bg-green-500 text-white font-semibold p-2">
            마이페이지
          </Link>
          <button className="border-none rounded-lg bg-green-500 text-white font-semibold p-2">로그아웃</button>
        </div>
      ) : (
        <div className="flex gap-6">
          <Link to="/signIn" className="border-none rounded-lg bg-green-500 text-white font-semibold p-2">
            로그인
          </Link>
          <Link to="signUp" className="border-none rounded-lg bg-green-500 text-white font-semibold p-2">
            회원가입
          </Link>
        </div>
      )}
    </div>
  );
};

export default CommonHeader;
