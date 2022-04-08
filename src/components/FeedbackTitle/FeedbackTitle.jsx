import PropTypes from 'prop-types';

export const FeedbackTitle = ({ text }) => {
    return (
        <div>
            <h2>{text}</h2>
        </div>
    )
};

FeedbackTitle.propTypes = {
    text: PropTypes.string.isRequired,
}