import PropTypes from "prop-types";
import { LoadingFull } from "../../../../../../common/presentation/components";
import { useRootEcommerceLayout } from "./view-model/useRootEcommerceLayout";

export const RootEcommerceLayout = ({ children }) => {
  const { isErrorConfigPage, isLoadingConfigPage } = useRootEcommerceLayout();

  return (
    <>
      <LoadingFull show={isLoadingConfigPage} />
      {!isLoadingConfigPage && !isErrorConfigPage && <div>{children}</div>}
    </>
  );
};

RootEcommerceLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
