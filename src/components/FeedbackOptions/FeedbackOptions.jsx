import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'


export default function FeedbackOptions ({options, onLeaveFeedback}) {
    return (
    <div>
      {options.map(option =>(
        <button
          className={css.btn}
          key={option}
          onClick={() => {onLeaveFeedback(option)}}>
          {option}
        </button>
      ))}
    </div>
    )
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
}