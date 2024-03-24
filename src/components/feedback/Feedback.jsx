import "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => (
  <div>
    <p>Good:{feedback.good}</p>
    <p>Neutral:{feedback.neutral}</p>
    <p>Bad:{feedback.bad}</p>
    <p>Total Feedback:{totalFeedback}</p>
    <p>Positive Feedback:{positiveFeedback}</p>
  </div>
);

export default Feedback;
