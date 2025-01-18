import axios from "axios";
import { SignInForm, SignUpForm, User } from "../../types";
import axiosAuthInstance from "./axiosAuthInstance";
import useAuthStore from "../../stores/authStore";

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

export const getUser = async (): Promise<User> => {
  const accessToken = useAuthStore((state) => state.accessToken);

  try {
    const response = await axiosAuthInstance.get("/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status !== 200) {
      throw new Error("유저 정보를 가져오는데 실패했습니다.");
    }

    return response.data;
  } catch (error) {
    throw new Error(handleError(error));
  }
};

export const updateUser = async (data: User): Promise<string> => {
  const accessToken = useAuthStore((state) => state.accessToken);

  try {
    const response = await axiosAuthInstance.patch("/profile", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        body: JSON.stringify({
          nickname: data.nickname,
          avatar: data.avatar,
        }),
      },
    });

    if (response.status !== 200) {
      throw new Error("유저 정보를 수정하는데 실패했습니다.");
    }

    return "유저 정보가 수정되었습니다!";
  } catch (error) {
    throw new Error(handleError(error));
  }
};
