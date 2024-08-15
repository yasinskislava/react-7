import "./Feedback.scss";
import Notification from "./Notification";

export default function Statistics({ good, neutral, bad, total, positiveFeedback }) {
    if (good + neutral + bad === 0) {
        return <Notification message="No feedback given"></Notification>
    }
    else {
        return <ul className="statistics">
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive Feedback: {positiveFeedback}%</li>
        </ul>;
    } 
}