import PropTypes from "prop-types";
import { Loading } from "./loading";
import Styles from "./scss/loading-full.module.scss";

export const LoadingFull = ({ show }) => {
  if (!show) return null;

  return (
    <div className={Styles.LoadingFullContainer}>
      <div className={Styles.LoadingFullContent}>
        <Loading />
      </div>
    </div>
  );
};

LoadingFull.propTypes = {
  show: PropTypes.bool,
};
