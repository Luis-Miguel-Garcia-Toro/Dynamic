import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa6"
import Styles from "./scss/scroll-to-top-button.module.scss"

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={Styles.ScrollToTopButton}>
      {isVisible && (
        <button onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};
