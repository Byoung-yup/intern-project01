const CommonHeader: React.FC = () => {
  return (
    <div className="w-full h-[60px] px-6 py-2 flex justify-end items-center bg-white">
      <div className="flex gap-6">
        <button className="border-none rounded-lg bg-green-500 text-white font-semibold p-2">로그인</button>
        <button className="border-none rounded-lg bg-green-500 text-white font-semibold p-2">로그아웃</button>
      </div>
    </div>
  );
};

export default CommonHeader;
