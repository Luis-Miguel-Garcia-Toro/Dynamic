import { useEffect, useRef } from "react";
import { useAppStore } from "../../../../../../common/infrastructure/store";
import { categoryStyle } from "../../../../domain";

export const useHeader = () => {
  const configPage = useAppStore((state) => state.configPages);
  const changeHeaderHeight = useAppStore((state) => state.changeHeaderHeight);

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
