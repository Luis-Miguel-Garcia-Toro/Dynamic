import PropTypes from "prop-types";
import { Header } from "../../header/Header";
import { usePrivateLayout } from "./view-model/usePrivateLayout";

export const PrivateLayout = ({ children }) => {
  const { headerHeight } = usePrivateLayout();

  return (
    <>
      <Header />
      <div style={{ marginTop: `${headerHeight}px` }}>{children}</div>
    </>
  );
};

PrivateLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
