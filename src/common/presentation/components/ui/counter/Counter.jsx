import PropTypes from "prop-types";
import { GoTrash } from "react-icons/go";
import Styles from "./scss/counter.module.scss";

export const Counter = ({ value, onChangeValue }) => {
  const onDecrement = () => {
    if (value > 0) {
      onChangeValue(value - 1);
    }
  };

  const onIncrement = () => {
    onChangeValue(value + 1);
  };

  const onChangeInputValue = (e) => {
    const newValue = e.target.value;
    const expIntegerNumbers = /^[0-9\b]+$/;
    if (expIntegerNumbers.test(newValue)) {
      onChangeValue(Number(newValue));
    } else if (newValue === "") {
      onChangeValue(0);
    }
  };

  const onResetValue = () => {
    onChangeValue(0);
  };

  return (
    <div className={Styles.CounterContainer}>
      <button
        className={Styles.DecrementButton}
        disabled={value === 0}
        onClick={onDecrement}
      >
        -
      </button>
      <input
        type="numeric"
        value={value}
        onChange={onChangeInputValue}
        pattern="[0-9]*"
        min="0"
        step="1"
        inputMode="numeric"
      />
      <button className={Styles.IncrementButton} onClick={onIncrement}>
        +
      </button>
      <button
        disabled={value === 0}
        onClick={onResetValue}
        className={Styles.ResetButton}
      >
        <GoTrash />
      </button>
    </div>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onChangeValue: PropTypes.func.isRequired,
};
