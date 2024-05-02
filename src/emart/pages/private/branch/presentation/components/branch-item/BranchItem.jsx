import { ButtonNavigate } from "@/common/presentation/components";
import PropTypes from "prop-types";
import Styles from "./scss/branch-item.module.scss";

export const BranchItem = ({ branch, colorBusiness }) => {
  const { code, url_redirect } = branch;

  return (
    <div className={`${Styles.BranchItemContainer} fadeIn`} key={code}>
      <h3>Código - {code}</h3>
      <div>
        <ButtonNavigate
          color={colorBusiness}
          navigateTo={() => window.open(`${url_redirect}${code}`, "_blank")}
          text="Ir al comercio"
          iconPosition="right"
        />
      </div>
    </div>
  );
};

BranchItem.propTypes = {
  branch: PropTypes.object.isRequired,
  colorBusiness: PropTypes.string.isRequired,
};
