type BaseAuthForm = {
  id: string;
  password: string;
};

export type SignUpForm = BaseAuthForm & {
  nickname: string;
};

export type SignInForm = Pick<BaseAuthForm, "id" | "password">;
