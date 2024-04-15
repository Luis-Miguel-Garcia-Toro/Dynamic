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

  return {
    backgroundColor,
    textColor,
  };
};
