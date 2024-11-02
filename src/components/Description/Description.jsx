import PropTypes from 'prop-types';
import s from './Description.module.css';

const Description = ({ title = 'Location' }) => {
  return (
    <section>
      <h1 className={s.title}>{title}</h1>
      <p className={s.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </section>
  );
};

Description.prototype = {
  title: PropTypes.string.isRequired,
};

export default Description;
