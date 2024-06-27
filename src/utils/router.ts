"use client";

import { useRouter } from "next/navigation";

const useCustomRouter = () => {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  return {
    navigate,
  };
};

export default useCustomRouter;
