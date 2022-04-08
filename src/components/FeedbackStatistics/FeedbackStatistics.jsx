import PropTypes from "prop-types";

export const FeedbackStatistics = ({ title, goodFeedback, neutralFeedback,  badFeedback, totalFeedback, positiveShare}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>Good: <span>{goodFeedback}</span></p>
            <p>Neutral: <span>{neutralFeedback}</span></p>
            <p>Bad: <span>{badFeedback}</span></p>
            <p>Total: <span>{totalFeedback()}</span></p>
            <p>Positive feedback: <span>{positiveShare()}%</span></p>

        </div>
    )
};

FeedbackStatistics.propTypes = {
    title: PropTypes.string.isRequired,
    goodFeedback: PropTypes.number.isRequired,
    neutralFeedback: PropTypes.number.isRequired,
    badFeedback: PropTypes.number.isRequired,
    totalFeedback: PropTypes.func,
    positiveShare: PropTypes.func,
}