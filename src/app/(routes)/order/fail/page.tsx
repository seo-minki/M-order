"use client";

import { motion } from "framer-motion";
import LottieAnimation from "@/components/LottieAnimation";
import animationData from "public/lottie/order-fail.json";
import ButtonComponent from "@/components/ButtonComponent";
import useCustomRouter from "@/utils/router";

const Fail = () => {
  const { navigate } = useCustomRouter();

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
        <p className="text-2xl font-bold text-center">주문이 실패하였습니다.</p>
        <ButtonComponent
          buttonText="홈으로 돌아가기"
          classNames="block rounded-xl bg-red-500 font-bold text-center text-xl text-white h-[72px] w-full absolute left-0 bottom-4 flex items-center justify-center"
          handleClick={() => navigate("/")}
        ></ButtonComponent>
      </motion.div>
    </div>
  );
};

export default Fail;
