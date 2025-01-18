import React from "react";
import { useForm } from "react-hook-form";
import { SignInForm } from "../../types";
import { signIn } from "../../api";
import useAuthStore from "../../stores/authStore";
import { useNavigate } from "react-router";

const SignIn: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Container />
    </div>
  );
};

const Container: React.FC = () => {
  const { register, handleSubmit } = useForm<SignInForm>();
  let navigate = useNavigate();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const onSubmit = async (data: SignInForm) => {
    try {
      const { accessToken } = await signIn(data);
      setAccessToken(accessToken);
      alert("로그인에 성공했습니다!");
      navigate("/");
    } catch (error) {
      alert(error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-3 px-4 flex flex-col gap-4 border-[1px] border-black">
      <p className="text-center">
        <span className="text-black font-bold text-4xl">로그인</span>
      </p>
      <input {...register("id")} type="text" placeholder="아이디" className="p-2 border-[1px] border-black" />
      <input
        {...register("password")}
        type="password"
        placeholder="비밀번호"
        className="p-2 border-[1px] border-black"
      />
      <button className="p-2 bg-black text-white font-bold">로그인</button>
    </form>
  );
};

export default SignIn;
