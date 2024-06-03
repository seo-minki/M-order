"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import localFont from "next/font/local"
import CoffeeLogo from "public/images/coffee-logo.png";
import ButtonComponent from "@/components/ButtonComponent";

const eduQLDBeginner = localFont({
  src: "../../public/fonts/EduQLDBeginner-VariableFont_wght.ttf",
  display: "swap",
  weight: "400 700",
})

const Home = () => {
  const router = useRouter();

  const handleStart = (): void => {
    router.push("/menu");
  };

  return (
    <div className="h-full w-full fixed py-8 flex items-center flex-col justify-between overflow-auto">
      <section>
        <Image src={CoffeeLogo} alt="커피로고" width={200} priority={true} style={{ width: 200, height: 'auto' }} />
        <h1 className={`text-xl mt-6 ${eduQLDBeginner.className}`}>Welcome to Coffee Bar</h1>
      </section>
      
      <ButtonComponent
        classNames="w-9/12 h-[60px] rounded-xl text-[18px] text-white bg-brown"
        buttonText="ORDER"
        handleClick={handleStart}
      />
    </div>
  );
};

export default Home;