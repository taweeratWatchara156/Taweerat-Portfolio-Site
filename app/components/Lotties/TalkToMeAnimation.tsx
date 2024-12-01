// components/LottieAnimation.tsx
import { useEffect, useRef } from "react";
import animationData from "../../../public/contact.json";
import Lottie from "lottie-web";

const TalkToMeAnimation = () => {
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

  return <div className="w-[100%] sm:w-[100%] lg:w-[85%]" ref={container}></div>;
};

export default TalkToMeAnimation;