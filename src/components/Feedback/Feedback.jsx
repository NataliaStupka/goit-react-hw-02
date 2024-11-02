import s from './Feedback.module.css';
import PropTypes from 'prop-types';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul className={s.feedbackList}>
        {Object.keys(feedback).map(item => (
          <li className={s.feedbackItem} key={item}>
            {item}: {feedback[item]}
          </li>
        ))}
        <li className={s.feedbackItem}>Total: {totalFeedback}</li>
        <li className={s.feedbackItem}>Positive: {positiveFeedback()}%</li>
      </ul>
    </div>
  );
};

Feedback.prototype = {
  feedback: PropTypes.object.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
