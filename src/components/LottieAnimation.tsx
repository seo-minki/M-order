"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

interface LottieAnimationProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

const LottieAnimation = ({
  animationData,
  loop,
  autoplay,
  className,
}: LottieAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: loop,
        autoplay: autoplay,
        animationData: animationData,
      });

      return () => animation.destroy(); // 마운트 해제시 제거
    }
  }, [animationData, loop, autoplay]);

  return <div ref={containerRef} className={className}></div>;
};

export default LottieAnimation;
