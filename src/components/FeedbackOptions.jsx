import PropTypes from 'prop-types';
import {
  OptionsControlBox,
  OptionsControl,
} from 'components/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsControlBox>
      {options.map((option, index) => (
        <OptionsControl
          type="button"
          key={index}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </OptionsControl>
      ))}
    </OptionsControlBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
