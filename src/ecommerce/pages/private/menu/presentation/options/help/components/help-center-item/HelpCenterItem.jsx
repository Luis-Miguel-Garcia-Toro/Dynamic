import PropTypes from "prop-types";
import { icons } from "../../../../../../../../../common/presentation/utils";
import Styles from "./scss/help-center-item.module.scss";

export const HelpCenterItem = ({ item }) => {
  const navigateTo = () => {
    if (item.type === "url") {
      window.open(item.url_redirect, "_blank");
    }
  };

  return (
    <div
      style={{
        cursor: item.type === "url" ? "pointer" : "default",
      }}
      onClick={navigateTo}
      className={Styles.HelpCenterItem}
    >
      {icons.getIcons(item.title)}
      <p>{item.description}</p>
    </div>
  );
};

HelpCenterItem.propTypes = {
  item: PropTypes.object.isRequired,
};
