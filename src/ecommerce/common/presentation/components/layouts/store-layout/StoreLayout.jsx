import PropTypes from "prop-types";
import { SideCart } from "../../../../../pages/private/cart/presentation/components";
import { cartModeTypes } from "../../../../domain";
import { Header } from "../../header/Header";
import { useStoreLayout } from "./view-model/useStoreLayout";

export const StoreLayout = ({ children }) => {
  const { headerHeight, cartMode } = useStoreLayout();

  return (
    <>
      <Header />
      <div
        style={{
          marginTop: `${headerHeight}px`,
          minHeight: `calc(100vh - ${headerHeight}px)`,
          position: "relative",
        }}
      >
        {children}
        {cartMode === cartModeTypes.BAR && <SideCart />}
      </div>
    </>
  );
};

StoreLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
