"use client";

import useCustomRouter from "@/utils/router";
import Image from "next/image";
import localFont from "next/font/local";
import CoffeeLogo from "public/images/coffee-logo.png";
import ButtonComponent from "@/components/ButtonComponent";

const eduQLDBeginner = localFont({
  src: "../../public/fonts/EduQLDBeginner-VariableFont_wght.ttf",
  display: "swap",
  weight: "400 700",
});

const Home = () => {
  const { navigate } = useCustomRouter();

  const handleStart = (): void => {
    navigate("/menu");
  };

  return (
    <div
      className="h-full w-full fixed py-8 flex items-center flex-col justify-between overflow-auto home"
      onClick={handleStart}
    >
      <section className="relative">
        <Image
          src={CoffeeLogo}
          alt="커피로고"
          width={200}
          priority={true}
          style={{ width: 200, height: "auto" }}
        />
        <h1 className={`text-xl mt-6 ${eduQLDBeginner.className}`}>
          Welcome to Coffee Bar
        </h1>
      </section>

      <ButtonComponent
        classNames="text-xl relative font-black up-down"
        buttonText="터치를 하여 주문을 시작해 주세요"
        handleClick={handleStart}
      />
    </div>
  );
};

export default Home;
