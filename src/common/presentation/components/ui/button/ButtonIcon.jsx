import PropTypes from "prop-types";
import Styles from "./scss/button-icon.module.scss";

export const ButtonIcon = ({ icon, onClick }) => {
  return (
    <button className={Styles.ButtonIcon} onClick={onClick} type="button">
      {icon}
    </button>
  );
};

ButtonIcon.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
