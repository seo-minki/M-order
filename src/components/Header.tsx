"use client";

import useCustomRouter from "@/utils/router";
import Image, { StaticImageData } from "next/image";
import ButtonComponent from "./ButtonComponent";

interface NavigateOptions {
  imagePath: StaticImageData;
  routePath: string;
}

interface NavigateListOptions {
  navigateList: Array<NavigateOptions>;
}

const Header = ({ navigateList }: NavigateListOptions) => {
  const { navigate } = useCustomRouter();

  return (
    <header className="fixed left-0 top-0 w-full h-[72px] flex items-center justify-between px-4 bg-white z-10">
      {navigateList.map((item) => (
        <ButtonComponent
          classNames="w-[32px] h-[32px]"
          buttonText=""
          handleClick={() => navigate(item.routePath)}
          key={item.routePath}
        >
          <Image
            src={item.imagePath}
            alt="아이콘"
            width={32}
            height={32}
            priority={true}
            className="w-full"
          />
        </ButtonComponent>
      ))}
    </header>
  );
};

export default Header;
