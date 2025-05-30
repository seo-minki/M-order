import LottieAnimation from '@/components/LottieAnimation';

import loadingAnimation from 'public/lottie/payment-widget.json';

const WidgetLoading = () => {
  return (
    <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[640px] h-[422px] rounded-xl bg-white">
      <LottieAnimation animationData={loadingAnimation} loop={true} autoplay={true} className="w-full h-full" />
    </div>
  );
};

export default WidgetLoading;
