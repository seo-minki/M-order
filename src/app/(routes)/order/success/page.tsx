"use client";

import { motion } from "framer-motion";
import LottieAnimation from "@/components/LottieAnimation";
import animationData from "public/lottie/order-success.json";
import ButtonComponent from "@/components/ButtonComponent";
import useCustomRouter from "@/utils/router";
import { useEffect, useState } from "react";
import { OrderListState } from "@/store/orderListAtom";
import { useResetRecoilState } from "recoil";

const Success = () => {
  const { navigate } = useCustomRouter();
  const [timer, setTimer] = useState<number>(10);
  const resetOrderList = useResetRecoilState(OrderListState);

  const goHomePage = (): void => {
    resetOrderList();
    navigate("/");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);

    if (timer <= 0) {
      clearInterval(interval);
      goHomePage();
    }

    return () => clearInterval(interval);
  }, []);

  const Timer = () => {
    return (
      <div className="w-8 h-8] border border-white rounded-full mr-2">
        {timer}
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full max-w-5xl mx-auto relative min-h-[inherit]"
      >
        <LottieAnimation
          animationData={animationData}
          loop={false}
          autoplay={true}
          className="w-full max-w-lg mx-auto"
        />
        <p className="text-2xl font-bold text-center">주문이 완료되었습니다.</p>
        <ButtonComponent
          buttonText="홈으로 돌아가기"
          classNames="block rounded-xl bg-blue font-bold text-center text-xl text-white h-[72px] w-full absolute left-0 bottom-4 flex items-center justify-center"
          handleClick={goHomePage}
        >
          <Timer></Timer>
        </ButtonComponent>
      </motion.div>
    </div>
  );
};

export default Success;
