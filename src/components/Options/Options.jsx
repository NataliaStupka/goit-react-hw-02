import PropTypes from 'prop-types';
import s from './Options.module.css';

const Options = ({
  feedback,
  totalFeedback,
  onClickFeedback,
  onClickReset,
}) => {
  return (
    <div className={s.wrapper}>
      {Object.keys(feedback).map(item => (
        <button
          className={s.button}
          key={item}
          onClick={() => onClickFeedback(item)}
        >
          {item}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button className={s.button} onClick={() => onClickReset()}>
          Reset
        </button>
      )}
    </div>
  );
};

Options.prototype = {
  feedback: PropTypes.object.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  onClickFeedback: PropTypes.func.isRequired,
  onClickReset: PropTypes.func.isRequired,
};
export default Options;
