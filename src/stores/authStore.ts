import { create } from "zustand";

interface AuthState {
  isLogin: boolean;
  setLogin: () => void;
  setLogout: () => void;
}

const useAuthStore = create<AuthState>()((set) => ({
  isLogin: false,
  setLogin: () => set(() => ({ isLogin: true })),
  setLogout: () => set(() => ({ isLogin: false })),
}));

export default useAuthStore;
