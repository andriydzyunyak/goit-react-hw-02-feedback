//import PropTypes from "prop-types";
import { Component } from "react";
import { FeedbackTitle } from "components/FeedbackTitle/FeedbackTitle";
import { FeedbackButton } from "components/FeedbackButton/FeedbackButton";
import { FeedbackStatistics } from "components/FeedbackStatistics/FeedbackStatistics";

export class Feedback extends Component { 
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleFeedback = (evt) => {
        const stateKey = evt.target.name;
        this.setState((prevState) => ({
            [stateKey]: prevState[stateKey] + 1
        }))
    };

    countTotalFeedback = () => {
        return (this.state.good + this.state.neutral + this.state.bad) 
    };    

    countPositiveFeedbackPercentage = () => {
        return (this.state.good * 100 / this.countTotalFeedback())
    };

    setFeedback = () => { }

    render() {
        return (
            <div>
                <FeedbackTitle text='Please leave feedback'/>
                <FeedbackButton names={Object.keys(this.state)}
                    onClickGoodFeedback={this.handleFeedback} />
                <FeedbackStatistics
                    title='Statistics'
                    goodFeedback={this.state.good}
                    neutralFeedback={this.state.neutral}
                    badFeedback={this.state.bad}
                    totalFeedback={this.countTotalFeedback}
                    positiveShare={this.countPositiveFeedbackPercentage} />
            </div>
        );      
        }
}