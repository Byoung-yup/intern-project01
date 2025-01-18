import { useForm } from "react-hook-form";
import { SignUpForm } from "../../types";
import { signUp } from "../../api";
import { useNavigate } from "react-router";

const SignUp: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Container />
    </div>
  );
};

const Container: React.FC = () => {
  const { register, handleSubmit } = useForm<SignUpForm>();
  let navigate = useNavigate();

  const onSubmit = async (data: SignUpForm) => {
    try {
      const successMessage = await signUp(data);
      alert(successMessage);
      navigate("/signIn");
    } catch (error) {
      alert(error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-3 px-4 flex flex-col gap-4 border-[1px] border-black">
      <p className="text-center">
        <span className="text-black font-bold text-4xl">회원가입</span>
      </p>
      <input {...register("id")} type="text" placeholder="아이디" className="p-2 border-[1px] border-black" />
      <input
        {...register("password")}
        type="password"
        placeholder="비밀번호"
        className="p-2 border-[1px] border-black"
      />
      <input {...register("nickname")} type="text" placeholder="닉네임" className="p-2 border-[1px] border-black" />
      <button className="p-2 bg-black text-white font-bold">가입하기</button>
    </form>
  );
};

export default SignUp;
