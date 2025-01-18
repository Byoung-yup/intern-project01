import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router";

const queryClient = new QueryClient();

const CommonLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Outlet />
      </div>
    </QueryClientProvider>
  );
};

export default CommonLayout;
