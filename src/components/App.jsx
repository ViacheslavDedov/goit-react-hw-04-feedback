import { useState } from "react";
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";


const App = () => {
  const [feedbacks, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

const countTotalFeedback = () => {
  return Object.values(feedbacks).reduce((acc, feedback) => {
      return acc + feedback;
    }, 0);
};

const countPositiveFeedbackPercentage = () => {
  return Math.round((good / countTotalFeedback()*100));
};

const onLeaveFeedback = e => {
  setFeedback(prevState => {
    return { ...prevState, [e]: prevState[e] + 1 };
  })
};

    const {good, neutral, bad} = feedbacks;
    
    return (
    <>
        <Section title="Please leave feedback">
            <FeedbackOptions
                options={Object.keys(feedbacks)}
                onLeaveFeedback={onLeaveFeedback}
            />
        </Section>
                
      <Section title="Statistics">
        {countTotalFeedback() > 0
        ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivPercentage={countPositiveFeedbackPercentage()}
          />)
        : (<Notification message="There is no feedback" />)
        }
      </Section>
    </>
  );}

export default App;
