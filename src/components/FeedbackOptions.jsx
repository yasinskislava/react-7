import "./Feedback.scss";

export default function FeedbackOptions({ obj }) {
    return <ul className="options">
        <li><button onClick={() => { obj.setState((prevData) => { return { good: prevData.good + 1 }; }) }} className="good">Good</button></li>
        <li><button onClick={() => { obj.setState((prevData) => { return { neutral: prevData.neutral + 1 }; }) }} className="neutral">Neutral</button></li>
        <li><button onClick={() => { obj.setState((prevData) => { return { bad: prevData.bad + 1 }; }) }} className="bad">Bad</button></li>
    </ul>;
}