import { Component } from "react";
import "./Feedback.scss";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0
  };
    countTotalFeedback() {
      const { good, bad, neutral } = this.state;
      const sum = good + neutral + bad;
      return sum;
    }
    countPositiveFeedback() {
        const { good, total } = this.state;
        return (good / total * 100).toFixed(2);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.good !== this.state.good || prevState.bad !== this.state.bad || prevState.neutral !== this.state.neutral) {
            this.setState({ total: this.countTotalFeedback() });
            setTimeout(() => {this.setState({positiveFeedback: this.countPositiveFeedback()})}, 1);     
        }  
    }
  render() {
    return <>
          <Section title="Please leave feedback">
            <FeedbackOptions obj={this}></FeedbackOptions>
          </Section>
          <Section title="Statistics">
            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.total} positiveFeedback={this.state.positiveFeedback}></Statistics>
          </Section>
      </>
  }
}

export default Feedback;