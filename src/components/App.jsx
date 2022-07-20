import { Component } from "react";
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";


export default class App extends Component {
  static defaultProps = {
    initialgood: 0,
    initialneutral: 0,
    initialbad: 0,
  }

  state = {
    good: this.props.initialgood,
    neutral: this.props.initialneutral,
    bad: this.props.initialbad,
  };

countTotalFeedback() {
  const {good, neutral, bad} = this.state;
  return good + neutral + bad;
};

countPositiveFeedbackPercentage() {
  return Math.round((this.state.good / this.countTotalFeedback()*100));
};

onLeaveFeedback = e => {
  this.setState(prevState => (
    {[e]: prevState[e] + 1}
  ))
};

  render () {
    const {good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const positivPercentage = this.countPositiveFeedbackPercentage();
    return (
    <>
        <Section title="Please leave feedback">
            <FeedbackOptions
                options={['good', 'neutral', 'bad']}
                onLeaveFeedback={this.onLeaveFeedback}
            />
        </Section>
                
      <Section title="Statistics">
        {this.countTotalFeedback() > 0
        ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivPercentage={positivPercentage}
          />)
        : (<Notification message="There is no feedback" />)
        }
      </Section>
    </>
  );}
};
