import axios from "axios";
import { SignInForm, SignUpForm } from "../../types";
import axiosAuthInstance from "./axiosAuthInstance";

// 공통 에러 핸들러
const handleError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return error.response.data.message || "서버 오류가 발생했습니다.";
    } else {
      return "네트워크 오류가 발생했습니다. 다시 시도해주세요.";
    }
  }

  return error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다.";
};

export const signUp = async (data: SignUpForm): Promise<string> => {
  try {
    const response = await axiosAuthInstance.post("/register", data);

    if (response.status !== 200) {
      throw new Error("회원가입에 실패했습니다.");
    }

    return "회원가입이 완료되었습니다!";
  } catch (error) {
    throw new Error(handleError(error));
  }
};

export const signIn = async (data: SignInForm) => {
  try {
    const response = await axiosAuthInstance.post("/login", data);

    if (response.status !== 200) {
      throw new Error("로그인에 실패했습니다.");
    }

    return response.data;
  } catch (error) {
    throw new Error(handleError(error));
  }
};
