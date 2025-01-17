import React from "react";

const SignUp: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Container />
    </div>
  );
};

const Container: React.FC = () => {
  return (
    <form className="py-3 px-4 flex flex-col gap-4 border-[1px] border-black">
      <p className="text-center">
        <span className="text-black font-bold text-4xl">회원가입</span>
      </p>
      <input type="text" placeholder="아이디" className="p-2 border-[1px] border-black" />
      <input type="password" placeholder="비밀번호" className="p-2 border-[1px] border-black" />
      <input type="text" placeholder="닉네임" className="p-2 border-[1px] border-black" />
      <button className="p-2 bg-black text-white font-bold">가입하기</button>
    </form>
  );
};

export default SignUp;
