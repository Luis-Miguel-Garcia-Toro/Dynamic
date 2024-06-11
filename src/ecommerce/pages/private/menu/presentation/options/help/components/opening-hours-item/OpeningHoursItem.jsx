import PropTypes from "prop-types";
import { IoMdTime } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import Styles from "./scss/opening-hours-item.module.scss";

export const OpeningHoursItem = ({ item }) => {
  return (
    <div className={Styles.OpeningHoursItem}>
      <p>
        <IoCalendarOutline />
        <span className={Styles.Title}>{item.title}</span>
      </p>
      <p>
        <IoMdTime />
        <span>{item.description}</span>
      </p>
    </div>
  );
};

OpeningHoursItem.propTypes = {
  item: PropTypes.object.isRequired,
};
