import PropTypes from "prop-types";
import { useEffect } from "react";
import { useRootEcommerceLayout } from "./view-model/useRootEcommerceLayout";

export const RootEcommerceLayout = ({ children }) => {
  const { updateConfigPageEcommerce } = useRootEcommerceLayout();

  useEffect(() => {
    updateConfigPageEcommerce();
  }, [updateConfigPageEcommerce]);

  return <div>{children}</div>;
};

RootEcommerceLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
