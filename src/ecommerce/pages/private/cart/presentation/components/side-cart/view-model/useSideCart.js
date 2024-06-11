import { useEffect, useRef, useState } from "react";
import {
  useEcommerceStore
} from "../../../../../../../common/infrastructure/store";

export const useSideCart = () => {
  const cart = useEcommerceStore((state) => state.cart);
  const toggleActiveSideCart = useEcommerceStore(
    (state) => state.toggleActiveSideCart
  );
  const configPage = useEcommerceStore((state) => state.configPages);
  const isActiveSideCart = configPage?.globals?.isActiveSideCart || false;

  const [isVisible, setIsVisible] = useState(isActiveSideCart);
  const [animationClass, setAnimationClass] = useState("");
  const sideCartRef = useRef(null);

  useEffect(() => {
    let timeoutId;

    if (isActiveSideCart) {
      setIsVisible(true);
      setAnimationClass("slide-in");
      document.body.classList.add("no-scroll");
    } else {
      setAnimationClass("slide-out");
      timeoutId = setTimeout(() => setIsVisible(false), 300);
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
      clearTimeout(timeoutId);
    };
  }, [isActiveSideCart]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!isActiveSideCart) return;

      if (sideCartRef.current && !sideCartRef.current.contains(event.target)) {
        toggleActiveSideCart();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleActiveSideCart, isActiveSideCart]);

  return {
    animationClass,
    cart,
    isVisible,
    sideCartRef,
    toggleActiveSideCart,
  };
};
