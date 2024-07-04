import { useMemo } from "react";

export const colorsAvailable = {
  primary: {
    backgroundColor: "var(--color-primary)",
    color: "var(--color-white)",
  },
  secondary: {
    backgroundColor: "var(--color-secondary)",
    color: "var(--color-text)",
  },
  success: {
    backgroundColor: "var(--color-success)",
    color: "var(--color-white)",
  },
  warning: {
    backgroundColor: "var(--color-warning)",
    color: "var(--color-white)",
  },
  danger: {
    backgroundColor: "var(--color-danger)",
    color: "var(--color-white)",
  },
  flat: {
    backgroundColor: "var(--color-white)",
    color: "var(--color-text)",
  },
  "flat-primary": {
    backgroundColor: "transparent",
    color: "var(--color-primary)",
    border: "1px solid var(--color-primary)",
  },
};

export const useButton = ({
  color,
  customBackgroundColor,
  customColorText,
}) => {
  const backgroundColor = useMemo(() => {
    if (customBackgroundColor) return customBackgroundColor;

    return colorsAvailable[color].backgroundColor;
  }, [customBackgroundColor, color]);

  const textColor = useMemo(() => {
    if (customColorText) return customColorText;

    return colorsAvailable[color].color;
  }, [customColorText, color]);

  const borderButton = useMemo(() => {
    return colorsAvailable[color].border;
  }, [color]);

  return {
    backgroundColor,
    borderButton,
    textColor,
  };
};
