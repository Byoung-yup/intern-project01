import { create } from "zustand";

interface AuthState {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
}

const useAuthStore = create<AuthState>()((set) => ({
  accessToken: "",
  setAccessToken: (accessToken) => set({ accessToken }),
}));

export default useAuthStore;
