import PropTypes from "prop-types";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>
            {options.map((option, index) => (
                <button type="button" key={index} name={option} onClick={onLeaveFeedback}>{option}</button>
            ))}
        </div>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
}