import { Component } from "react";
import { Section } from "components/Section";
import { FeedbackOptions } from "components/FeedbackOptions";
import { Statistics } from "components/Statistics";
import { Notification } from "components/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //Метод для сбора feedback по нажатию кнопки
  handleFeedback = (evt) => {
    const stateKey = evt.target.name;
    this.setState((prevState) => ({
      [stateKey]: prevState[stateKey] + 1
    }))
  };

//Метод для подсчета суммы feedback
  countTotalFeedback = () => {
  //возвращает сумму значений всех ключей в state
  return Object.values(this.state).reduce((total, item) => total + item, 0);
  };    

//Метод для определения % positive feedback
  countPositiveFeedbackPercentage = () => {
    return (Math.round(this.state.good / this.countTotalFeedback() * 100))
  };
  
  render() { 
    const totalFeedback = this.countTotalFeedback;

    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback} />
        </Section>
        <Section title='Statistics'>
          {this.countTotalFeedback() ? <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage} /> : <Notification message="There is no feedback"/>}
        </Section>
      </>
    );
  }
};
