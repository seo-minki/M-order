"use client";

import Image from "next/image";
import HomeIcon from "public/images/icons/home.png";
import CartIcon from "public/images/icons/cart.png";
import { useRouter } from "next/navigation";

const Header = () => {

  const router = useRouter();
  
  const handleClick = (path: string) => {
    router.push(path, {scroll: false});
  }
  return (
    <header className="fixed left-0 top-0 w-full h-[72px] flex items-center justify-between px-4 bg-white">
      <Image src={HomeIcon} alt="로고" width={32} height={32} priority={true} style={{ width: 32, height: 32 }} onClick={() => handleClick("/")} />
      <Image src={CartIcon} alt="로고" width={32} height={32} priority={true} style={{ width: 32, height: 32 }} onClick={() => handleClick("/cart")} />
    </header>
  )
}

export default Header;