"use client";

import { useRouter } from "next/navigation";

const useCustomRouter = () => {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path, { scroll: false });
  };

  return {
    navigate,
  };
};

export default useCustomRouter;
