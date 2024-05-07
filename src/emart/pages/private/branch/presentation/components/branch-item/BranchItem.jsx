import { ButtonNavigate } from "@/common/presentation/components";
import PropTypes from "prop-types";
import { IoStorefrontOutline } from "react-icons/io5";
import Styles from "./scss/branch-item.module.scss";

export const BranchItem = ({ branch, colorBusiness }) => {
  const { code, url_redirect } = branch;

  return (
    <div className={`${Styles.BranchItemContainer} fadeIn`} key={code}>
      <div className={Styles.BranchItemCode}>
        <IoStorefrontOutline size={20} />
        <h3>Código - {code}</h3>
      </div>
      <div>
        <ButtonNavigate
          color={colorBusiness}
          navigateTo={() => (window.location.href = `${url_redirect}${code}`)}
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
