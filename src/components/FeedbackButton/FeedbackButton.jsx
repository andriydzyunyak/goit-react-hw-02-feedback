

export const FeedbackButton = ({names, onClickGoodFeedback}) => {
    return (
        <div>
            {names.map((name, index) => (
                <button type="button" key={index} name={name} onClick={onClickGoodFeedback}>{name}</button>
            ))}
        </div>
    )
};