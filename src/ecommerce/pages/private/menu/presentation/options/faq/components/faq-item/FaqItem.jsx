import PropTypes from "prop-types";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { ButtonIcon } from "../../../../../../../../../common/presentation/components";
import Styles from "./scss/faq-item.module.scss";
export const FaqItem = ({ item }) => {
  const [showDescription, setShowDescription] = useState(false);

  const onToggleShowDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={`${Styles.FaqItem} fadeIn`}>
      <div
        className={`${Styles.FaqItemContainer} ${
          showDescription ? Styles.IsActive : ""
        }`}
      >
        <div className={Styles.FaqItemButton}>
          <ButtonIcon
            onClick={onToggleShowDescription}
            icon={
              showDescription ? (
                <FaMinus color="var(--color-primary)" />
              ) : (
                <FaPlus color="var(--color-primary)" />
              )
            }
          />
        </div>
        <h2 onClick={onToggleShowDescription}>{item.title}</h2>
        {showDescription && <p className="fadeIn">{item.description}</p>}
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  item: PropTypes.object.isRequired,
};
