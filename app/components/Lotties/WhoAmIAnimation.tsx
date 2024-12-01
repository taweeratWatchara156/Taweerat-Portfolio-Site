// components/LottieAnimation.tsx
import { useEffect, useRef } from "react";
import animationData from "../../../public/whoami.json";
import Lottie from "lottie-web";

const WhoAmIAnimation = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      const animation = Lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => {
        animation.destroy();
      };
    }
  }, []);

  return <div className="w-[75%] sm:w-[100%] lg:w-[70%]" ref={container}></div>;
};

export default WhoAmIAnimation;