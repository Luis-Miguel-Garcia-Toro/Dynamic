import { useRef, useState } from "react";
import { useUIStore } from "../../../../../../../common/infrastructure/store/ui.store";

export const useHeaderCategories = () => {
  const configPage = useUIStore((state) => state.configPages);
  const { categories = {} } = configPage;

  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft += scrollOffset;
      setScrollLeft(container.scrollLeft);
    }
  };

  const showLeftArrow = scrollLeft > 0;
  const showRightArrow =
    containerRef.current &&
    containerRef.current.scrollWidth >
      containerRef.current.clientWidth + scrollLeft;

  return {
    containerRef,
    handleScroll,
    categories,
    showLeftArrow,
    showRightArrow,
  };
};
