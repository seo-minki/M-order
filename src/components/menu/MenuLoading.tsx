import LottieAnimation from "@/components/LottieAnimation";

import loadingAnimation from "public/lottie/menu-loading.json";

const MenuLoading = () => {
  return (
    <div className="w-full h-full fixed left-0 top-0 bg-[rgba(0,0,0,0.5)] z-20">
      <LottieAnimation animationData={loadingAnimation} loop={true} autoplay={true}
                       className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  )
}

export default MenuLoading;