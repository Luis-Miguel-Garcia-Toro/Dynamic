import PropTypes from "prop-types"
import { Header } from "../../header/Header"
import { useStoreLayout } from "./view-model/useStoreLayout"

export const StoreLayout = ({ children }) => {
  const { headerHeight } = useStoreLayout();

  return (
    <>
      <Header />
      <div
        style={{
          marginTop: `${headerHeight}px`,
          minHeight: `calc(100vh - ${headerHeight}px)`,
        }}
      >
        {children}
      </div>
    </>
  );
};

StoreLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
