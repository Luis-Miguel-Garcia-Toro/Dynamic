import PropTypes from "prop-types";
import { useEffect } from "react";
import { useAppStore } from "../../../../infrastructure/store";

export const RootLayout = ({ children }) => {
  const { theme, configPages } = useAppStore();

  const setCSSVariablesColors = (colors) => {
    const root = document.querySelector(":root");
    for (let cssVarName in colors) {
      root.style.setProperty(`--color-${cssVarName}`, colors[cssVarName]);
    }
  };

  const setCSSVariablesImages = (config = {}) => {
    const { auth } = config;
    const loginBackgroundImage = auth?.login?.backgroundImage;
    const root = document.querySelector(":root");

    if (loginBackgroundImage) {
      root.style.setProperty("--login-background-image", `url(${loginBackgroundImage})`);
    }
  };

  useEffect(() => {
    if (theme && theme.colors) {
      setCSSVariablesColors(theme.colors);
    }
  }, [theme]);

  useEffect(() => {
    if (configPages) {
      setCSSVariablesImages(configPages);
    }
  }, [configPages]);

  return <>{children}</>;
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
