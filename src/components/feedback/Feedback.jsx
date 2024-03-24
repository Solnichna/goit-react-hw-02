import "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => (
  <div>
    <p>Good:{feedback.good}</p>
    <p>Neutral:{feedback.neutral}</p>
    <p>Bad:{feedback.bad}</p>
    <p>Total:{totalFeedback}</p>
    <p>Positive:{positiveFeedback}</p>
  </div>
);

export default Feedback;
