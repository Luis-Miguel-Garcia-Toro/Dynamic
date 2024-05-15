import { useEffect, useRef } from "react";
import { useUIStore } from "../../../../../../common/infrastructure/store/ui.store";
import { categoryStyle } from "../../../../domain";

export const useHeader = () => {
  const configPage = useUIStore((state) => state.configPages);
  const changeHeaderHeight = useUIStore((state) => state.changeHeaderHeight);

  const showHeaderCategories =
    configPage?.categories?.categoriesStyle === categoryStyle.HEADER;
  const headerRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const newHeight = entry.target.getBoundingClientRect().height;
        changeHeaderHeight(newHeight);
      }
    });

    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    headerRef,
    showHeaderCategories,
  };
};
