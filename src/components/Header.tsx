"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import HomeIcon from "public/images/icons/home.png";
import CartIcon from "public/images/icons/cart.png";
import ButtonComponent from "./ButtonComponent";

const Header = () => {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path, { scroll: false });
  };
  return (
    <header className="fixed left-0 top-0 w-full h-[72px] flex items-center justify-between px-4 bg-white z-10">
      <ButtonComponent
        classNames="w-[32px] h-[32px]"
        buttonText=""
        handleClick={() => handleClick("/")}
      >
        <Image
          src={HomeIcon}
          alt="로고"
          width={32}
          height={32}
          priority={true}
          className="w-full"
        />
      </ButtonComponent>

      <ButtonComponent
        classNames="w-[32px] h-[32px]"
        buttonText=""
        handleClick={() => handleClick("/cart")}
      >
        <Image
          src={CartIcon}
          alt="로고"
          width={32}
          height={32}
          priority={true}
          className="w-full"
        />
      </ButtonComponent>
    </header>
  );
};

export default Header;
