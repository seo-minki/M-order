"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ButtonComponent from "@/components/ButtonComponent";
import CoffeeLogo from "public/images/coffee-logo.png"

const Home = () => {
  const startButtonStyles: string  ="absolute bottom-[72px] left-1/2 translate-x-[-50%] w-9/12 h-[60px] rounded-xl text-[18px] text-white bg-[#232526]";
  const router = useRouter();

  const handleStart = ():void => {
    router.push("/payment");
  }
  return (
    <div className="min-h-screen relative">
      <section className="w-full py-6 flex items-center justify-center flex-col">
        <Image 
          src={CoffeeLogo}
          alt="커피로고"
          width={200}
          height={200}
        />
        <h1 className="text-xl mt-6">Welcome to Coffee Bar</h1>
      </section> 
      
      <ButtonComponent
        classNames={startButtonStyles}
        buttonText="ORDER"
        handleClick={handleStart}
      />
    </div>
  );
}

export default Home;