import React, { Component } from 'react';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  options = Object.keys(this.state);

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const positive = (this.state.good / this.countTotalFeedback()) * 100;
    return positive ? Math.round(positive) : 0;
  };
  onLeaveFeedback = e => {
    const option = e.currentTarget.name;
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const moreThanOneFeedback = this.countTotalFeedback() > 0;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {moreThanOneFeedback ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedbacks={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          </Section>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </>
    );
  }
}
