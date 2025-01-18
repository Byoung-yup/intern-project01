import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../api";
import useAuthStore from "../../stores/authStore";

export const useUser = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  return useQuery({ queryKey: ["user"], queryFn: () => getUser(accessToken), enabled: !!accessToken });
};
