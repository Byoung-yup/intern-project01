import { Link } from "react-router";

const CommonHeader: React.FC = () => {
  return (
    <div className="w-full h-[60px] px-6 py-2 flex justify-end items-center bg-white">
      <div className="flex gap-6">
        <Link to="/signIn" className="border-none rounded-lg bg-green-500 text-white font-semibold p-2">
          로그인
        </Link>
        <Link to="signUp" className="border-none rounded-lg bg-green-500 text-white font-semibold p-2">
          로그아웃
        </Link>
      </div>
    </div>
  );
};

export default CommonHeader;
